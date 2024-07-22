'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card';
import db from '../firebase';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore';

export default function Home() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );

        setPosts((posts) => [...posts, ...response.data.results]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const sendPost = async (e) => {
    e.preventDefault();
    // const myCollection = collection(db, 'posts');
    // const data = {
    //   name: 'Ivaylo Bachvarov',
    //   username: 'cf',
    //   likes: '12',
    //   position: 'CoFounder',
    //   activity: '3 days ago',
    //   text: post,
    // };
    const postsRef = collection(db, 'posts');
    await setDoc(doc(postsRef, 'cf'), {
      name: 'Ivaylo Bachvarov',
      username: 'cf',
      likes: '12',
      position: 'CoFounder',
      activity: '3 days ago',
      text: post,
    });
    setPost('');
  };
  return (
    <div className='container'>
      <nav className='nav'>
        <svg
          width='248'
          height='44'
          viewBox='0 0 248 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_3_1273)'>
            <path
              d='M176.985 11.8109V0.181885H154.089V7.63189H145.549V26.5319H167.536V36.3419L153.726 36.1599L153.908 32.5259H145.549V43.4259H176.985V19.4429H154.271V7.81388H168.263L168.081 11.8139L176.985 11.8109Z'
              fill='#F98211'
            />
            <path
              d='M22.714 17.989H8.54V0H0V43.61H8.54V26.529H22.714V43.61H32.163V0H22.714V17.989Z'
              fill='#918F8E'
            />
            <path
              d='M66.142 17.989H39.794V43.61H73.774V34.161H66.142V17.989ZM48.153 33.979V26.529H57.602V34.161L48.153 33.979Z'
              fill='#918F8E'
            />
            <path
              d='M79.407 17.989V43.61H105.936V34.161H87.947V26.529H105.936V17.989H79.407Z'
              fill='#918F8E'
            />
            <path
              d='M123.017 0H113.568V43.61H123.017V34.161H131.557V26.529H123.017V0Z'
              fill='#918F8E'
            />
            <path
              d='M140.097 17.989H131.557V26.511H140.097V17.989Z'
              fill='#918F8E'
            />
            <path
              d='M140.097 34.1609H131.557V43.6279H140.097V34.1609Z'
              fill='#918F8E'
            />
            <path
              d='M189.885 26.5291H182.435V43.6101H201.335L201.153 36.3421H189.885V26.5291Z'
              fill='#F98211'
            />
            <path
              d='M208.238 19.0791H189.885V26.5291H201.151V36.3411H208.238V19.0791Z'
              fill='#F98211'
            />
            <path
              d='M213.508 6.36011V43.6101H221.508V23.6221H228.958V15.0821H221.508V6.36011H213.508Z'
              fill='#F98211'
            />
            <path d='M228.953 0H221.503V6.396H228.953V0Z' fill='#F98211' />
            <path
              d='M239.855 22.895H247.305L247.123 15.082H239.491V7.44995H232.405V36.8869H239.855V43.61H247.123V36.16H239.855V22.895Z'
              fill='#F98211'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_1273'>
              <rect width='247.305' height='43.628' fill='white' />
            </clipPath>
          </defs>
        </svg>

        {/* <Image
          width={247}
          height={43}
          priority
          src='/public/images/logo.svg'
          alt='HackSoft Logo'
          className='logo'
        /> */}
        <div className='avatar'>
          <img src={posts && posts[0]?.picture?.medium} alt='profilePhoto' />
        </div>
      </nav>
      <div className='feed'>
        <aside className='sidebar'>
          <span className='edit'>
            {' '}
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3 10.9999V9.20703C3 9.07442 3.05268 8.94725 3.14645 8.85348L10.1464 1.85348C10.3417 1.65822 10.6583 1.65822 10.8536 1.85348L12.6464 3.64637C12.8417 3.84163 12.8417 4.15822 12.6464 4.35348L5.64645 11.3535C5.55268 11.4472 5.4255 11.4999 5.29289 11.4999H3.5C3.22386 11.4999 3 11.2761 3 10.9999ZM3 13.2499C2.58579 13.2499 2.25 13.5857 2.25 13.9999C2.25 14.4141 2.58579 14.7499 3 14.7499H13C13.4142 14.7499 13.75 14.4141 13.75 13.9999C13.75 13.5857 13.4142 13.2499 13 13.2499H3Z'
                fill='#B8B8B8'
              />
            </svg>
          </span>
          <div className='user'>
            <span className='photo' style={{ marginLeft: '2rem' }}>
              <img
                src={posts && posts[0]?.picture?.medium}
                alt='profilePhoto'
              />
            </span>
            <div>
              <h1 className='name'>Ivaylo Bachvarov</h1>
              <h2 className='position'>CoFounder, HackSoft</h2>
            </div>
          </div>
          <div className='social'>
            <span className='statistics'>
              <span>200</span>
              <p>likes</p>
            </span>
            <span className='statistics'>
              <span>2</span>
              <p>posts</p>
            </span>
          </div>
        </aside>
        <main className='content'>
          <div className='share'>
            <form>
              <input
                className='post'
                onChange={(e) => setPost(e.target.value)}
                value={post}
                type='text'
                placeholder='Share something to the community...'
                alt='Share something to the community...'
              />
              <hr className='line' />
              <button className='postButton' type='submit' onClick={sendPost}>
                Post
              </button>
            </form>
          </div>
          {posts?.map((post, index) => (
            <Card
              name={post.name.last + ' ' + post.name.first}
              position={post.id.name}
              post={post.text}
              activity={'3 days ago'}
              likes={post.dob.age}
              picture={post.picture.medium}
              key={index}
            />
          ))}
          {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
          <button className='loadBtn' onClick={loadMore}>
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </main>
      </div>
    </div>
  );
}
