import WebSlider from './WebSlider'

const Home = () => {
    return (
        <>
            <WebSlider />
            <div className='container'>
                <h1 className='text-center mt-4'>Welcome</h1>
                <p className='container d-flex justify-content-center text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quibusdam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, libero.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, in.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, sint.
                </p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home