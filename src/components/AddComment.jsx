import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComments = ({ asin }) => {
  const [comment, setcomment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // } we get rid of the didUpdate method as we are using hooks
  useEffect(() => {
    setcomment((c) => ({ ...c, elementId: asin }));
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();

    try {
      let DataFromBackStreet = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
          },
        }
      );

      if (DataFromBackStreet.ok) {
        alert("Comment has been added !");
        setcomment({
          comment: "",
          rate: 1,
          elementId: null, //why do we are setting again here ???? :/
        });
      } else {
        console.log("error");
        alert("Something went wrong, interesting...");
      }
    } catch (error) {
      alert("catcH error");
    }
  };

  return (
    <div>
      <Form className="bg-dark mt-5" onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Thoughts here..."
            value={comment.comment}
            onChange={
              (e) => setcomment({ ...comment, comment: e.target.value })
              // this.setState({
              //   comment: {
              //     //   did not understand much of spread op
              //     ...comment,
              //     comment: e.target.value,
              //   },
              // })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate for this book</Form.Label>
          <Form.Control
            as="select" //why select why as
            value={comment.rate}
            onChange={(e) => setcomment({ ...comment, rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>5</option>
            <option>4</option>
          </Form.Control>
        </Form.Group>
        <Button className="btn btn-sm mb-3" variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
};

export default AddComments;
