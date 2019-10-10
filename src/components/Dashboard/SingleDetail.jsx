import React from 'react';
import propTypes from 'prop-types';
import { Col, Card, CardTitle, CardText, Table } from 'reactstrap';

const SingleDetail = ({
  name, updated, pchange1, pchange2, pchange3, price, created, sym, rank, supply
}) => (
  <Col sm="4">
  <Card body className="text-center DetailsCard">
    <CardTitle>{name} ({sym})</CardTitle>
    <p>Percentage Changes</p>
    <Table hover>
        <thead>
          <tr>
            <th>1 Hour</th>
            <th>27 Hours</th>
            <th>7 days</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pchange1}</td>
            <td>{pchange2}</td>
            <td>{pchange3}</td>
          </tr>

        </tbody>
      </Table>
      <CardTitle>Price: {price}</CardTitle>
      <CardTitle>Total Supply: {supply}</CardTitle>
      <CardTitle>cmc Rank: {rank}</CardTitle>

    <CardText><b>Added on</b> {created}.</CardText>
    <CardText><b>Updated on</b> {updated}.</CardText>

  </Card>
</Col>
);

SingleDetail.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  rank: propTypes.number.isRequired,
  supply: propTypes.number.isRequired,
  pchange1: propTypes.number.isRequired,
  pchange2: propTypes.number.isRequired,
  pchange3: propTypes.number.isRequired,  
};
export default SingleDetail;
