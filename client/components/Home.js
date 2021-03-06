import React from 'react'
import {connect} from 'react-redux'
import Welcome from './Welcome'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <Welcome username={username} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
