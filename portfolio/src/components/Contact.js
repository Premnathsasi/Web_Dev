import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import contactImg from '../Assets/img/contact-img.svg';

function Contact() {

    const nameRef = useRef();
    const mailRef = useRef();
    const phoneRef = useRef();
    const msgref = useRef();

    const submitHandler = async(e) => {
        e.preventDefault();
        const contactDetails = {
            name: nameRef.current.value,
            mail: mailRef.current.value,
            phone: phoneRef.current.value,
            message: msgref.current.value
        }
        try{
            const res = await fetch(`https://portfolio-a2b4c-default-rtdb.firebaseio.com/Contact.json`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactDetails)
            }
            );

            if (!res.ok){
                alert('Something went wrong...')
            } else {
                alert('Message sent successfully')

            }
            nameRef.current.value = "";
            mailRef.current.value="";
            phoneRef.current.value="";
            msgref.current.value="";

        }catch(err){

        }

    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <Form onSubmit={submitHandler}>
            <Form.Control type="text" placeholder="Full Name" ref={nameRef} />
            <Form.Control type="email" placeholder="Email Address" ref={mailRef}/>
            <Form.Control type="number" placeholder="Phone Number" ref={phoneRef}/>
            <Form.Control as="textarea" rows={3} placeholder="Write your Message" ref={msgref} />
            <Button type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
