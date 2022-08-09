const Latest = (props) => {
    return (        
            <div id="latest">
                <div className="latest">
                    <img src={props.img} alt=""/>
                    <p>{props.title}</p>
                    <p>{props.price}</p>
                </div>
            </div>
    )
}

export default Latest