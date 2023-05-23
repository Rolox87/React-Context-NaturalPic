import { useContext } from "react";
import context from "../mycontext";
import { Container, Row, Col, Card } from "react-bootstrap";
import Heart from "../components/Heart";

function Home() {
  const { fotos, setFavoritos } = useContext(context);

  return (
    <Container className="my-4">
      <h2>Natural Pic</h2>
      <Row className="gap-6 mx-auto">
        {fotos.map((foto) => (
          <Col key={foto.id} xs={10} md={6} lg={4} xl={3} className="mx-auto pb-4">
            <Card onClick={() => setFavoritos(foto.id)}>
              <Card.Img
                style={{
                  height: "260px",
                  objectFit: "cover"
                }}
                variant="top"
                src={foto.src.medium}
              />
              <Card.Text className="position-absolute text-light bottom-0 text-center w-100">
                {foto.alt}
              </Card.Text>
              <Heart liked={foto.liked} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;