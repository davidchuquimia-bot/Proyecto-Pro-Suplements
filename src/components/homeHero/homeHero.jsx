import React from "react";
import { Container } from "react-bootstrap";

import "./homeHero.css";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <Container className="home-hero__content">
        <p className="home-hero__eyebrow">Suplementos Pro Bolivia</p>
        <h1>Rendimiento con evidencia científica y sabor latino</h1>
        <p>
          Proteínas, ganadores de masa y salud metabólica diseñados para los
          objetivos más exigentes. Entregamos en todo el país en menos de 48 h.
        </p>
      </Container>
    </section>
  );
};

export default HomeHero;
