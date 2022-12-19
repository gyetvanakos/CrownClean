import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=''>
      <ul className='pagination flex justify-center items-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link '>
              <h2 className='pl-2'>{number}</h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;