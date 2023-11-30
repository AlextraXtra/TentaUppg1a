import { Component  } from "react";



class ComponentTwo extends Component {

  render() {
let p = this.props.p;
let n = this.props.n;
let c = this.props.c;
let u = this.props.u;
    return (
    <main>
        <ul>
            <li>{p}</li>
            <li>{n}</li>
            <li>{c}</li>
            <p data-url={u}>{u}</p>
        </ul>
    </main>
     );
  }
}

export default ComponentTwo;