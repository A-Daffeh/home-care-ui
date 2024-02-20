const Footer = () => {
    const navbarStyle = { backgroundColor: '#e3f2fd' }

    return (
        <footer className="text-center text-lg-start text-muted mt-20" style={navbarStyle}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>
                <div>
               
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Pro Shipping
                            </h6>
                           
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Home</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Contact</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Login</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4 footerCopyright">
                &copy; 2024 Copyright:
                <a className="text-reset fw-bold" href="#">Pro Shipping</a>
            </div>
        </footer>
    )
}

export default F

// <!- go to react icons and replace these icons with whats there 
// when you click on the pro shipping text at the bottom it should take u to the home page 
// replace the contact in the footer with the laravel about us our locations contact info (the address)
// on the useful links at the bottom. link it to the same name as the nav bar so that when u click on each link it takes u to the correct page