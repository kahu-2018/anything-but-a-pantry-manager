import React from 'react'
import { connect } from 'react-redux'


function Recipe ({recipes}) {
  let randomNumber = Math.floor(Math.random()*10)
  const randomRecipe = recipes[randomNumber]

  return recipes.length > 0 
    ? <a href={randomRecipe.href} target="_blank">
      <img className='img' src={randomRecipe.thumbnail} alt="food" />
      <h4>{randomRecipe.title}</h4> 
    </a>
    : <h4>No results returned</h4>
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipe)
