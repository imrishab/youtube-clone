import { Paper, colors } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './SearchBar.css';


import { paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
    return (
        <Paper
            elevation={5}
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                padding: '0.3rem',
                border: '1px solid #303030',
                pl: 2,
                backgroundColor:'#121212',
                mr: { sm: 5 }           //margin-right for small devices automatically sets to 5
            }}
        >

            <input
                className="search-bar"
                placeholder="Search..."
                // value=""
                // onChange={() => { }}
                
            />

            <IconButton
                type="submit"
                sx={{ p: '1px', color: '#888888'}}
                
            >
                <Search 
                sx={{height:'20px' }}
                
                />
            </IconButton>

        </Paper>
    )
}

export default SearchBar
