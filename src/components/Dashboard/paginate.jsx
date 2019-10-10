import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = ({items, changePage, page}) => (
    <Pagination aria-label="Page navigation" size="sm" >
      <PaginationItem disabled id={1} onClick={changePage}>
          <PaginationLink first id={1} onClick={changePage}/>
      </PaginationItem>
       <PaginationItem disabled id="prev" onClick={changePage}>
          <PaginationLink previous  id="prev" onClick={changePage}/>
       </PaginationItem>
     
          { 
            [...Array(items)].map((e, i) => {
                return  <PaginationItem key={i} id={i + 1} onClick={changePage} className={page === i + 1 ? 'active' : ''}> 
                <PaginationLink id={i + 1}>
                  {i + 1}
                </PaginationLink>
               </PaginationItem>
              })
        }
        
        <PaginationItem disabled id="next" onClick={changePage}>
          <PaginationLink next  id="next" onClick={changePage}/>
        </PaginationItem>
        <PaginationItem disabled id={items} onClick={changePage}>
          <PaginationLink last id={items}/>
        </PaginationItem>
      </Pagination>
)

export default Paginate;