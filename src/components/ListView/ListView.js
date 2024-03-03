import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';


const ListView = (props) => {

    const {users} = props;

    const navigate = useNavigate();
   
    const navigateUser = () => {
          navigate('/add');
    }

    const redirectUser = (data) => {
      // console.log(data);
      navigate('edit/'+data.id);
    }
    return (
      <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
           {
                users.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>
                            <Button variant="primary" type="submit" onClick={() => redirectUser (data)}>
                              Edit User
                            </Button>
                            </td>
                        </tr>
                    )
                })
           }
      </tbody>
    </Table>
      <Button variant="primary" type="submit" onClick={navigateUser}>
          Add User
        </Button>
    </>
    )
}

export default ListView;


