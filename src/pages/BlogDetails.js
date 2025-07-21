import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Details - {id}</h1>
      <p>This will show full details of the blog post.</p>
    </div>
  );
};

export default BlogDetails;
