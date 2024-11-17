// fetch function

const JSON_API = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts(): Promise<Response> {
  // call api
  const response = await fetch(JSON_API); // Promise { <pending> }
  // console.log(response);

  // return response;
  return response;
}

// Resolve promise to posts
getPosts()
.then(res => res.json())
.then(posts => console.log(posts));


// 2nd way
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts2(): Promise<Post[]> {
  // call api
  const response = await fetch(JSON_API);
  const posts = await response.json()
  return posts;
}