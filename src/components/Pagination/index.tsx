import React, { useCallback, useEffect, useState } from 'react';
import { useHero } from '../../hook/heros';
import { Container } from './styles';

interface PageLimitProp {
  pageLimit?: number;
  pageNeighbours?: number;
}
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const ranger = (from: number, to: number, step = 1): (number | string)[] => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const fetchPageNumbers = (
  totalPages: number,
  currentPage: number,
  pageNeighbours: number
): (number | string)[] => {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    let pages = ranger(startPage, endPage);
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);
    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = ranger(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }

      case !hasLeftSpill && hasRightSpill: {
        const extraPages = ranger(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }

      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }

    return [1, ...pages, totalPages];
  }

  return ranger(1, totalPages);
};

const Pagination: React.FC<PageLimitProp> = ({
  pageLimit = 10,
  pageNeighbours = 0,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<(string | number)[]>([]);

  const { totalPages, handlePagePagination } = useHero();

  const maximumNumberOfPages = Math.ceil(totalPages / pageLimit);

  useEffect(() => {
    const pagesList = fetchPageNumbers(
      maximumNumberOfPages,
      currentPage,
      pageNeighbours
    );
    const offset = (currentPage - 1) * 10;
    setPages(pagesList);
    handlePagePagination(offset);
  }, [maximumNumberOfPages, currentPage, pageNeighbours, handlePagePagination]);

  const goToPage = useCallback(
    (page: number): void => {
      const current = Math.max(0, Math.min(page, totalPages));
      const paginationData = fetchPageNumbers(
        maximumNumberOfPages,
        currentPage,
        pageNeighbours
      );
      setPages(paginationData);
      setCurrentPage(current);
    },
    [pageNeighbours, totalPages, currentPage, maximumNumberOfPages]
  );

  const handleClickCurrentPage = useCallback(
    (page: number) => {
      goToPage(page);
    },
    [goToPage]
  );

  const handleMoveRight = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const handleMoveLeft = useCallback((): void => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return (
    <Container>
      <ul>
        {pages.map((page) => {
          if (page === LEFT_PAGE)
            return (
              <li key={page}>
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={page}>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={handleMoveRight}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            );

          return (
            <li
              key={page}
              className={`page-item${currentPage === page ? ' active' : ''}`}
            >
              <button
                type="button"
                onClick={() => handleClickCurrentPage(+page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Pagination;
