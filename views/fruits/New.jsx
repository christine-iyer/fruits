const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Holding'>
        <form method='POST' action='/fruits'>
          Ticker: <input type='text' name='symbol' placeholder='' /><br />
          PurchasePrice: <input type='numeric' name='purchasePrice' placeholder='' /><br />
          SharesPurchased: <input type='numeric' name='shares' placeholder='' /><br />
          <input type='submit' value='Submit Fruit' />
        </form>
      </Default>
    )
  }
}

module.exports = New
