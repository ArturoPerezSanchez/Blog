import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import Banner from '../components/Banner';
import Topbar from '../components/Topbar';
import { sortByDate, ImageUrl } from '../utils';

export default function Home({ initialPosts }) {
  const [displayedPosts, setDisplayedPosts] = useState(5);
  const [allPosts, setAllPosts] = useState(initialPosts);

  const handleLoadMore = () => {
    setDisplayedPosts(prevCount => prevCount + 3); // Increase the count to load more posts
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        displayedPosts < allPosts.length
      ) {
        handleLoadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedPosts, allPosts]);

  return (
    <div>
      <NextSeo
        title="Welcome to The Geek Gazette"
        description="Explore the fascinating world of computer science, software engineering, AI, math curiosities, and science in general. Gain insights into cutting-edge technologies, discover coding techniques, and unravel the mysteries of algorithms. Join me on a journey of exploration, learning, and personal experiences as we delve into the realms of technology and beyond."
        openGraph={{
          url: 'https://www.blog.arturops.com/',
          title: 'Welcome to The Geek Gazette',
          description: 'Explore the fascinating world of computer science, software engineering, AI, math curiosities, and science in general. Gain insights into cutting-edge technologies, discover coding techniques, and unravel the mysteries of algorithms. Join me on a journey of exploration, learning, and personal experiences as we delve into the realms of technology and beyond.',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'The Geek Gazette',
        }}
      />
      <Banner />
      <div className="container">
        <Topbar />
        <div className="row">
          <div className="col-lg-8">
            {allPosts.slice(0, displayedPosts).map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const tempPosts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      };
    } else {
      return null;
    }
  });

  //  remove null in tempPosts
  const posts = tempPosts.filter(post => {
    return post && post;
  });

  const jsonString = JSON.stringify(posts);
  fs.writeFileSync('./search.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });

  return {
    props: {
      initialPosts: posts.sort(sortByDate),
    },
  };
}
