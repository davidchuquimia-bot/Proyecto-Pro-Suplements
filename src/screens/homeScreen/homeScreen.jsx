import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

import { Row, Col, Card, Button } from "react-bootstrap";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";
import Message from "../../components/message/message";
import Paginate from "../../components/paginate/paginate";
import SearchBox from "../../components/searchBox/searchBox";
import ProductCarousel from "../../components/productCarousel/productCarousel";
import HomeHero from "../../components/homeHero/homeHero";
import categories from "../../data/categories";
import educationPosts from "../../data/educationPosts";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error, isError } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  const errorMessage =
    error?.data?.message || error?.error || "Failed to load products";

  return (
    <>
      {!keyword ? (
        <>
          <HomeHero />
          <section className="mb-5">
            <ProductCarousel />
          </section>
        </>
      ) : (
        <Link to="/" className="regular-button-style btn mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">{errorMessage}</Message>
      ) : (
        <div className="screen">
          <section className="products-search-wrapper">
            <h1 className="title-style">Últimos productos</h1>
            <SearchBox />
          </section>
          {!keyword && (
            <section className="mb-5">
              <h2 className="title-style">Explora por objetivo</h2>
              <Row>
                {categories.map((category) => (
                  <Col key={category.id} sm={12} md={4} className="mb-3">
                    <Card className="card-style h-100">
                      <Card.Body>
                        <Card.Title>{category.title}</Card.Title>
                        <Card.Text>{category.description}</Card.Text>
                        <Button
                          as={Link}
                          to={`/search/${category.keyword}`}
                          className="regular-button-style"
                        >
                          Ver suplementos
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          )}
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
          {!keyword && (
            <section className="mt-5">
              <h2 className="title-style">Centro de educación</h2>
              <Row>
                {educationPosts.map((post) => (
                  <Col key={post.id} sm={12} md={4} className="mb-3">
                    <Card className="card-style h-100">
                      <Card.Body>
                        <div className="text-muted small">{post.category}</div>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.summary}</Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">{post.readTime}</span>
                          <Button
                            as={Link}
                            to={post.link}
                            target="_blank"
                            rel="noreferrer"
                            variant="outline-light"
                            className="regular-button-style-without-radius"
                          >
                            Leer más
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
