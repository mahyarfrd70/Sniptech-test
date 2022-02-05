import {PaginateProps} from '.';
import {Pagination} from '@mui/material';

const Paginate = ({pageCount, ...rest}: PaginateProps) => {
  return <Pagination count={pageCount} {...rest} />;
};

export default Paginate;
