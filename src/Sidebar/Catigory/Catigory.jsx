import Input from '../../components/Input'
import './Catigory.css'
const Catigory = ({handleChange}) => {
  return (
    <div>
    <h2 className='sidebar-title' > Catogory</h2>

    <div className='radios' >
        <label  className="sidebar-label-container">
          <input className='inpt'  onChange={handleChange}type='radio' value="" name='test' ></input>
          <span className='checkmark' ></span>All
        </label>
        <Input className='inpt' handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
        <Input className='inpt' handleChange={handleChange} value="flats" title="Flats" name="test" />
        <Input className='inpt' handleChange={handleChange} value="sandals" title="Sandals" name="test" />
        <Input className='inpt' handleChange={handleChange} value="heels" title="Heels" name="test" />

    </div>

    </div>
  )
}

export default Catigory