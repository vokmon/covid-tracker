import axios from 'axios';

export default {
  getTodayData: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json';
    const response = await axios.get(url);
    return response.data;
  },

  getTimelineData: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getTimeline.json';
    const response = await axios.get(url);
    return response.data;
  },

  getAnnouncement: async () => {
    const url = 'https://covid19.th-stat.com/api/open/area';
    const response = await axios.get(url);
    return response.data;
  },

  getCasesSummary: async () => {
    const url = 'https://covid19.th-stat.com/json/covid19v2/getSumCases.json';
    const response = await axios.get(url);
    return response.data;
  },
};
