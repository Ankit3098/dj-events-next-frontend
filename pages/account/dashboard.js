import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import { cookieParser } from "@/helper/index";
import styles from "@/styles/Dashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardEvent from "@/components/DashboardEvent";

const DashboardPage = ({ events, token }) => {
  const router = useRouter();

  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        toast("Something went wrong!!");
      } else {
        router.push("/account/dashboard");
      }
    }
  };

  return (
    <Layout title="User Dashboard">
      <div className={styles.dash}>
        <ToastContainer />
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        {events.map((evt) => (
          <>
            <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
          </>
        ))}
      </div>
    </Layout>
  );
};

export default DashboardPage;

export async function getServerSideProps({ req }) {
  const { token } = cookieParser(req);
  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}
