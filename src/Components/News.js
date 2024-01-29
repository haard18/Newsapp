import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        
        setLoading(true);
    
        try {
            const data = await fetch(url);
    
            if (!data.ok) {
                throw new Error(`HTTP error! Status: ${data.status}`);
            }
    
            const parsedData = await data.json();
            setArticles([...articles, ...parsedData.articles]);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    

    


    useEffect(() => {
        updateNews();
    });

    const fetchData = async () => {
        setPage(page + 1);
        updateNews();
    };

    return (
        <div className='container my-4'>
            <h2 className='text-center' style={{ margin: 50 }}>
                News-Universe Top {capitalizeFirst(props.category)} Headlines
            </h2>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className='row'>
                    {articles.map((element, index) => (
                        <div className='col-md-4' key={index}>
                            <Newsitem
                                title={element.title}
                                description={element.description}
                                imageURL={element.urlToImage}
                                newsURL={element.url}
                                Author={element.author ? element.author : 'Anonymous'}
                                Date={Date(element.publishedAt).toString()}
                                source={element.source.name}
                            />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

News.propTypes = {
    setProgress: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    pagesize: PropTypes.number,
};

export default News;
