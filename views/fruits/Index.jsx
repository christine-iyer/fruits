const React = require('react');

class Index extends React.Component{
    render(){
        const {fruits} = this.props
        return(
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {
                        fruits.map((fruit) => {
                            const {name, color, readyToEat} = fruit
                            return (
                                <li key={fruit._id}>
                                    <a href={`/fruits/${fruit._id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        readyToEat? 
                                        'It\'s ready to eat':
                                        'It\'s not ready to eat'
                                    }
                                    <br/>
                                    <form method="POST" action={`/fruits/${fruit._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index