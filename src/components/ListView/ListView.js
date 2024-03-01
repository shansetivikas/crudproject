import Table from 'react-bootstrap/Table';

const ListView = (props) => {

    const {users} = props;
    return (
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
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                })
           }
      </tbody>
    </Table>
    )
}

export default ListView;


