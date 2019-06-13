import React from 'react';

export default class SinglePostHardCodedComponent extends React.Component {
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
                            Democracy means simply the bludgeoning of the people by the people for the people.
                        </p>

                        <hr className='divider'/>

                        <div className='clearfix post-image-text'>
                            <img className='float-left' src='https://via.placeholder.com/186x387.png' alt='post-image' />

                            <p>
                                Quisque congue lacus mattis massa luctus, nec hendrerit purus aliquet. Ut ac elementum
                                urna.
                                Pellentesque suscipit metus et egestas congue. Duis eu pellentesque turpis, ut maximus
                                metus. Sed ultrices tellus vitae rutrum congue. Fusce luctus augue id nisl suscipit, vel
                                sollicitudin orci egestas. Morbi posuere venenatis ipsum, ac vestibulum quam dignissim
                                efficitur. Ut vitae rutrum augue, in volutpat quam. Cras a viverra ipsum. Aenean ut
                                consequat ex, vitae vulputate nunc. Vestibulum metus nisi, aliquam sed tincidunt sit
                                amet,
                                pretium et augue.
                            </p>

                            <p>
                                Mauris sem odio, rhoncus eget euismod sed, pellentesque sit amet felis. Praesent dictum
                                eleifend dui et efficitur. Nunc non orci in neque sodales semper. Etiam euismod volutpat
                                lorem, <a href='#'>vestibulum malesuada</a> justo aliquet eget. Nunc lacus ante, varius
                                a
                                euismod eu,
                                finibus commodo erat. Curabitur tincidunt sit amet nunc id interdum. Aliquam augue nisi,
                                venenatis vitae ex at, lobortis fringilla nibh. Proin placerat enim vitae quis orci
                                dignissim, posuere nibh a, eleifend augue. Cras quis metus nec tortor aliquet
                                ullamcorper.
                                Quisque varius porta metus, ut maximus dolor euismod nec. Suspendisse sit amet feugiat
                                turpis.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit itaque minima
                                praesentium, recusandae sunt unde? Accusamus aperiam corporis ducimus earum in odio
                                omnis optio possimus, reprehenderit sapiente totam veniam.
                            </p>
                        </div>

                        <p className='quote'>
                            Curabitur ut leo pulvinar, consectetur magna eu, feugiat purus. Morbi hendrerit lectus
                            turpis, a porttitor velit imperdiet id.
                        </p>

                        <p>
                            Nunc placerat dolor at lectus hendrerit dignissim. Ut tortor sem, consectetur nec hendrerit
                            ut,
                            ullamcorper ac odio. Donec viverra ligula at quam tincidunt imperdiet. Nulla mattis
                            tincidunt
                            auctor. Nullam scelerisque ante mauris, egestas commodo nisi gravida ultrices. Suspendisse
                            dapibus feugiat tincidunt. Aliquam gravida quam at ipsum sagittis bibendum.
                        </p>

                        <div className='hash-tag-container clearfix'>
                            <a href='#'>#Democracy</a>
                            <a href='#'>#Introspection</a>
                        </div>
                    </div>

                    <hr className='divider'/>
                </div>
            </div>
        )
    }
}
