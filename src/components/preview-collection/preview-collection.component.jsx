import React from 'react'

import './preview-collection.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'
// import Item from '../item/item.component

const PreviewCollection = ({title, items}) => {
  return(
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) =>
          <CollectionItem key={id} {...otherItemProps} />
        )}
      </div>
    </div>
  )
}

export default PreviewCollection