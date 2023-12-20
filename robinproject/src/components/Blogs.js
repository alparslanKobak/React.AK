import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get('http://localhost:3000/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Blog verileri alınırken bir hata oluştu:', error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="breadcrumb-area section-space--breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">Blog Posts</h2>
                <ul className="breadcrumb-list">
                  <li><Link to="/Home">Home</Link></li>
                  <li className="active">Blog Posts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content-wrapper">
        <div className="blog-element-wrapper section-space">
          <div className="blog-slider-area pt-0 pb-0 section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-area text-center">
                    <h2 className="section-title">From Our Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-slider-wrapper theme-slick-slider">
                    {blogs.map((blog) => (
                      <div className="col" key={blog.id}>
                        <div className="single-slider-blog-post">
                          <div className="single-slider-blog-post__image">
                            <Link to={`/Blogs/${blog.slug}`}>
                              <img src={blog.image} className="img-fluid" alt={blog.title} />
                            </Link>
                          </div>
                          <div className="single-slider-blog-post__content">
                            <h3 className="post-title">
                              <Link to={`/Blogs/${blog.slug}`}>{blog.title}</Link>
                            </h3>
                            <p className="post-meta">
                              By <a href="#" className="post-author">admin</a> 
                              <span className="separator">|</span> 
                              <a href="#">{blog.createdAt}</a>
                            </p>
                            <p className="post-excerpt">
                              {blog.description.slice(0,150)}...
                            </p>
                            <Link to={`/Blogs/${blog.slug}`} className="blog-readmore-link">
                              Read more <i className="fa fa-caret-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
