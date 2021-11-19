import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './ReviewItem.css';

const ReviewItem = () => {
  const [reviewItems, setReviewItem] = useState([]);

  useEffect(() => {
    fetch("https://polar-oasis-62677.herokuapp.com/reviewPart")
      .then((res) => res.json())
      .then((data) => setReviewItem(data));
  }, []);
  return (
    <div className="review-main">
      <h2 className="review-header">Here is your Valuable Opinion {reviewItems.length}</h2>
      <div>
        {reviewItems.map((reviewItem) => (
          <div>
            <Table className="m-4" striped bordered hover variant="dark">
              <thead></thead>
              <tbody>
                <tr>
                  <td>{reviewItem?.yourOpinion}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
