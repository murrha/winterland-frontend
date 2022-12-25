import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function OrderCard(){

    const ordersList = [
        {
            id: '1',
            totalCost: 58.99
        },
        {
            id: '2',
            totalCost: 40.75
        },
        {
            id: '3',
            totalCost: 129.50
        },
        {
            id: '4',
            totalCost: 200.00
        }
    ]
    

    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title>Anonymous</Card.Title>
                <Card.Title>Price</Card.Title>
                <Link to="/billing">
                    <Button variant="primary">Donate</Button>
                </Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default OrderCard