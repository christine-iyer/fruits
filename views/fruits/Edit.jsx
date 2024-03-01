const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToEat } = this.props.fruit
    return (
      <Default title={`${name} Edit Page`} fruit={this.props.fruit}>
        <form method='POST' action={`/fruits/${_id}?_method=PUT`}>
          <Symbol></Symbol>: <input type='text' name='symbol' defaultValue={symbol} /><br />
          PurchasePrice: <input type='text' name='purchasePrice' defaultValue={purchasePrice} /><br />
          Shares: <input type='checkbox' name='shares' defaultChecked={shares} /> <br />
          <input type='submit' value='Edit Fruit' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
