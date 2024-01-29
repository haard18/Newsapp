import React from 'react'
const Newsitem=(props)=> {

    
        let { title, description, imageURL, newsURL, Author, Date, source } = props;
        return (
            <div>
                <div className="card my-3">
                <div className="pop">
                    
                    <span className="badge rounded-pill bg-danger" style={{ display:'flex',justifyContent:'flex-end' ,position:"absolute",right:0}}>
                        {source}
                        <span className="visually-hidden"></span>
                    </span>
                </div>
                    {/* Inbox */}

                    <img src={imageURL ? imageURL : "https://images.deccanherald.com/deccanherald%2F2024-01%2F2d9129b2-ceaa-4419-8ee4-084faa5104ac%2FGEK_VOKXYAA4wrk.jpg?rect=0%2C9%2C1200%2C630&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}.....</p>
                        <p className='card-text'>By {Author} on {Date.slice(0, 24)}</p>
                        <a rel="noreferrer" href={newsURL} target='_blank' className="btn btn-sm btn-primary">Read More</a>

                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem
