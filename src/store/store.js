import { configureStore } from '@reduxjs/toolkit'
import  ingredientSlice from '../features/ingredient/ingredientSlice'
import singleIngredientSlice from '../features/ingredient/singleIngredientSlice'
import singleRecipySlice from '../features/singleRecipy/singleRecipy'
import categorySlice from '../features/category/categorySlice'
import singleCategorySlice from '../features/singleCategory/singleCategorySlice'
// export default configureStore({

//   reducer: {
//     ingredients: ingredientReducer,
    
//   },
 
// })
export const store =configureStore(
  {reducer:{
    ingredientSlice,
    singleIngredientSlice,
    singleRecipySlice,
    categorySlice,
    singleCategorySlice,



  }}
)