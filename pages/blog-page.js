import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

// getStaticProps() の返り値を props(posts) で受け取り
const Blog = ({ posts }) => {
  return <Layout title="Blog">
    <ul className="m-10">
      {posts && posts.map( (post) =>
        <Post key={post.id} post={post} />
        )
      }
    </ul>
  </Layout>
};

export default Blog;

// 必ずビルドの際事前にサーバーサイド側で実行される
export async function getStaticProps() {
  const posts = await getAllPostsData();
  // return した値を Blog の props(posts)で受け取っている
  return {
    props: { posts } ,
  };
}
