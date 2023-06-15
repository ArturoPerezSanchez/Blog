import { useState } from "react";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredPosts = postMetadata.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const postPreviews = filteredPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
    </div>
  );
};

export default HomePage;
