import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchDestination = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestiny =>
      eachDestiny.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="searchBar"
            value={searchInput}
            onChange={this.searchDestination}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="searchIcon"
            alt="search icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(destinationItem => (
            <DestinationItem
              destinationItem={destinationItem}
              key={destinationItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
