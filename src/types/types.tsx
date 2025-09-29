export type PostsType = {
  title: string;
  body: string;
};

export type HeaderType = {
  posts: PostsType[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchPostsType = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type MainType = {
  posts: PostsType[];
  onAddPost: (post: PostsType) => void;
};

export type FormAddPostType = {
  onAddPost: (post: PostsType) => void;
};

export type PostContextTypes = {
  posts: PostsType[];
  onAddPost: (post: PostsType) => void;
  onClearPost: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
