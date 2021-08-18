import axios from 'axios';
// import TodayData from './TodayData.json';
// import SumcaseMockData from './SumCase.json';
// import TimelineData from './TimelineData.json';

export default {
  // eslint-disable-next-line arrow-body-style
  getTodayData: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json';
    const response = await axios.get(url);
    return response.data;
    // return TodayData;
  },

  // eslint-disable-next-line arrow-body-style
  getTimelineData: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getTimeline.json';
    const response = await axios.get(url);
    return response.data;
    // return TimelineData;
  },

  getAnnouncement: async () => {
    const url = 'https://covid19.th-stat.com/api/open/area';
    const response = await axios.get(url);
    return response.data;
  },

  // eslint-disable-next-line arrow-body-style
  getCasesSummary: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getSumCases.json';
    const response = await axios.get(url);
    return response.data;
    // return SumcaseMockData;
  },
};
