import React from 'react'
import '../Styles/News.scss'
function News() {

    const newslist = [
        {
            'id': 1,
            'news_img': require('../Images/news-1.jpg'),
            'news_date': '07 Nov',
            'comment_author': 'admin',
            'comments': '3 Comments',
            'news_title': 'How does a ductless heat pump work?',
            'news_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.'
        },
        {
            'id': 2,
            'news_img': require('../Images/news-2.jpg'),
            'news_date': '26 Oct',
            'comment_author': 'admin',
            'comments': '3 Comments',
            'news_title': 'Simple hack to improve A/C efficiency',
            'news_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.'
        },
        {
            'id': 3,
            'news_img': require('../Images/news-3.jpg'),
            'news_date': '20 Oct',
            'comment_author': 'admin',
            'comments': '3 Comments',
            'news_title': 'Preparing your home before vacation',
            'news_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.'
        }
    ]
    return (
        <div className='news-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='section-title'>
                            <h1>Our latest news</h1>
                        </div>
                    </div>
                    {newslist.map(item => (
                        <div className='col-md-4 col-sm-6' key={item.id}>
                            <div className='news_box'>
                                <div className='news_img'>
                                    <img src={item.news_img} alt="blog 1" />
                                    <span className='news_date'>{item.news_date}</span>
                                </div>
                                <div className='news_details'>
                                    <span class="comment_author">by <a href="#">{item.comment_author}</a> - <a href="#">{item.comments}</a></span>
                                    <h1><a href="#">{item.news_title}</a></h1>
                                    <p>{item.news_desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News
