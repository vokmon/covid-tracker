import { useState, useEffect } from 'react';
import { useGlobalStateContext } from './GlobalStateProvider';
import Service from '../services/Service';

const useFetchAllData = () => {
  const { actions } = useGlobalStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const timelineDataPromise = Service.getTimelineData();
      const todayDataPromise = Service.getTodayData();
      // const announcementPromise = Service.getAnnouncement();
      // const casesSummaryPromise = Service.getCasesSummary();
      const [timelineData,
        todayData,
        // announcement,
        casesSummary,
      ] = await Promise.all([
        timelineDataPromise,
        todayDataPromise,
        // announcementPromise,
        // casesSummaryPromise,
      ]);
      actions.setData(timelineData || [], todayData || {}, [], casesSummary || {});
      setLoading(false);
    };
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading;
};

export default useFetchAllData;
