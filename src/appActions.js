const appActions = {
  ADD(state) {
    const newDate = new Date().getTime();
    const dates = [newDate, ...state.dates];
    return { dates };
  },
  CLEAR() {
    return { dates: [] };
  },
};

module.exports = appActions;
