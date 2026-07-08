import Card from "./Card";
import { useContext, useEffect } from "react";
import { PostListContext } from "../Stores/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

let hasLoadedInitialPosts = false;

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);

  useEffect(() => {
    if (hasLoadedInitialPosts || postList.length > 0) {
      return;
    }

    hasLoadedInitialPosts = true;
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, [addInitialPosts, postList.length]);

  console.log("postList =", postList);
  return (
    <>
      {postList.length === 0 ? <WelcomeMessage /> : null}
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
