// Write your code
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeinputsearch = event => {
    this.setState({searchInput: event.target.value})
  }

  selectlist = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const aftersearchedlist = suggestionsList.filter(eachlist =>
      eachlist.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="maincontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="googlelogo"
          alt="google logo"
        />
        <div className="subcontainer">
          <div className="searchinputbarcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchicon"
              alt="search icon"
            />
            <div className="inputcontainer">
              <input
                type="search"
                onChange={this.onChangeinputsearch}
                value={searchInput}
              />
            </div>
          </div>
          <ul className="listcontainer">
            {aftersearchedlist.map(eachsuggestion => (
              <SuggestionItem
                key={eachsuggestion.id}
                suggestiondetails={eachsuggestion}
                selectlist={this.selectlist}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
