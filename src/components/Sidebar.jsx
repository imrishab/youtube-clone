import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

// const selectedCategory = 'New';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        color: "white",
      
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#272727',
            color: 'white',
            marginRight:'20px',
          }}
          key={category.name}
        >
          <span
            style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight:'1rem' }}
          >
            {category.icon}</span>
          <span>{category.name}</span>
        </button>

      ))}
    </Stack>
  )
}

export default Sidebar
