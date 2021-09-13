import React, { Suspense } from 'react';
import { Loader } from 'semantic-ui-react';
import SummaryPanel from './containers/summary/SummaryPanel';
import SummaryTotalChart from './containers/summary/SummaryTotalChart';
// import InformationPanel from './containers/summary/InformationPanel';
// import CasesSummary from './containers/summary/CasesSummary';
import LanguageSelectorComponent from './containers/setup/LanguageSelector';
// import AppFooter from './components/Footer/AppFooter';

import { InitialGlobalState } from './context/GlobalStateProvider';
import useFetchAllData from './context/ContextFunctions';
import './config/i18n';
import './App.scss';
import SummaryDailyChart from './containers/summary/SummaryDailyChart';

function App() {
  InitialGlobalState();
  const loading = useFetchAllData();
  return (
    <div className='App'>
      {loading ? (
        <div className='ui active transition visible dimmer'>
          <div className='content'>
            <Loader>Loading</Loader>
          </div>
        </div>
      ) : (
        <Suspense fallback={null}>
          <div className='container'>
            <LanguageSelectorComponent />
            <SummaryPanel />
            <SummaryTotalChart />
            <SummaryDailyChart />
            {/* <CasesSummary /> */}
            {/* <InformationPanel /> */}
          </div>
          {/* <AppFooter /> */}
        </Suspense>
      )}
    </div>
  );
}

export default App;
