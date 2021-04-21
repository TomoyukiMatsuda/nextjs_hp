// lib: ライブラリー APIを叩くところ？
import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// データ一覧を取得
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      // getStaticPaths では フィールドの名前に必ず params を宣言する
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
