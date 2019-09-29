import { combineReducers } from 'redux'
import { User } from "./redux/user.redux";
import { SchoolUser } from "./redux/schoolC2c.redux/schoolUser.redux";
import { UserChat } from "./redux/schoolC2c.redux/userChat.redux";

export default combineReducers({User,SchoolUser,UserChat})