import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import educationPosts from "../../data/educationPosts";

import "./blogScreen.css";

const categorySummaries = [
  {
    title: "Ganancia muscular",
    body:
      "Planifica tus fases de volumen con proteínas completas y creatina tamponada para optimizar la síntesis proteica.",
  },
  {
    title: "Investigación",
    body:
      "Analizamos los papers más recientes de NIH, Examine y journals de nutrición aplicada para separar mitos de evidencia real.",
  },
  {
    title: "Salud general",
    body:
      "Desde omega-3 hasta vitaminas liposolubles, compartimos protocolos para cuidar inflamación, cerebro y corazón.",
  },
];

const BlogScreen = () => {
  const [openOpinionId, setOpenOpinionId] = useState(null);

  const toggleOpinion = (id) => {
    setOpenOpinionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="screen blog-screen">
      <Container>
        <div className="blog-hero card-style">
          <p className="text-uppercase small text-muted mb-1">
            Centro de educación
          </p>
          <h1 className="title-style">Guías basadas en evidencia</h1>
          <p>
            Complementamos tu compra con artículos curados de instituciones como
            NIH, Examine y Healthline para que siempre sepas cuándo y cómo usar
            cada suplemento.
          </p>
          <Button as={Link} to="/" className="regular-button-style">
            Volver a la tienda
          </Button>
        </div>
        <Row className="mt-4">
          {categorySummaries.map((summary) => (
            <Col key={summary.title} sm={12} md={4} className="mb-3">
              <Card className="card-style h-100 blog-summary-card">
                <Card.Body>
                  <Card.Title>{summary.title}</Card.Title>
                  <Card.Text>{summary.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-2">
          {educationPosts.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="card-style h-100">
                <Card.Body>
                  <div className="small text-muted">{post.category}</div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="expert-quote">{post.summary}</Card.Text>
                  <p className="small text-muted m-0">{post.readTime}</p>
                  {openOpinionId === post.id && (
                    <blockquote className="expert-quote__opinion">
                      {post.opinion}
                    </blockquote>
                  )}
                  <Button
                    variant="outline-light"
                    className="regular-button-style-without-radius mt-2"
                    onClick={() => toggleOpinion(post.id)}
                  >
                    {openOpinionId === post.id
                      ? "Ocultar opinión"
                      : "Leer opinión"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogScreen;
