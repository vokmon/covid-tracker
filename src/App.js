import React, { Suspense } from 'react';
import { Loader } from 'semantic-ui-react';
import SummaryPanel from './containers/summary/SummaryPanel';
import SummaryChart from './containers/summary/SummaryChart';
import InformationPanel from './containers/summary/InformationPanel';
import CasesSummary from './containers/summary/CasesSummary';
import LanguageSelectorComponent from './containers/setup/LanguageSelector';

import { InitialGlobalState } from './context/GlobalStateProvider';
import useFetchAllData from './context/ContextFunctions';
import './config/i18n';
import './App.scss';

function App() {
  InitialGlobalState();
  const loading = useFetchAllData();
  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <LanguageSelectorComponent />
          <SummaryPanel />
          <SummaryChart />
          <CasesSummary />
          <InformationPanel />
        </Suspense>
      )}

    </div>
  );
}

export default App;
