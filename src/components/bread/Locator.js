import React from 'react'
import {Breadcrumbs, Typography, Link} from '@mui/material'

const Locator = () => {
  return (
    <div className="vf-breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" sx={{ color: "#940B92" }}>
          
          </Typography>
        </Breadcrumbs>
      </div>
  )
}

export default Locator