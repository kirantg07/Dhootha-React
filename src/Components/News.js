import React, { useEffect,useState } from 'react';
import NewItems from './NewItems';
import Spin from './Spin';
import PropTypes from 'prop-types';

const News=(props)=> {
    const [articles,setArticles]=useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [totalResults,setTotalResults]=useState(0);

    useEffect(()=>{
        fetchNews(props); 
    },[])

    const fetchNews= async ()=> {
        const { country, category,apikey } = props;
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading( true );
        props.setProgress(30);
        const response = await fetch(url);
        props.setProgress(50);
        const data = await response.json();
        props.setProgress(70);
        setArticles(data.articles);
        setLoading( false);
        setTotalResults(data.totalResults);
        
        props.setProgress(100);
    }

    const handlePrevFunction = async () => {
        setPage(page - 1 );
        await fetchNews();
    };

    const handleNextFunction = async () => {
        setPage(page+1);
        await fetchNews();
    };

    
        return (
            <div className='container my-3' >
                <h1 className='text-center'style={{marginTop:'55px'}}>Dhootha - Top headlines</h1>
                {loading && <Spin />}
                <div className='row'>
                    {!loading &&
                        articles.map(element => {
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <NewItems
                                        title={element.title ? element.title.slice(0, 45) : ''}
                                        decription={element.description ? element.description.slice(0, 88) : ''}
                                        imageUrl={element.urlToImage ? element.urlToImage : 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/04/instagram-4-1712986431.jpg'}
                                        newsUrl={element.url}
                                        author={element.author ? element.author : 'Unknown'}
                                        date={element.publishedAt}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <button type='button' disabled={page <= 1} onClick={handlePrevFunction} className='btn btn-dark'>
                        &larr; Previous
                    </button>
                    <button
                        type='button'
                        disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                        onClick={handleNextFunction}
                        className='btn btn-dark'
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    
}
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'sports'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func // Make sure to include this prop type
};
export default News;