import './Sidebar.css'
import Catogory from "./Catigory/Catigory"
import Price from "./Price/Price"
import Colors from './Colors/Colors'
import { FaShoppingCart } from "react-icons/fa";
const Sidebar = ({handleChange}) => {
  return (
    <div>
      <section className="sidebar">

          <div className="logo-containor">
            <FaShoppingCart/>
          </div>
        <div className='remaining' >

        <Catogory handleChange={handleChange} />
          <Price handleChange={handleChange}  />
          <Colors handleChange={handleChange}  />
         </div>
      </section>
    </div>
  )
}

export default Sidebar