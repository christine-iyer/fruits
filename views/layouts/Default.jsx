const React = require('react')

class Default extends React.Component {
  render () {
    const { fruit, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/fruits'><button>Go to Fruits</button></a>
            <a href='/fruits/new'><button>Create a New Fruit</button></a>
            {title === 'Login to Fruits Account' || title === 'Sign Up For Fruits' ? '' : <a href="/user/logout"><button>Logout</button></a>}
            {fruit ? <a href={`/fruits/${fruit._id}/edit`}> {fruit.name} Edit Page </a> : ''}
            {fruit ? <a href={`/fruits/${fruit._id}`}>{fruit.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default