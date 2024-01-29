import { useEffect } from "react";

function PostPage({ posts }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centered-content blogwp"><br/><br/>
      <div >
        {posts.map((post) => (
          <li style={{ listStyleType: 'disc' }} key={post.id}>
            {/* <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
            <a href={`https://www.tripzygo.in/blogswp/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </li>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // let page = 1;
    // let posts = [];

    // while (true) {
    //   const response = await fetch(`https://blogs.tripzygo.in/wp-json/wp/v2/posts?per_page=100&page=${page}`);
    //   const data = await response.json();

    //   if (data.status === 400) {
    //     break; // No more posts to fetch, exit the loop
    //   }

    //   posts = posts.concat(data); // Append the new posts to the existing array
    //   page++;
    // }
    const response = await fetch(`https://blogs.tripzygo.in/wp-json/wp/v2/posts?per_page=100`);
    const data = await response.json();
    let posts = data || []; // Use the first post or an empty object if not found
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        posts: null,
      },
    };
  }
}

export default PostPage;
