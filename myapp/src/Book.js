import React from 'react';

const Book = ({img,title,Author}) => {
  //const { img,title,Author,} = props;
  //console.log(props);
  
  //attribute eventhandler.....
  //onClick onMouseOver
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('FUCK OFF');
  };

  const complexExample =(Author) =>{
    console.log(Author);
  };
  return(
    <>
      <article className="book" onMouseOver={()=>{
        console.log(title);
      }}>
        <img src={img} alt="image" width="200px" />
      <h4 onClick={()=> console.log(title)}>{title}</h4>
      <p>{Author}</p>
      <button  onClick={clickHandler}>CLICK ME</button>
      <button type="button" onClick={() => complexExample(Author)}>click</button>
      </article>
    </>
    );
};


export default Book;