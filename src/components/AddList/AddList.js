import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const AddList = (props) => {
    const navigate = useNavigate();

    const  handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
        props.addUser(formDataObj);
        navigate('/');
        // console.log(formDataObj);
    }

    return (
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="username"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default AddList;