import {FC} from 'react';
import IssuesList from '../../widgets/IssuesList';
import SearchForm from '../../widgets/Search/Search';
import useIssues from './Issues.hook';

const Issues: FC = () => {
  const {fetchNewIssues} = useIssues();
  return (
    <div>
      <SearchForm onSubmitForm={fetchNewIssues} />
      <IssuesList onPageChange={fetchNewIssues} />
    </div>
  );
};

export default Issues;
