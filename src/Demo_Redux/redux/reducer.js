import { GIAM, TANG } from "./constant";

// B1.biến mặc định chứa giá trị global khi tạo reducer.js
let initialState = {
  value: 1,
};

//B2. tạo reducer
//cấu trúc mặc định
/**
     let tên Biến = (state = initialState, action) => {
     switch (action.type) {
         default:
         return state;
    }
    };
 * 
 */
export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      // console.log("up");
      state.value++;
      //trả về state mới => re-render
      return { ...state };
    }
    case GIAM: {
      state.value -= action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
