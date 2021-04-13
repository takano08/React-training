import React from "react";
import Article from "./Article";

class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isPublished:false
        }
    }
    togglePublished = () => {
        this.setState({
            isPublished:!this.togglePublished
            })
    };

    render() {
        return (
           <>
               <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={()=> this.togglePublished()}/>
           </>

        )
    }
}

export default Blog