const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { fruits } = this.props
    return (
      <Default title='Fruits Index Page'>
        <ul>
          {
                        fruits.map((fruit) => {
                          const { symbol, purchasePrice, shares, _id } = fruit
                          return (
                            <li key={_id}>
                              <a href={`/fruits/${_id}`}>
                                {symbol}
                              </a> is {purchasePrice}

                              <br />
                              {
                                        shares
                                         
                                    }
                              <br />
                              <form method='POST' action={`/fruits/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${purchasePrice} ${symbol}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
