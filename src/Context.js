import React from 'react'
import ItemsList from './ItemsList';
const Context = ({items,handleCheck,handleDelete}) => {
    
  return (
    <main>
        {(items.length) ? (
            <ItemsList
            items = {items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
      ) : (
        <p>List is Empty</p>
      )}
    </main>
  )
}

export default Context
