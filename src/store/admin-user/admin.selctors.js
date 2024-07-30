import { createSelector } from "reselect";
const adminSlectReducer=(state)=>state.admin_data
  
export const currentUserSelect=createSelector(
    [adminSlectReducer],
    (slice)=>slice.current_user
  
) 