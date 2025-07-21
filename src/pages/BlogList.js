import Card from "../components/Card";

const dummyPosts = [
  { id: 1, title: "First Blog", excerpt: "This is the first blog post." },
  { id: 2, title: "Second Blog", excerpt: "This is the second blog post." },
];

const BlogList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {dummyPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
