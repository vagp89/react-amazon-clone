import Product from '../components/Product.js'
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="home_container ">
        <img className="home_image" src="./prime-video.jpg" alt=""/>
        <div className="home_row">
          <Product/>
          <Product/>
        </div>
        <div className="home_row">
          {/*product*/}
          {/*product*/}
          {/*product*/}
        </div>
        <div className="home_row">
          {/*product*/}
        </div>
      </div>
    </div>
  )
}

export default Home
