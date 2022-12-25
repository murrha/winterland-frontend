import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function OrderCard(){

    const orders = [
        {
            id: '1',
            name: 'Mickey Mouse',
            totalCost: 58.99
        },
        {
            id: '2',
            name: 'Chip \'n Dale',
            totalCost: 40.75
        },
        {
            id: '3',
            name: 'Mary Poppins',
            totalCost: 129.50
        },
        {
            id: '4',
            name: 'Peter Pan',
            totalCost: 200.00
        }
    ]
    


    return (
        <>
        <Card>
            <Card.Body>
                {orders.map((order, index) => (
                    <div key={index}>
                        <Card.Title>{order.name}</Card.Title>
                        <Card.Title>${order.totalCost}</Card.Title>
                        <Link to="/billing">
                            <Button variant="primary">Donate</Button>
                        </Link>
                        <hr/>
                    </div>
                ))}
            </Card.Body>
        </Card>
        </>
    )
}

export default OrderCard