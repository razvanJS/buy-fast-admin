import { createSelector } from "reselect";

const categoriesDirectoryReducer=(state)=>state.categories_directory


export const categoriesDirectoryDataSelect=createSelector(
    [categoriesDirectoryReducer],
    (slice)=>slice.categories_directory_data

)
export const categoriesDirectoryLength=createSelector(
    [categoriesDirectoryReducer],
    (slice)=>slice.categoriesLenght
)