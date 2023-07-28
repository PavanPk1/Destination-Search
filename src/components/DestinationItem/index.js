import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="placesContainer">
      <img src={imgUrl} className="picture" alt={name} />
      <p className="visitName">{name}</p>
    </li>
  )
}

export default DestinationItem
