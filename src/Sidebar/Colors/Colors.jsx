import Input from '../../components/Input'
import './Colors.css'

const Colors = ({handleChange}) => {
  return (
   <div>
        <h2 className='color-title' >Colors</h2>

        <div className='radios' >

        <label  className="sidebar-label-container">
          <input className='inpt'  onChange={handleChange}type='radio' value="" name='test1' ></input>
          <span className='checkmark' ></span>All
        </label>

          <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" />

          <Input handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" />
          <Input handleChange={handleChange} value="red" title="Red" name="test1" color="red" />
          <Input handleChange={handleChange} value="green" title="Green" name="test1" color="green" />
       
          <label  className="sidebar-label-container">
            <input className='inpt' type='radio' onChange={handleChange} value="white" name='test1' />
            <span className='checkmark' style={{backgroundColor:"white",border:"2px solid black"}} ></span>White
          </label>
        </div>

   </div>
  )
}

export default Colors