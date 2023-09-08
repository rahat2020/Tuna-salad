import Header from '../Header/Header';
import Topbar from '../Topbar/Topbar';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <div className='h_main'>
      <Topbar/>
      <Header/>
    </div>
  )
}

export default HeaderMain