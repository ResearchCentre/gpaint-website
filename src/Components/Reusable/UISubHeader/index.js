import React from 'react'
import { Navbar } from 'react-bootstrap';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';

const SubHeader = ({ rightIcon, leftText }) => {
    return (
        <>
            <nav className='sub_header'>
                <Navbar className="bg-body-tertiary">
                    <Navbar.Brand>
                        {leftText} <KeyboardArrowDownIcon className='mx-1' />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <IconButton >
                                {rightIcon}
                            </IconButton>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </>
    )
}

export default SubHeader