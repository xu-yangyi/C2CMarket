import React from 'react'
import {Wrapper,BigPage,NewestText,Tags,TimeOrder} from "./style";


class Home extends React.Component{
    render() {
        return (
            <Wrapper>
                <BigPage>
                    <NewestText>this is the text area</NewestText>
                    <TimeOrder>this is the time area</TimeOrder>
                    <Tags>this is the tags area</Tags>
                </BigPage>
            </Wrapper>
        )
    }
}
export default Home;