import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurretUser'

class Header extends Component {
  render() {
    console.log("(ᗒᗣᗕ) (•̀o•́)ง this.props.data", this.props.data )
    return (
      <div>
        Header
      </div>
    )
  }
}

export default graphql(query)(Header)
