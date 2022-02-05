import {Typography} from '@mui/material';
import {FC} from 'react';
import useIssueDetail from './IssueDetail.hook';

const IssueDetail: FC = () => {
  const {selectedIssue} = useIssueDetail();
  if (!selectedIssue) {
    return <div>Issue not found</div>;
  }
  return (
    <div>
      <Typography>Title: {selectedIssue.title}</Typography>
      <Typography>Body: {selectedIssue.body}</Typography>
      <Typography>Repository URL: {selectedIssue.repository_url}</Typography>
      <Typography>Comments URL: {selectedIssue.comments_url}</Typography>
    </div>
  );
};

export default IssueDetail;
