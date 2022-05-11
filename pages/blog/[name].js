import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import data from "../../data/data.json"; //option 1
import styles from "../../styles/Home.module.scss";
export default function Home({ dataExport }) {
  const router = useRouter();
  const { name } = router.query;
  const [description, setDescription] = useState(); //Option 1 & 2, where state is needed
  // let description; //option 3

  //Option 1: useeffect, state needed, router dependency needed
  useEffect(() => {
    if (!router.isReady) return;
    console.log(name);
    data.map(function (item) {
      if (item.name === name) {
        setDescription("Description: " + item.description);
      }
    });
  }, [router.query.name, router.isReady]);

  //Option 2: Server side props. State used, no router dependency needed
  //   useEffect(() => {
  //     console.log(name);
  //     dataExport.map(function (item) {
  //       if (item.name === name) {
  //         setDescription(item.name + ": " + item.description);
  //       }
  //     });
  //   }, []);

  //Option 3: Server side props. No State, no router dependency needed
  // Hide state description. use let
  //   console.log(name);
  //   dataExport.map(function (item) {
  //     if (item.name === name) {
  //       description = item.name + ": " + item.description;
  //     }
  //   });

  //Option 4: Server side props. nothing needed, write code inline

  return (
    <div className={styles.main}>
      <a href="/" className={styles.homelink}>
        &lt; Home
      </a>
      {/* Option 1, 2, 3. For option 3 use let description*/}
      <div className={styles.description}>{description}</div>

      {/* Option 4: Server Side props, inline, no state, useeffect needed. hide description above */}
      {/* {dataExport.map(function (item) {
        if (item.name === name) {
          return (
            <div key={item.id}>
              {item.name}: {item.description}
            </div>
          );
        }
      })} */}
    </div>
  );
}

// Server Side Props: This gets called on every request
// export async function getServerSideProps() {
//   const url = "http://localhost:3000/api/blogdata";
//   const res = await fetch(url);
//   const dataExport = await res.json();
//   return { props: { dataExport } };
// }
