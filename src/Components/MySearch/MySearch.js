import React, { Component } from 'react';
import './MySearch.css';
class MySearch extends Component {
  render() {
        return (
              <div className="search">
                    <form  action="index.html" >
                      <input type="text" name="search" placeholder="Search"/>
                      <button type="submit">
                          <i className="fas fa-search search-icon"/>
                      </button>
                    </form>
              </div>
            )
        }
}
export default MySearch;
