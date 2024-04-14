import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import costcoLogo from "../Costco-logo.png";
import sproutsLogo from "../Sprouts-logo.png";
import aldiLogo from "../Aldi-logo.png";

function StoreListings() {
  return (
    <div>
      <h2 className="display-6 m-1 text-center">Browse stores in San Diego</h2>
      <Container style={{ marginTop: "40px" }}>
        <Row
          style={{ borderBottom: "1px solid #E8E9EB"}}
          className="justify-content-center align-items-center mb-3"
        >
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={aldiLogo}
              style={{ height: "50px" }}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={sproutsLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={costcoLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <p>Delivery</p>
            </Col>
          </Col>
        </Row>
        <Row
          style={{ borderBottom: "1px solid #E8E9EB"}}
          className="justify-content-center align-items-center"
        >
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={aldiLogo}
              style={{ height: "50px" }}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={sproutsLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Col>
          <Col sm={4} className="d-flex align-items-center">
            <Image
              src={costcoLogo}
              style={{ height: "50px"}}
            />
            <Col style={{textAlign: "left"}}>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <p>Delivery</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListings;
