import React from 'react'
import { Wrapper, BigPage } from "./style";
import {connect} from "react-redux";
import {
    logoutUser,
    school_login,
    school_register,
    getItemsList,
    changeOrder,
} from "../../../../redux/schoolC2c.redux/schoolUser.redux";
import SchoolItemList from "../schoolItemList";
import UserBoard from '../userBoard'

@connect(
    state=>state.SchoolUser,
    {school_login,school_register,logoutUser,getItemsList,changeOrder}
)
class SchoolC2C extends React.Component{
    componentDidMount() {
        this.props.getItemsList('all')
    }

    render() {
        return (
            <Wrapper>
                <BigPage>
                    <SchoolItemList/>
                    <UserBoard/>
                </BigPage>
            </Wrapper>
        )
    }
}
export default SchoolC2C;





