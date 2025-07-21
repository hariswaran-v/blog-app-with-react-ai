import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.excerpt}</p>
      <Link to={`/blogs/${post.id}`} className="text-cyan-600 hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default Card;
