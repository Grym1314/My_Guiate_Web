import './navBar.css';

function NavBar() {
    return (
		<div className="nav-Bar">
			<div className='logo'>
				<h1><a href="main.jsx">Guiate</a></h1>
			</div>
			<div className="nav-line">
				<ul>
					<li><a href="index.html">Inicio</a></li>
					<li>
						<a href="#">Guias</a>
						<ul>
							<li><a href="left-sidebar.html">Left Sidebar</a></li>
							<li><a href="right-sidebar.html">Right Sidebar</a></li>
							<li><a href="no-sidebar.html">No Sidebar</a></li>
						</ul>
					</li>
					<li><a href="elements.html">Escuelas</a></li>
					<li><a href="#" className="button-primary">Inicia Sesion</a></li>
				</ul>
			</div>
		</div>
    )
  }
  
  export default NavBar