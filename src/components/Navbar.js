import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.jpg';

const Navbar = () => {
  return (
    <Stack 
        direction="row"
        justifyContent="space-around"
        sx={{
            gap: { sm:'122px', xs:'40px' },
            mt: { sm:'52px', xs:'30px' },
            justifyContent:'none'
        }}
        px="20px"
    >
        <Link to="/">
            <img src={Logo} alt="logo"
                style={
                {
                    width:'100px',
                    height: '80px',
                    margin: '0 20px'
                }
                }
            />
        </Link>
        <h1 style={{
            width: '1000px',
            textAlign: 'center',
            fontSize:'60px',
            color:'blue'
        }

        }>WeCare </h1>
        <Stack
            direction="row"
            gap="40px"
            fontSize="50px"
            sx={{
                fontSize: { lg:"24px", xs:"22px" }
            }}
            alignItems="flex-end"
        >
            <Link to="/" style={
            {
                textDecoration:'none',
                color:'Purple',
                borderBottom:'1px solid grey'
            }
            }>Home</Link>
            <a href="#exercises" style={
            {
                textDecoration:'none',
                color:'Purple'
            }
            }>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar