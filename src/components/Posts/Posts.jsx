import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Posts = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const { data, loading, reFetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => reFetch());
  };

  return (
    <div>
      <h1>POSTS</h1>
      {loading && <h3>Loading...</h3>}
      {data.length > 0 &&
        data.map((post) => <h4 key={post.id}>{post.title}</h4>)}

      <form onSubmit={handleSubmit}>
        <input placeholder="TITLE" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input placeholder="BODY" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button>ADD POST</button>
      </form>
    </div>
  );
};

export default Posts;
