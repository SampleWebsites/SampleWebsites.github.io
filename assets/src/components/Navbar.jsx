const Navbar = () => {
    return (
        <div className="navbar--container">
            <div className="navbar">
            <img src="https://drive.google.com/uc?id=12snaugDWNNW8xk5fVWhBMB2Pshd-fNfh" alt="LOGO"/>
            <nav className="line">
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#aboutus">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Navbar