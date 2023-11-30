import { Component  } from "react";


class ComponentOne extends Component {

  render() {

    return (
    <>
    <header>
        <table>
            <thead>
                <tr>
                    <th>Credits</th>
                    <th>Code</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>{this.props.p}</tr>
                <tr>{this.props.c}</tr>
                <tr>{this.props.n}</tr>
                </tbody>
        </table>
    </header>
    </>
     );
  }
}

export default ComponentOne;