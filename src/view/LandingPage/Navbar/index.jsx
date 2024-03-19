import './navBar.css';

function NavBar() {
    return (
		<div className="nav-Bar">
			<div className='logo'>
				<h1><a href="main.jsx">Guiate</a></h1>
			</div>
			<div className="nav-line">
					<div className='inicio'><a href="index.html">Inicio</a></div>
					<div className='guias'>
						<a href="#">Guias</a>
						<ul>
							<li><a href="left-sidebar.html">Left Sidebar</a></li>
							<li><a href="right-sidebar.html">Right Sidebar</a></li>
							<li><a href="no-sidebar.html">No Sidebar</a></li>
						</ul>
					</div>
					<div className="escuelas"><a href="">Escuelas</a></div>
					<div className='login'><a href="#" className="button-primary">Inicia Sesion</a></div>
			</div>
		</div>
    )
  }
  
  export default NavBar