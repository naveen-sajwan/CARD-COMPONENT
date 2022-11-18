import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';

import {books} from './books'; 
import Book from './Book';

function Booklist(){
  return(
    <>
    <main>
      <header>
        <div className="heading">
        <h1>REACT PROJECTS</h1>
        <p>Projects are the most practical way to learn any language, and <i>React </i> is no exception. Solidify your knowledge of React by creating these cool projects.</p>
        <button type='button' className='btn pulsate-bck'>MY PROJECTS</button>
        </div>
        <div className='images'>
        <img src="https://www.theengineeringprojects.com/res/img/2Home/hero.png" alt="headerImage" />
        </div>
      </header>
    </main>
    
    <div className='SECTION1'>
      <h1>BASICS PROJECTS</h1>
      <div className='titleunderline'></div>
      <div className="grid">
      {books.map((book)=>{
        return(
          <Book key={book.id} {...book}/>
          );
      })}
      </div>
    </div>

    <div className='SECTION1'>
      <h1>BASICS PROJECTS</h1>
      <div className='titleunderline'></div>
      <div className="grid">
      {books.map((book)=>{
        return(
          <Book key={book.id} {...book}/>
          );
      })}
      </div>
    </div>

    <div className='SECTION1'>
      <h1>BASICS PROJECTS</h1>
      <div className='titleunderline'></div>
      <div className="grid">
      {books.map((book)=>{
        return(
          <Book key={book.id} {...book}/>
          );
      })}
      </div>
    </div>
    </>
    );
}

ReactDom.render(<Booklist/>,document.getElementById('root'));
