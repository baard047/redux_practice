import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const spam = ['follow', 'free', 'buy'];

export function titleFilterMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if(action.type === CREATE_POST) {
                const found = spam.filter(w => action.payload.title.includes(w));
                if( found.length ) {
                    return dispatch(showAlert('You are spamer'))
                }
            }
            return next(action);
        }
    }
}