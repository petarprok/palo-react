import React from 'react';
import {Link} from 'react-router-dom';

export default class HomeComponent extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            blogs: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json()) //TODO here we need to handle errors from response
            .then((blogs) => {
                this.setState({
                    blogs: blogs
                });
            });
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-8 offset-md-2'>
                    {
                        this.state.blogs.length > 0 ?
                            this.state.blogs.map((blog) => {
                                return (
                                    <div className='card mb-4' key={blog.id}>
                                        <img className='card-img-top' src='http://placehold.it/750x300'
                                             alt='Card image cap'/>

                                        <div className='card-body'>
                                            <h2 className='card-title'>{blog.title}</h2>

                                            <p className='card-text'>
                                                {blog.body.slice(0, 100)}
                                            </p>

                                            <Link className='btn btn-primary' to={'/single/' + blog.id}>
                                                Read More
                                            </Link>
                                        </div>

                                        <div className='card-footer text-muted'>
                                            Posted on January 1, 2017 by
                                        </div>
                                    </div>
                                )
                            }) : null
                    }
                </div>
            </div>
        )
    }
}
