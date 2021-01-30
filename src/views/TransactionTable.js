import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PaymentNavbar from "../components/layout/MainNavbar/NavbarNav/PaymentNavbar";

const TransactionTable = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Payments" className="text-sm-left" />
    </Row>

    <Row>
      <PaymentNavbar />
    </Row>

    {/* Transaction table*/}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <p className="m-0">Showing</p>
          </CardHeader>

          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    Item Type
                  </th>

                  <th scope="col" className="border-0">
                    Price
                  </th>
                  <th scope="col" className="border-0">
                    Transaction No
                  </th>
                  <th scope="col" className="border-0">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows 19" 250 SSD 120GB</td>
                  <td>$73430</td>
                  <td>Gdańsk</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Asus windows 17" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
                <tr>
                  <td>Apple Mac Book 15" 250 SSD 12GB</td>
                  <td>$73430</td>
                  <td>1234567890</td>
                  <td>12:30</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default TransactionTable;
