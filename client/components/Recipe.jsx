import React from 'react'
import { connect } from 'react-redux'

class Recipe extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Here's your Recipe</h1>
          <div>
          {this.props.recipes.map(recipe =>
            <a href={recipe.href} target="_blank"><img className='img' src={recipe.thumbnail} alt="food" /><h4>{recipe.title}</h4></a>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipe)
