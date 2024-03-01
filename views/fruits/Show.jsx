const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { symbol, purchasePrice, shares, _id } = this.props.fruit
    const capName = symbol[0].toUpperCase() + symbol.substring(1)
    return (
      <Default title={`${capName} Show Page`} fruit={this.props.fruit}>
        <p>{capName} is {purchasePrice} and {shares}</p>
      </Default>
    )
  }
}

module.exports = Show
