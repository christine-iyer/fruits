const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Fruit</h1>
            <nav>
                <a href="/fruits"> Go Back To Fruits Home Page</a>
            </nav>
            <form method="POST" action="/fruits">
                Name: <input type="text" name="name" placeholder='Name of Fruit Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Fruit Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Fruit"></input>
            </form>
            </>
        )
    }
}

module.exports = New