

const Input = ({handleChange,value,title,name,color}) => {
  return  <label className='sidebar-label-containor' >
  <input onClick={handleChange} className='inpt' value={value} type='radio'name={name}></input>
  <span className='checkmark' style={{backgroundColor:color}} ></span>{title}
</label>
}

export default Input