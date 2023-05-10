import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const AddChocolate = () => {
  const addChocolate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const image = form.image.value;
    const category = form.category.value;

    const newChocolate = { name, country, image, category }

    console.log(name, country, image, category);

    fetch('http://localhost:5000/chocolates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newChocolate)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className="container">
      <Link to='/'><Button variant="outline-primary" className="mb-4">All Chocolates</Button></Link>
      <Form onSubmit={addChocolate}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Chocolate Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" name='country' placeholder="Enter Country Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name='image' placeholder="Enter Image URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" name='category' className="mb-3">
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
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddChocolate;
