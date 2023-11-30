import { Component  } from "react";


class ComponentThree extends Component {

myLength(){
    let r = 0;
    for(let i = 0; i < this.props.info.length; i++){
        r += this.props.info[i].length;
    }
    return r;
}

  render() {

    return (
        <footer>
            <p>{this.props.info.length}</p>
            <div>{this.myLength()}</div>
        </footer>
     );
  }
}

export default ComponentThree;