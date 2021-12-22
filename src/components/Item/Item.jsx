import React,{Fragment} from 'react'
import { Card, Button} from 'react-bootstrap';

function Item(item) {
    return (
        <Fragment>
            
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>  
        </Fragment>
    )};

export default Item
