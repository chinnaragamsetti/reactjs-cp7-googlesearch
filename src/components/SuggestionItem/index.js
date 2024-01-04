// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestiondetails, selectlist} = props

  const {suggestion} = suggestiondetails

  const onSelect = () => {
    selectlist(suggestion)
  }

  return (
    <li className="listitem">
      <p className="heading">{suggestion}</p>
      <button type="button" className="button" onClick={onSelect}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
