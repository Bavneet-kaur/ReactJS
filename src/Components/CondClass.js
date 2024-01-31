import React, { Component } from "react";

class CondClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    /**
     **first aproach ---> if-else statements
     */
    //     if(this.state.isLoggedIn){
    //         return <h3>Welcome Bavneet Kaur</h3>
    //     }else {
    //         return <h3>Welcome guest</h3>
    //     }
    //   }
    /**
     **second aproach ---> element varibale
     */
//     let message;
//     if (this.state.isLoggedIn) {
//       message = <h3>Welcome Bavneet</h3>;
//     } else {
//       message = <h3>Welcome guest</h3>;
//     }
//     return <div>{message}</div>;
//   }
  /**
   **third aproach ---> ternary operator 
   */
//   return(
//     this.state.isLoggedIn ? (
//         <h3>Welcome Bavneet</h3>
//     ) : (
//         <h3>Welcome Guest</h3>
//     )
//   )
  /**
   **fourth aproach ---> short-circuit operators (&&(AND), ||(OR))
   */
  return(
    this.state.isLoggedIn && <h3>Welcome Bavneet</h3>
  )
}
}

export default CondClass;
