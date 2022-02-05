import {useMemo} from 'react';
import {useParams} from 'react-router';
import {useAppSelector} from '../../redux/store';

const useIssueDetail = () => {
  // there is issueId in params object that points to the represented issue in issues list
  const params = useParams();
  const issuesList = useAppSelector((state) => state.Issues.issues);

  const selectedIssue = useMemo(() => {
    return issuesList.find((item) => item.id.toString() === params.issueId);
  }, [params, issuesList]);

  return {selectedIssue};
};

export default useIssueDetail;
