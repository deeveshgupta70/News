import Footer from "../components/footer";
import Toolbar from "../components/toolbar";
import styles from "../styles/eom.module.css";

const EOM = ({ employee }) => {
  //   console.log(employee.results);
  const [data] = employee.results;
  // console.log(data);
  return (
    <div className="page-continer">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <img src={data.picture.large} alt="" />
          <h3>
            {data.name.title + " " + data.name.first + " " + data.name.last}
          </h3>
          <h4>{data.email}</h4>
          <h4>{`${data.location.city} ${data.location.state}, ${data.location.country}`}</h4>
          <h4>{data.dob.age}</h4>
          <h4>{data.cell}</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch("https://randomuser.me/api/?results=1");
  const data = await apiResponse.json();
  //   console.log(data);

  return {
    props: {
      employee: data,
    },
  };
};

export default EOM;
