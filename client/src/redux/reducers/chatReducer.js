import {
    CHAT_REQUEST,
    CHAT_SUCCESS,
    CHAT_FAILURE,
  } from "../types";


  const initialState = {
    messages: []
  };

        const chatReducer = (state = initialState, action) => {
            switch(action.type){
                 case CHAT_REQUEST:
                    return {
                  ...state,
                  };
                 case CHAT_SUCCESS:
                    return {
                    ...state,
                    messages: state.messages.concat(action.payload)
                    };
                 case CHAT_FAILURE:
                    return {
                    ...state,
                    messages: []
                    };

              default:
                  return state;             
    }
};

export default chatReducer;
