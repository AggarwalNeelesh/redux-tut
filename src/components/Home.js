import './Home.css'
import volleyball from '../images/vollyball.png'
export default function Home(){
    return(
        <>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='image-wrapper'>
                    <img className='image-wrapper' alt="volleyball" src={volleyball}></img>
                </div>
                <div className='item-wrapper'>Volleyball</div>
                <div className='price-wrapper'>₹ 490</div>
                <button className='button-wrapper'>Buy now</button>

            </div>
        </>
    )
}