//-->   -----------------------------Function Component-------------------------------<---
import "./search-box.styles.css";

const SearchBox = (
  { onSearchChange, className, placeholder } //implicit return 
) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  ></input>
);
export default SearchBox;

//-->   -----------------------------Class Component-------------------------------<---

// import { Component } from "react";
// import './search-box.styles.css';

// class SearchBox extends Component {
//   render() {
//     const {onSearchChange, className, placeholder} = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onSearchChange}
//       ></input>
//     );
//   }
// }
// export default SearchBox;
