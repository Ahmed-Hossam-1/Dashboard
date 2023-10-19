import React from "react";

const Products = () => {
  return <div>Products</div>;
};

export default Products;

// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { User } from "../../Context/UserProvider";

// const Products = () => {
//   // const { userID } = useParams();
//   const [product, setProduct] = useState([]);
//   const [run, setRun] = useState(0);

//   const con = useContext(User);
//   const token = con.auth.token;

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/product/show", {
//         headers: {
//           Authorization: "Bearer " + token,
//           Accept: "application/json",
//         },
//       })
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, [run]);

//   async function deleteUser(userId) {
//     try {
//       const res = await axios.delete(
//         `http://127.0.0.1:8000/api/product/delete/${userId}`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       if (res.status === 200) {
//         setRun((prev) => prev + 1);
//       }
//     } catch {
//       console.log("none");
//     }
//   }

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <h1>Products</h1>
//       <Table variant="dark" striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>product</th>
//             <th>desc</th>
//             {/* <th>Action</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {product.map((pro, index) => (
//             <tr key={pro.id}>
//               <td>{index + 1}</td>
//               <td>{pro.title}</td>
//               <td>{pro.desc}</td>
//               <td>
//                 <Link to={`${pro.id}`}>
//                   <Button variant="success">Update</Button>
//                 </Link>
//                 <Button onClick={() => deleteUser(pro.id)} variant="danger">
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Products;
