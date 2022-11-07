const React = require('react')
const Default = require('./layouts/Default')

class Home extends React.Component {
  render () {
    return (
      <Default title='Home Page'>
        <a href='/user/signup'><button>SignUp</button></a>
        <a href='/user/login'><button>Login</button></a>
      </Default>
    )
  }
}

module.exports = Home