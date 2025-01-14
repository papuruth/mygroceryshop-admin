import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-native-session';
import userReducer from '../user/userReducer';
import loaderReducer from '../loaderService/LoaderReducer';
import productReducer from '../products/ProductsReducer';
import notificationReducer from '../notifications/NotificationReducer';

export default combineReducers({
  session: sessionReducer,
  userReducer,
  loaderReducer,
  productReducer,
  notificationReducer,
});
