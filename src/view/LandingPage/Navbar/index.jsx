import './navBar.css';

function navBar() {
    return (
		<div className="nav-Bar">
		<h1 className="logo"><a href="index.html">Guiate</a></h1>
		<div className="nav">
			<ul>
				<li><a href="index.html">Home</a></li>
				<li>
					<a href="#">Layouts</a>
					<ul>
						<li><a href="left-sidebar.html">Left Sidebar</a></li>
						<li><a href="right-sidebar.html">Right Sidebar</a></li>
						<li><a href="no-sidebar.html">No Sidebar</a></li>
						<li>
							<a href="#">Submenu</a>
							<ul>
								<li><a href="#">Option 1</a></li>
								<li><a href="#">Option 2</a></li>
								<li><a href="#">Option 3</a></li>
								<li><a href="#">Option 4</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="elements.html">Elements</a></li>
				<li><a href="#" className="button-primary">Sign Up</a></li>
			</ul>
		</div>
	</div>
    )
  }
  
  export default navBar