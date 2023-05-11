import { Button, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useState } from "react";
import { useTitle } from "../hooks/useTitle";


const Home = () => {
  useTitle('Home');
  const loadChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadChocolates);

  // console.log(chocolates);

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = chocolates.filter(chocolate => chocolate._id !== id);
              setChocolates(remaining);
            }
          })
      }
    })
  }

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
                <Link to={`/update/${chocolate._id}`}>
                  <Button variant="success" className="me-2"><BsPencilFill /></Button>
                </Link>
                <Button onClick={() => handleDelete(chocolate._id)} variant="danger"><BsFillTrashFill /></Button>
              </td>
            </tr>)
          }

        </tbody>
      </Table>
    </div>
  );
};

export default Home;
