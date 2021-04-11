import React from "react";
import Article from "./Article";

class Blog extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <>
               <Article title={"Reactの使い方"} order={3}/>
               <Article title={"JSXの使い方"} order={4}/>
               <Article title={"環境構築してもみよう"} order={5}/>
           </>

        )
    }
}

export default Blog