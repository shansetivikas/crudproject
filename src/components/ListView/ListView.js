import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ListView = (props) => {

    const {users} = props;
    const navigate = useNavigate();
    const navigateUser = () => {
          navigate('/add');
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


