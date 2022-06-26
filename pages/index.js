import Footer from "../components/footer";
import Toolbar from "../components/toolbar";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>Your one stop shop for the latest news articles</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
