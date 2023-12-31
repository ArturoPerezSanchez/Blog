import Link from 'next/link'
import { ImageUrl } from "../utils";

export default function ItemPost({ post: {post } }) {

  const date = new Date(post.frontmatter?.date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="card mb-4">
      <a href={`/blog/${post.slug}`} > <img className="card-img-top" src={ ImageUrl(post.images[0])} alt={post.title} /></a>
      <div className="card-body">
        <div className="card-date">{`${day} - ${month} - ${year}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className='btn'>Read More</a>
        </Link>
      </div>
    </div>

    
  )
}