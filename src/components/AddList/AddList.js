import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, useParams } from 'react-router-dom';


const AddList = (props) => {
  // console.log(props);

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const users = props.users;
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if(id) {
          console.log(typeof id);
          const selectedItem = users.find((user) => user.id  === parseInt(id));
          setUserName(selectedItem.username);
          setEmail(selectedItem.email);
          console.log(selectedItem);
        }
    }, []);

    const  handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target),
        // formDataObj = Object.fromEntries(formData.entries());
        // formDataObj.id = Date.now();
        // const data = {}
        const formDataObj = {};
        formDataObj.username = username;
        formDataObj.email = email;
        formDataObj.id = Date.now();
        props.addUser(formDataObj);
        navigate('/');
        // console.log(formDataObj);
    }

    return (
      <>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          {id ? 'Update User' : 'Add User' }
        </Button>
      </Form>
      </>
    )
}

export default AddList;