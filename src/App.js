import './App.css';
import {useState, useEffect } from 'react'
function App() {

  const [type, setType] = useState('posts');
  const [posts, setPosts] = useState([]) ; 
  useEffect(() =>{
    const fetchData = async ()=>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);

      const json = await response.json();
      // console.log(json);
      setPosts(json)

    };
    fetchData();
  },[type])
  return (
    <div className="App">
      {/* {console.log(posts)} */}
      <button onClick={()=>setType('posts')}>posts</button>
      {/* <button onClick={() =>setType('comments')}>comments</button> */}
      <button onClick={() =>setType('albums')}>albums</button>
      <button onClick={() =>setType('photos')}>photos</button>
      {/* <button onClick={() =>setType('users')}>users</button> */}
  
      <ul>
        {posts.map((post)=> (
          <li key={post.id}> {post.title}
            {/* {console.log(post)} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
