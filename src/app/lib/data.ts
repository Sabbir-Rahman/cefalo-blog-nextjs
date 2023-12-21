export async function getBlogs() {
  const res = await fetch('http://localhost:5000/api/v1/blogs', {
    next: { revalidate: 3000 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getBlogsByGraphQl() {
  const res = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
    query getBlogs {
      blogs{
        data{
          attributes{
            title
            body
          }
        }
      }
    }
  `,
    }),
    next: { revalidate: 3000 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3000 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
