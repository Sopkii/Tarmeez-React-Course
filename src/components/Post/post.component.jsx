const Post = () => {
  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "15px",
        padding: "10px",
        width: "400px",
        height: "75px",
      }}
    >
      <div
        style={{ fontWeight: "bold", fontSize: "20px" }}
        className="post-title"
      >
        This is the post title
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "gray",
          margin: "10px 0",
        }}
        className="separator"
      ></div>
      <div className="post-body">This is the post body</div>
    </div>
  );
};

export default Post;
