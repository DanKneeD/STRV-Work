function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Buttons extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "changeNum",






    val => {
      this.setState(prevState => ({
        value: prevState.value + val }));


    });this.state = { value: 0 };}

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.changeNum.bind(this, 1) }, "+"), /*#__PURE__*/


      React.createElement("button", { onClick: this.changeNum.bind(this, -1) }, "-"), /*#__PURE__*/



      React.createElement("div", null,
      this.state.value)));





  }}




ReactDOM.render( /*#__PURE__*/
React.createElement(Buttons, null), document.getElementById('root'));