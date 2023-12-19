export async function getBlogs() {
    const res = await fetch('http://localhost:5000/api/v1/blogs',{ next: { revalidate: 10000 } })
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   