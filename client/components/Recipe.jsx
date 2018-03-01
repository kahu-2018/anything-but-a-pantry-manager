import React from 'react'
import { connect } from 'react-redux'

class Recipe extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  render(props) {
    return (
      <div>
        <h3>Here's your Recipe</h3>
        <ul>
          {console.log(this.props.recipes)}
          {this.props.recipes.map(recipe => <li>{recipe.title}</li>)}

      </ul>
      </div>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(Recipe)
