import React from 'react'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

import SHOP_DATA from './shop.data'

import './shop.styles.scss'

class ShopPage extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          collections: SHOP_DATA
      }
  }

  render() {
    const {collections} = this.state
    return(
      <div>
        <h1>SHOP PAGE</h1>
        {collections.map(({id, ...otherCollectionProps}) => {
          return(
            <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
          )
        }
          
        )}
      </div>
    )
  }
}

export default ShopPage