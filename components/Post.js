import Link from 'next/link'
import { slugify } from '../utils'
import tagColors from "../public/tagColors";

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <div className="card mb-4">
      <div className="card-container tertiary-background">
        <div className="cardContent">

          <p className="card-date">{`${day} - ${month} - ${year}`}</p>
          
          <h2 className="card-title"><a href={`/blog/${post.slug}`} >{post.frontmatter.title}</a></h2>
          <p className="card-subtitle"> {post.frontmatter.summary}</p>
          <div className="tags-container">
            <div className="mb-0 tag-list"> 
              { post.frontmatter.tags.map((tag) => {
                const slug = slugify(tag);
                const tagColor = tagColors[tag.toLowerCase()] || "#808080";
                  return (
                    <div className="tag-item" style={{ backgroundColor: tagColor }} key={tag}>
                      <Link href={`/tag/${slug}`}>
                        <a>#{tag}</a>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${post.frontmatter.image})`}} className="card-img-container" onClick={() => {window.location.href=`/blog/${post.slug}`}}></div>
      </div>
    </div>
  )
}