const SET_DATA = 'SET_DATA';
const SET_TIMELINE_DATA = 'SET_TIMELINE_DATA';
const SET_TODAY_SUMMARY_DATA = 'SET_TODAY_SUMMARY_DATA';
const SET_ANNOUNCEMENT_DATA = 'SET_ANNOUNCEMENT_DATA';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        timelineData: [...action.payload.timelineData],
        todaySummary: { ...action.payload.todaySummary },
        announcements: [...action.payload.announcements],
        casesSummary: { ...action.payload.casesSummary },
      };
    case SET_TIMELINE_DATA:
      return {
        ...state,
        timelineData: [...action.payload],
      };
    case SET_TODAY_SUMMARY_DATA:
      return {
        ...state,
        todaySummary: { ...action.payload },
      };
    case SET_ANNOUNCEMENT_DATA:
      return {
        ...state,
        announcements: [...action.payload],
      };
    default:
      return state;
  }
};

export const createActions = (dispatch) => ({
  setData: (timelineData, todaySummaryData, announcementData, casesSummary) => {
    dispatch({
      type: SET_DATA,
      payload: {
        timelineData,
        todaySummary: todaySummaryData,
        announcements: announcementData,
        casesSummary,
      },
    });
  },

  setTimelineData: (timelineData) => {
    dispatch({
      type: SET_TIMELINE_DATA,
      payload: timelineData,
    });
  },

  setTodaySummaryData: (todaySummaryData) => {
    dispatch({
      type: SET_TODAY_SUMMARY_DATA,
      payload: todaySummaryData,
    });
  },

  setAnnouncementData: (announcementData) => {
    dispatch({
      type: SET_ANNOUNCEMENT_DATA,
      payload: announcementData,
    });
  },
});
