const Blog = ({ blog }) => {
  const { title, name } = blog;
  return (
    <div>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Blog;
