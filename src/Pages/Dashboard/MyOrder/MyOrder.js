import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import './MyOrders.css';

const MyOrder = () => {
  const { user } = useAuth();
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTotalOrders(data));
  }, []);
  return (
    <div>
      <h1 className="order-head">Total Orders: {totalOrders.length}</h1>
      {totalOrders?.map((product) => (
        <div>
          <Table className="m-4" striped bordered hover variant="dark">
            <thead>
              {/* <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Option</th>
    </tr> */}
            </thead>
            <tbody>
              <tr>
                {/* <td>1</td> */}
                <td>{product?.Name}</td>
                <td>{product?.email}</td>
                <td>
                  <Button className="btn btn-danger">Delete</Button>
                </td>
              </tr>
              {/* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr> */}
              {/* <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
