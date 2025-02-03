import Button from '../components/Button'
import './Recomended.css'

const Recomended = ({handleClick}) => {
  return (<>
  
    <h2 className='recomended-title' >Recomended</h2>
       
    <div className='recomended-flex' >
          <Button  className='btn'  onClickHandler={handleClick} value="" title="All Products" />
          <Button  className='btn'  onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button  className='btn'  onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button  className='btn'  onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button  className='btn'  onClickHandler={handleClick} value="Vans" title="Vans" />
    </div>
    </>
  )
}

export default Recomended