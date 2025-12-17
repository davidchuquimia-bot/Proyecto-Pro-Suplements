import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import "./errorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 500;
  const message =
    error?.data?.message || error?.statusText || error?.message || "Something went wrong.";

  return (
    <div className="error-page">
      <Container className="error-page__content">
        <h1 className="error-page__title">Oops!</h1>
        <p className="error-page__subtitle">Unexpected application error</p>
        <p className="error-page__status">
          Status: <strong>{status}</strong>
        </p>
        <p className="error-page__message">{message}</p>
        <Button as={Link} to="/" className="regular-button-style mt-3">
          Go Home
        </Button>
      </Container>
    </div>
  );
};

export default ErrorPage;
