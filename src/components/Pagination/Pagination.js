import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import "./Pagination.scss";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ posts, postPerPage, inicialState }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(`${postPerPage}`);
  const pageNumbers = [];
  const wrapperRef = useRef(null);


  for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastPost = inicialState
    ? 1 * postsPerPage
    : currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={wrapperRef}>
      <div className='CardsContent'>{currentPosts}</div>
      {pageNumbers.length >= 2 ? (
        <nav>
          <ul className='Pagination'>
            <li className='Pagination__item'>
              {currentPage !== 1 ? (
                <Link
                  onClick={() => paginate(currentPage - 1)}
                  to='#Articles'
                >
                  <FaChevronLeft />
                </Link>
              ) : (
                <FaChevronLeft />
              )}
            </li>
            {pageNumbers.map((number) => (
              <>
                {number === currentPage ? (
                  <li key={number} className='Pagination__item active-page'>
                    <Link
                      onClick={() => paginate(number)}
                      to='#Articles'
                      className={`Pagination__link`}
                    >
                      {number}
                    </Link>
                  </li>
                ) : (
                  <li key={number} className='Pagination__item'>
                    <Link
                      onClick={() => paginate(number)}
                      to='#Articles'
                      className={`Pagination__link `}
                    >
                      {number}
                    </Link>
                  </li>
                )}
              </>
            ))}
            <li className='Pagination__item'>
              {currentPage !== pageNumbers[pageNumbers.length - 1] ? (
                <Link
                  onClick={() => paginate(currentPage + 1)}
                  to='#Articles'
                >
                  <FaChevronRight />
                </Link>
              ) : (
                <FaChevronRight />
              )}
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Pagination;
