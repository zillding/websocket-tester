import { createSelector } from 'reselect';

/**
 * Direct selector to the socketIopage state domain
 */
const selectSocketIopageDomain = () => state => state.get('socketio');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SocketIopage
 */

const selectSocketIopage = () => createSelector(
  selectSocketIopageDomain(),
  (substate) => substate.toJS()
);

export default selectSocketIopage;
export {
  selectSocketIopageDomain,
};
