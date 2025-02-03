import './Price.css'
import '../Catigory/Catigory.css'
import Input from '../../components/Input'

const Price = ({handleChange}) => {
  return (
    <div>

      <div className="price-title">
        <h2>Price</h2>
      </div>

      <div className='radios' >
      <label  className="sidebar-label-container">
          <input className='inpt'  onChange={handleChange}type='radio' value="" name='test2' ></input>
          <span className='checkmark' ></span>All
      </label>

      <Input handleChange={handleChange} value={50} title={"$0 - $50"} name="test2" />
      <Input handleChange={handleChange} value={100} title={"$50 - $100"} name="test2" />
      <Input handleChange={handleChange} value={150} title={"$100 - $150"} name="test2" />
      <Input handleChange={handleChange} value={200} title={"$150 - $200"} name="test2" />
      </div>

    </div>
  )
}

export default Price