import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Post - {id}</h1>
      <p>Form to edit blog post (to be implemented)</p>
    </div>
  );
};

export default EditPost;
