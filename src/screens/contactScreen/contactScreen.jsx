import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

import "./contactScreen.css";

const ContactScreen = () => {
  const mailto =
    "mailto:supplementsprobo@gmail.com?subject=Consulta%20sobre%20suplementos";

  return (
    <div className="screen contact-screen">
      <Container>
        <Row className="gy-4">
          <Col md={6}>
            <Card className="card-style h-100">
              <Card.Body>
                <p className="text-uppercase small text-muted mb-1">
                  ¿Preguntas? Resolvemos en 12 h
                </p>
                <h1 className="title-style">Contacto directo</h1>
                <p>
                  Nuestro equipo responde por correo y WhatsApp a atletas,
                  coaches y laboratorios interesados en Suplementos Pro Bolivia.
                </p>
                <div className="contact-chip">
                  <FaEnvelope />
                  <div>
                    <p className="m-0">Email prioritario</p>
                    <a href={mailto}>supplementsprobo@gmail.com</a>
                  </div>
                </div>
                <div className="contact-chip">
                  <FaWhatsapp />
                  <div>
                    <p className="m-0">WhatsApp</p>
                    <a
                      href="https://wa.me/59170000000?text=Hola%2C%20necesito%20asesor%C3%ADa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +591 700 00 000
                    </a>
                  </div>
                </div>
                <Button href={mailto} className="regular-button-style mt-3">
                  Enviar Email
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-style h-100">
              <Card.Body>
                <p className="text-uppercase small text-muted mb-1">
                  Agenda una asesoría
                </p>
                <h2 className="title-style">Cuéntanos tu objetivo</h2>
                <Form action={mailto} method="GET">
                  <Form.Group className="mb-3" controlId="goal">
                    <Form.Label>Objetivo principal</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Ej.: Ganar masa muscular"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="details">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="body"
                      rows={4}
                      placeholder="Comparte tu plan de entrenamiento, experiencia y presupuesto."
                    />
                  </Form.Group>
                  <Button type="submit" className="regular-button-style">
                    Enviar Email
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactScreen;
