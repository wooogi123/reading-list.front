import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PostList from '../components/posts/PostList';

function PostListPage() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}

export default PostListPage;
