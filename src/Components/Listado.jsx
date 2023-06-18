import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, deleteItem }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Completo</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.id}</td>
                        <td className='#'>{colaborador.nombre}</td>
                        <td className='#'>{colaborador.correo}</td>
                        <td className='#'>{colaborador.edad}</td>
                        <td className='#'>{colaborador.cargo}</td>
                        <td className='#'>{colaborador.telefono}</td>
                        <td>
                            <i className='#' onClick={() => deleteItem(colaborador.id)}></i>
                        </td>
                    </tr>

                ))}
            </tbody>
        </Table>
    );
};
export default Listado;