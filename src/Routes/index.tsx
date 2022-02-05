import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IssueDetail from '../pages/IssueDetail';
import Issues from '../pages/Issues';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/:issueId" element={<IssueDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
