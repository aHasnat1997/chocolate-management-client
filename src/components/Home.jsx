import { Button, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
// import { useState } from "react";


const Home = () => {
  const chocolates = useLoaderData();
  // const [chocolates, setChocolates] = useState([]);

  console.log(chocolates);

  return (
    <div className="container">
      <Link to='/add'><Button variant="outline-primary" className="mb-4">+ New Chocolate</Button></Link>
      <Table hover>
        <thead className="bg-info">
          <tr className="text-center">
            <th>Image</th>
            <th>Name</th>
            <th>Country/Factory</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">

          {
            chocolates.map(chocolate => <tr key={chocolate._id}>
              <td className="w-25 h-25"><img src={chocolate.image} alt="Chocolate Image" width="25%" height="50" /></td>
              <td>{chocolate.name}</td>
              <td>{chocolate.country}</td>
              <td>{chocolate.category}</td>
              <td>
                <Button variant="success" className="me-2"><BsPencilFill /></Button>
                <Button variant="danger"><BsFillTrashFill /></Button>
              </td>
            </tr>)
          }

        </tbody>
      </Table>
    </div>
  );
};

export default Home;
