import React from 'react';

export default class SinglePostComponent extends React.Component {

    postId = null;

    constructor() {
        super(...arguments);

        this.state = {
            blog: null,
            comments: null
        }
    }

    async componentWillMount() {
        if (this.props.match.params && this.props.match.params.id) {
            this.postId = this.props.match.params.id;

            await fetch('https://jsonplaceholder.typicode.com/posts/' + this.postId)
                .then(response => response.json()) //TODO here we need to handle errors from response
                .then((blog) => {
                    this.setState({
                        blog: blog
                    });
                });

            await this.getCommentsByPostId();
        }
    }

    async getCommentsByPostId() {
        await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + this.postId)
            .then(response => response.json()) //TODO here we need to handle errors from response
            .then((comments) => {
                this.setState({
                    comments: comments
                });
            });
    }

    render() {
        return (
            <div className='container'>
                <div className='single-post-container'>
                    <div className='clearfix'>
                        <div className='float-right'>
                            <button type='button' className='btn btn-primary btn-reflect'>I Do Reflect</button>
                        </div>
                    </div>

                    <div className='single-post-content'>
                        <p className='post-creation-date'>Sep 11</p>
                        <p className='title'>
                            {this.state.blog !== null ? this.state.blog.title : null}
                        </p>

                        <hr className='divider'/>

                        <div className='clearfix post-image-text'>
                            <img className='float-left' src='https://via.placeholder.com/186x387.png' alt='post-image'/>

                            <p>{this.state.blog !== null ? this.state.blog.body : null}</p>
                        </div>

                        <p className='quote'>
                            quote goes here
                        </p>

                        <p>
                            another paragraf goes here
                        </p>

                        <div className='hash-tag-container clearfix'>
                            <a href='#'>#Democracy</a>
                            <a href='#'>#Introspection</a>
                        </div>
                    </div>

                    <hr className='divider'/>

                    <div className='single-post-content'>
                        <h3>Comments</h3>

                        {
                            this.state.comments ?
                                (
                                    <ul className='list-group'>
                                        {
                                            this.state.comments.map((comment) => {
                                                return (
                                                    <li className='list-group-item' key={comment.id}>
                                                        <b>{comment.name}</b> said: <br/>
                                                        {comment.body}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
