import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import MyBadge from "./MyBadge";

const SingleBook = ({ selectedCard, changeSelectedCard, book }) => {
  return (
    <>
      <Row>
        <Col>
          <Card
            style={{
              opacity: selectedCard === book.asin ? "0.5" : "1",
            }}
          >
            <Card.Img
              className="img-fluid"
              style={{
                height: 300,
                objectFit: "cover",
              }}
              variant="top"
              src={book.img}
            />
            <Card.Body className="d-block-flex">
              <Card.Title className=" text-dark text-truncate">
                {book.title}
              </Card.Title>
              <MyBadge text="info" color={"success"} />
              <Button
                className="btn btn-primary btn-sm ml-5"
                onClick={() => changeSelectedCard(book.asin)}

                // onClick={() =>
                //   this.setState({ selected: !this.state.selected })
                // }
              >
                Comment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleBook;

// {this.state.selected && <CommentArea />}
