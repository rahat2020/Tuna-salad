import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import head_rightImg from '../../assets/headerRght.png';
import curve from '../../assets/curve.png';
import coock from '../../assets/cook.png';
import delivery from '../../assets/delivery.png';
import thumbs from '../../assets/thumbs.png';
import HeaderFoot from '../HeaderFoot/HeaderFoot';

const Header = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <span className='h_subTitle'>Healthy & tasty food</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: '#FB9431' }}>Achieve Optimal</h1>
                <h1 style={{ color: '#3D3F42' }}>With Our Nutritious</h1>
                <h1 style={{ color: '#3D3F42' }}>Meal Plans</h1>
              </div>
              <p className='text-secondary'>
                Discover a world of delicious salad at our online salad paradise. salad meals are ready to eat in a minutes so save time energy.
              </p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>order food</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex justify-content-end align-items-center shadow-sm rounded">
                <img src={head_rightImg} alt="headerr-image" className='head_rightImg' />
              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <div className="d-flex my-4">
            <img src={curve} alt="curve" className='curve' />
          </div>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={coock} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Delicious Food</h5>
                  <p className='text-secondary'>Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={delivery} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Fast Delivery</h5>
                  <p className='text-secondary'>Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="">
                  <img src={thumbs} alt="coock" className='' style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="w-100">
                  <h5 style={{ color: '#3D3F42', fontWeight: 'bold' }}>Feedback
                    <small className='ms-3 fw-normal'>
                      <i className="fa-solid fa-star starr me-1"></i>
                      4.8 (14.5k)
                    </small></h5>
                  <p className='text-secondary'>Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>

  )
}

export default Header