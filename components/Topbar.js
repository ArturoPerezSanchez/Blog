import { useState} from "react";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";

export default function Topbar() {
  const [search, setSearch]= useState()
  function findSerach(value) {
   
    setSearch(value.target.value)
  }
 
  return (
    <div className="col-lg-16 bg-secondary">

      <div className="card mb-16">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="input-group">
            <input onChange={findSerach} className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
            <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}> 
              <a className="btn btn-primary" id="button-search">Go!</a>
            </Link>
          </div>
        </div>
      </div>
      <br/>
      <div className="card mb-16">
        <div className="card-header">Categories</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              <div className="mb-0 tag-list">
               
                {
                  Search?.map(
                    post => {
                      return post.frontmatter.categories.map(
                      item => {
                        const slug = slugify(item)
                        console.log(slug)
                        return <div className="tag-item" key={item}>
                          <a href={`/category/${slug}`}> {item} </a>
                          </div>
                      }
                    )
                  
                }
                  )
                }
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}