import { useState } from "react";
import useTodos from "../hooks/useTodos";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const PostList = () => {
  const pageSize = 10;
  const pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [page, setPage] = useState(1);
  const { posts, error, isLoading } = useTodos({ page, pageSize });

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'90vh'}}>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button 
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary mt-3"
        >
          Previous
        </button>

        {pageArray.map((p) => {
          return (
            <button
              key={p}
              onClick={(e) => {
                setPage(Number(e.target.innerText));
              }}
              style={{
                textAlign: "center",
                display: "flex",
                background: page === p ? "black" : "",
                color: page === p ? "white" : "",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              {p}
            </button>
          );
        })}

        <button
          disabled={page === pageSize}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary mt-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
