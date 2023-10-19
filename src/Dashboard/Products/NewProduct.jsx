import React from "react";

const NewProduct = () => {
  return <div>NewProduct</div>;
};

export default NewProduct;
// import axios from "axios";
// import { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import context from "../../Context/UserProvider";
// import { useNavigate } from "react-router-dom";
// import Cookies from "universal-cookie";

// const NewProduct = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [img, setImage] = useState("");
//   const [accept2, setAccept] = useState(false);
//   const navegate = useNavigate();

//   const cookie = new Cookies();
//   const getTok = cookie.get("Bearer");
//   console.log(getTok);

//   //   const { auth } = useContext(context);
//   //   const getTok = auth.token;

//   async function handelSubmit(e) {
//     e.preventDefault();
//     setAccept(true);
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", desc);
//       //   formData.append("img", img);
//       // send data
//       const res = await axios.post(
//         "http://127.0.0.1:8000/api/product/create",
//         formData,
//         {
//           headers: {
//             Authorization: "Bearer " + getTok,
//             accept: "application/json",
//           },
//         }
//       );
//       navegate("/dashboard/product");
//     } catch (error) {
//       console.log(error);
//       setAccept(true);
//     }
//   }

//   return (
//     <div style={{ width: "100%", padding: "30px 0px 0px 50px" }}>
//       <h1>Create Products</h1>
//       <Form style={{ width: "100%" }} onSubmit={handelSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicText">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             type="text"
//             placeholder="Enter Name"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             onChange={(e) => setDesc(e.target.value)}
//             value={desc}
//             type="text"
//             placeholder="Enter Description"
//           />
//         </Form.Group>
//         {/* <Form.Group className="mb-3" controlId="formImage">
//           <Form.Label>image</Form.Label>
//           <Form.Control
//             // value={img}
//             type="file"
//             onChange={(e) => setImage(e.target.files.item(0))}
//             placeholder="Enter Password"
//           />
//         </Form.Group> */}
//         <Button variant="primary" type="submit">
//           create
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default NewProduct;
