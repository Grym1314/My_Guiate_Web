import './banner.css';

function Banner() {
    return (
      <div className='banner-holder'>
					<div className="content">
						<div className="header">
							<h2>Prepara y elige tu propio futuro</h2>
							<p>Guiate te ofrece la capacidad de prepararte para el examen de admision <br />
							de cualquier Univerdidad de la Republica mexicana. De manera gratuita y actualizada.</p>
						</div>
						<span className="image-banner"><img src="src/assets/Banner/pic01.jpg" alt="" /></span>
					</div>
          <a href="#one" className="next-landing scrolly">Next</a>
      </div>
    )
  }
  
  export default Banner