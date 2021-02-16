import Product from '../components/Product.js'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home_container ">
        <img className="home_image" src="./prime-video.jpg" alt=""/>
        <div className="home_row">
          <Product
            id={1}
            title={"The lean startup"}
            price={29.09}
            rating={5}
            image={"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"}
          />
          <Product
            id={2}
            title={"Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"}
            price={29.99}
            rating={5}
            image={"https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"}
          />        </div>
        <div className="home_row">
         <Product
            id={3}
            title={"Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080)"}
            price={122.09}
            rating={5}
            image={"https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"}
          />
         <Product
            id={4}
            title={"2021 AutoFocus 1080p Webcam with Stereo Microphone and Privacy Cover"}
            price={54.09}
            rating={5}
            image={"https://m.media-amazon.com/images/I/61BGZKR0OBL._AC_UY436_FMwebp_QL65_.jpg"}
          />
         <Product
            id={5}
            title={"RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound"}
            price={25.00}
            rating={5}
            image={"https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY436_FMwebp_QL65_.jpg"}
          />

        </div>
        <div className="home_row">
           <Product
            id={6}
            title={"VIZIO 40-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming (V405-H19)"}
            price={209.00}
            rating={5}
            image={"https://m.media-amazon.com/images/I/81NCnG8UvYL._AC_UY436_FMwebp_QL65_.jpg"}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
