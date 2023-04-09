import { useState } from "react"; //handy link to understand useState => https://www.w3schools.com/react/react_usestate.asp

const images = [
  "https://images.pexels.com/photos/8516750/pexels-photo-8516750.jpeg",
  "https://images.pexels.com/photos/11815778/pexels-photo-11815778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/16049221/pexels-photo-16049221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6956499/pexels-photo-6956499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]

export default function App() {  //we need to export this function because we are using it in 'index.js'
  const [current, setCurrent] = useState(0)

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1); //is equal to => if current is equal to length of images nextSlide = 0 else add 1 to current
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Carousel Project</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}