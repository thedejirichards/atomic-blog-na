import { faker } from "@faker-js/faker";
import { createContext, useContext, useState } from "react";
import type { PostContextTypes, PostsType } from "./types/types";

const PostContext = createContext<PostContextTypes | null>(null);
function PostProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }
  const [posts, setPosts] = useState<PostsType[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: PostsType) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPost: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

const usePost = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("context used outside provider");
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { PostProvider, usePost };
