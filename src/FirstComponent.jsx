import { Component  } from "react";
import SecondComponent from './components/SecondComponent';


class FirstComponent extends Component {

  render() {

    return (<SecondComponent
        coursecode="ISGB22"
        coursename="Utveckling av webbapplikationer"
        coursepoints="7.5hp"
    />
     );
  }
}

export default FirstComponent;