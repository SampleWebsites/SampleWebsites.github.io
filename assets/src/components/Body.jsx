const Body = () => {
    return (
        <div>

        {/* FEATURED */}
        <section className="reveal">
            <div className="title">
                <h1>Featured Products</h1>
                <p>Get <span className="fifty">50%</span> off on your first purchase!</p>
            </div>
            <div id="grid-container">
                <div className="grid-item item2">
                    <h1>Jackets</h1>
                </div>
                <div className="grid-item item3">
                    <h1>Clothes</h1>
                </div>
                <div className="grid-item item4">
                    <h1>Dresses</h1>
                </div>
                <div className="grid-item item5">
                    <h1>Best Sellers</h1>
                </div>
            </div>
        </section>

        {/* YOU MAY LIKE */}
        <section id="eyecatching" className="reveal">
            <div className="title2">
                <img src="https://drive.google.com/uc?id=1TVOYw5x-vxhuH-kf3fVJH904i95nhhGJ" alt=""/>
                <h1>You may like</h1>
            </div>
            <marquee behavior="scroll" direction="column" scrollamount="15">
                <div id="youmaylike">
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1ABYZZ0AT8NIjTbTK_3IpqYIKBbz-4PDp" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1KBBT5kEAKqL6YAbK0fRJ_PGjEvZ_NVtK" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1VW2bFYFfXiXZf7jCpTbHJDwnA8URFwO1" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1FcPHGKMt40WkmL-OYtFFDHAE4f2L5B0I" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1I2s3odChkcoy575l4vj5KYaV5e7_hr6-" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                    <div className="box">
                        <img src="https://drive.google.com/uc?id=1tYbeYrmbqgud0tfLMBjiTIYVK2NeBoMe" alt=""/>
                        <p>BUY NOW</p>
                    </div>
                </div>
            </marquee>
        </section>

        {/* BANNER */}
        <section className="reveal">
            <div id="banner">
                <div className="content">
                    <h2>Get the best products only at E-Commerce Sample Websites.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet itaque quibusdam nesciunt?</p>
                    <button>Purchase Now</button>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Body