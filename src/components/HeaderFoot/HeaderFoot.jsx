import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
import food from '../../assets/food.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={food} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>React fitness goals with delectable, nutritous salad tailored for you.</h1>
              <p className='text-secondary my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis?</p>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore voluptatum dolores modi cupiditate quaerat optio quas dicta! Sequi, facere.</p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>order food</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot