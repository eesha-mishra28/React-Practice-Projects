import Card from "./Card";
import { useContext } from "react";
import { PostListContext } from "../Stores/post-list-store";

const PostList = () => {
  const contextObj = useContext(PostListContext);

  console.log("contextObj =", contextObj);
  return (
    <>
      {contextObj.postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
