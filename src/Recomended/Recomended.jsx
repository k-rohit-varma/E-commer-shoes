import './Recomended.css'

const Recomended = ({handleClick}) => {
  return (<>
  
    <h2 className='recomended-title' >Recomended</h2>
    <div className='recomended-flex' >
        <button onClick={handleClick}  className='btn' >Nike</button>
        <button onClick={handleClick}  className='btn' >All products</button>
        <button onClick={handleClick}  className='btn' >Adidas</button>
        <button onClick={handleClick}  className='btn' >Puma</button>
        <button onClick={handleClick}  className='btn' >Vans</button>
    </div>
    </>
  )
}

export default Recomended