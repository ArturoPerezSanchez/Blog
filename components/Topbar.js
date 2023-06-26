import { useState } from "react";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";

export default function Topbar() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  function findSearch(value) {
    setSearch(value.target.value);
  }

  function toggleHeight() {
    setExpanded(!expanded);
  }

  return (
    <div className="col-lg-16 head-container">
      <h4 className="search-head secondary-background mb-0">Search</h4>
      <div className="card-body tertiary-background">
        <div className="search-container">
          <input
            onChange={findSearch}
            className="search-form light-background"
            type="text"
            placeholder="Enter search term..."
            aria-label="Enter search term..."
            aria-describedby="button-search"
          />
          <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}>
            <a className="btn btn-primary go-btn" id="button-search">Go!</a>
          </Link>
        </div>
      </div>
      <br />
      <h4 className="search-head secondary-background mb-0">Categories</h4>
      <div className="card-body tertiary-background pb-0">
        <div className="tag-container" style={{maxHeight: expanded ? '100rem' : '8.5rem'}}>
          <div className="mb-0 tag-list">
            {
              Search?.map(post => {
                return post.frontmatter.categories.map(item => {
                  const slug = slugify(item);
                  return (
                    <div className="tag-item" key={item}>
                      <a href={`/category/${slug}`}>{item}</a>
                    </div>
                  );
                });
              })
            }
          </div>
        </div>
        <button className={`expand-button`} onClick={toggleHeight}> {expanded ? "Collapse" : "Expand"}</button>
      </div>
    </div>
  );
}