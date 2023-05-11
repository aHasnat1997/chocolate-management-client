import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateChocolate = () => {
  const chocolateInfo = useLoaderData();
  console.log(chocolateInfo);

  const updateChocolate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const image = form.image.value;
    const category = form.category.value;

    const updatedChocolate = { name, country, image, category }
    console.log(updatedChocolate);

    fetch(`http://localhost:5000/chocolates/${chocolateInfo._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedChocolate)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully update to the List',
          })
        }
      })
  }



  return (
    <div className="container">
      <Link to='/'><Button variant="outline-primary" className="mb-4">All Chocolates</Button></Link>
      <Form onSubmit={updateChocolate}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' defaultValue={chocolateInfo.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" name='country' defaultValue={chocolateInfo.country} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name='image' defaultValue={chocolateInfo.image} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" name='category' className="mb-3"
            defaultValue={chocolateInfo.category}>
            <option value="Category Missing" >Select Category</option>
            <option value="Premium">Premium</option>
            <option value="White Chocolate">White Chocolate</option>
            <option value="Milk Chocolate">Milk Chocolate</option>
            <option value="Dark Chocolate">Dark Chocolate</option>
            <option value="Bittersweet Chocolate">Bittersweet Chocolate</option>
            <option value="Ruby Chocolate">Ruby Chocolate</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100'>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateChocolate;
