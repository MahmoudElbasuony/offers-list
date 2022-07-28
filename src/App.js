import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import OffersList from './Components/OffersList/OffersList';


function App() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs="12">
            <h1 className='text-center'>Offers</h1>
            <ErrorBoundary errorMessageElement={<h4 className='text-danger text-center fw-bold'>Failed to load offers list.</h4>}>
              <OffersList />
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
