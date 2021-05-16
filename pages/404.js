import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
const ErrorPage = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <p>Sorry, There is Nothing Here</p>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
