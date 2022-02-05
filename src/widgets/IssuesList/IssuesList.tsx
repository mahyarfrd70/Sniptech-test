import {CircularProgress, Typography} from '@mui/material';
import IssueCard from '../../components/IssueCard';
import Paginate from '../../components/Paginate';
import useIssuesList from './IssuesList.hook';
import {IssuesListProps} from './IssuesList.type';

const IssuesList = ({onPageChange}: IssuesListProps) => {
  const {isLoading, error, issues, pageCount, currentPage, changePage} = useIssuesList({onPageChange});
  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography>something went wrong please try again</Typography>;
  }
  return (
    <div>
      {issues.map((issue) => (
        <IssueCard key={issue.id} title={issue.title} body={issue.body} detailLink={issue.id.toString()} />
      ))}
      {pageCount && (
        <Paginate page={currentPage} pageCount={pageCount} showFirstButton showLastButton onChange={changePage} />
      )}
    </div>
  );
};

export default IssuesList;
