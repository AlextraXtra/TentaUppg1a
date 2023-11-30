import { Component  } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

class SecondComponent extends Component {
    constructor(props){
        super(props);

        this.points=this.props.coursepoints;
        this.name = this.props.coursename;
        this.code = this.props.coursecode;
    }

  render() {
let oneObject= {p:this.points, c: this.code, n:this.name};
let url = 'https://www.kau.se/utbildning/program-och-kurser/kurser/ISGB22';
oneObject.info=[url,this.code,this.name,this.points];
    return (<>   
    <ComponentOne {...oneObject}/>
    <ComponentTwo {...oneObject} u={url}/>
    <ComponentThree info={oneObject.info}/>
        </>
     );
  }
}

export default SecondComponent;