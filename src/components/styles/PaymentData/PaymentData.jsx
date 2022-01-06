import React from 'react'
import { Container } from 'react-bootstrap'
import './PaymentData.css'

function PaymentData() {


const icon1 =   'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg';
const icon2 = 'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg';


    return (
        <>
        <Container className='payment-container'>
            <div className='payment-first'>
    <img src={icon1}  alt="" />
                <h4>Tarjeta de crédito</h4>
                <h5>Ver promociones bancarias</h5>
            </div>
            <div className='payment-second'>
            <image  className='payment-icon' src={icon2} />
                <h4>hola</h4>
                <h5>hola</h5>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
        </>
    )
}

export default PaymentData
