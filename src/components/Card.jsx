
import { IoStarSharp } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ( {img,title,star,reviews,prevPrice,newPrice}) => {
 
  return  <section className='card' >
  <img className='card-img'  src={img} alt={title} ></img>


<div className="card-details">
  <h3 className='card-title' >{title}</h3>
  <section className='card-reviews' >
      <IoStarSharp className='rating-star' />
      <IoStarSharp className='rating-star' />
      <IoStarSharp className='rating-star' />
      <IoStarSharp className='rating-star' />
      <span className="total-reviews">{reviews}</span>
  </section>
  
  <section className='card-price' >
      <div className="price">
        <del>{prevPrice}</del>{newPrice}
      </div>
      <div className="bag">
          <BsFillBagHeartFill className='bg-icon' />
      </div>
  </section>
</div>
</section>
}

export default Card