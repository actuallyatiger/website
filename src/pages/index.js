import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as styles from "../styles/index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.name}>Tiger Taylor</h1>
        <div className={styles.rightSide}>
          <div className={styles.projects}>
            <h2>Projects</h2>
            <ul>
              <li>
                <Link to="#">Project 1</Link>
              </li>
              <li>
                <Link to="#">Project 2</Link>
              </li>
              <li>
                <Link to="#">Project 3</Link>
              </li>
              <li>
                <Link to="#">Project 4</Link>
              </li>
              <li>
                <Link to="#">Project 5</Link>
              </li>
              <li>
                <Link to="#">Project 6</Link>
              </li>
              <li>
                <Link to="#">Project 7</Link>
              </li>
              <li>
                <Link to="#">Project 8</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
