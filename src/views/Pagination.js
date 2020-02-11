import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="...">
      <ul class="pagination  justify-content-end">
        <li class="page-item disabled">
          
          <a class="page-link" href="!#" tabindex="-1">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="!#">
            1
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="!#">
            2 <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="!#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="!#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

