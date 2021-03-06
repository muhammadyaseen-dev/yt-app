import React,{useState,useEffect} from 'react';
import * as BooksAPI from './BooksAPI'
import {render} from '@testing-library/react';

const Search=()=>
{
    const [term,setTerm]=useState('fred');
    const [results,setresults] = useState([]);
    useEffect(()=>
    {
        const solve = async()=>{
            const {data}=await BooksAPI.search(term);
        console.log('Hi there');
        console.log(data);
        }
    });
   return (
    <div className="app">
        
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href='/' >Close</a>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author"/>
           
        </div>
      </div>
      
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
 
</div>

   );
};

export default Search;