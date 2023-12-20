import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogOne() {
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        image: '',
        comment: '',
        createdAt: '21 December 2023' // Tarih formatı
    });
    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await axios.get('http://localhost:3000/blogs');
                const foundBlog = blogResponse.data.find(b => b.slug === slug);

                const commentsResponse = await axios.get('http://localhost:3000/blogComments');
                const relatedComments = commentsResponse.data.filter(comment => comment.blogId === foundBlog.id);

                setBlog(foundBlog);
                setComments(relatedComments);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [slug]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/blogComments', {
                ...newComment,
                image: newComment.image || 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
                blogId: blog.id
            });
            setComments([...comments, response.data]);
            setNewComment({ name: '', email: '', image: '', comment: '', createdAt: '19 December 2023' });
        } catch (error) {
            console.error('Error submitting comment: ', error);
        }
    };

    const handleInputChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-content-wrapper">
            {/* Blog Page Area */}
            <div className="blog-page-area">
                <div className="container">
                    {/* Blog Single Post Details Wrapper */}
                    <div className="blog-single-post-details-wrapper">
                        {/* Blog Title and Meta Data */}
                        <h2 className="post-title">{blog.title}</h2>
                        <p className="post-meta">
                            By <a href="#" className="post-author">admin</a>
                            <span className="separator">|</span>
                            <a href="#">{blog.createdAt}</a>
                        </p>

                        {/* Blog Image Slider */}
                        <div className="post-thumbnail post-thumbnail--slider">
                            {/* Add your slider component here */}
                            <img src={blog.image} className='img-fluid w-100' alt={blog.title} />
                        </div>

                        {/* Blog Post Text Content */}
                        <div className="post-text-content">
                            <p>{blog.description}</p>
                        </div>

                        {/* Social Share Section */}
                        <div className="post-share-section">
                            {/* Social share icons */}
                        </div>
                    </div>

                    {/* Blog Comments Area */}
                    <div className="blog-comments-area">
                        <h3 className="blog-details-section-title">Comments ({comments.length})</h3>
                        <div className="blog-comments-wrapper">
                            {comments.map(comment => (
                                <div key={comment.id} className="single-blog-comment">
                                    <div className="single-blog-comment__image">
                                        <img src={comment.image} className="img-fluid" alt={comment.name} />
                                    </div>
                                    <div className="single-blog-comment__content">
                                        <div className="comment-time">
                                            <i className="fa fa-calendar" /> {comment.createdAt}
                                        </div>
                                        <h4>{comment.name}</h4>
                                        <p className="comment-text">{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Blog Comment Form Area */}
                    <div className="blog-comment-form-area">

                        <div className="row">
                            <div className="col-lg-12">
                                {/* Comment Form Wrapper */}
                                <div className="blog-comment-form-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h3 className="blog-details-section-title">Leave a comment</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-form-wrapper">
                                                <form onSubmit={handleCommentSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                type="text"
                                                                placeholder="Your Name (*)"
                                                                required
                                                                name="name"
                                                                value={newComment.name}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                type="email"
                                                                placeholder="Email (*)"
                                                                required
                                                                name="email"
                                                                value={newComment.email}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <input
                                                                type="text"
                                                                placeholder="Image URL"
                                                                name="image" // Bu kısım güncellendi
                                                                value={newComment.image}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <textarea
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Message *"
                                                                required
                                                                name="comment"
                                                                value={newComment.comment}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button
                                                                type="submit"
                                                                id="submit"
                                                                className="theme-button"
                                                                onClick={handleCommentSubmit}
                                                            >
                                                                ADD COMMENT
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Comment Form Wrapper */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogOne;
