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
  const { posts, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useTodos({
      pageSize,
    });

    console.log(posts)

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "space-between",
          // height: "90vh",
        }
      }
    >
      <ul className="list-group">
        {posts.pages.map((page) =>
          page.map((p) => {
            return (
              <li key={p.id} className="list-group-item">
                {p.title}
              </li>
            );
          })
        )}
      </ul>
      <button
        disabled={isFetchingNextPage}
        className="btn-primary btn mt-3"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default PostList;

// <div
// style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// }}
// >
/* <button 
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
</div> */
