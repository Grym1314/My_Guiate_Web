import './banner.css';

function Banner() {
    return (
      <div className='banner-holder'>
					<div className="content">
						<div className="header">
							<h2>Prepara y elige tu propio futuro</h2>
							<p>And there are no hoverboards or flying cars.<br />
							Just apps. Lots of mother flipping apps.</p>
						</div>
						<span className="image-banner"><img src="src/assets/Banner/pic01.jpg" alt="" /></span>
					</div>
          <a href="#one" className="next-landing scrolly">Next</a>
      </div>
    )
  }
  
  export default Banner