import React from 'react'
import { Button } from '@mui/material';
import { withStyles } from 'tss-react/mui'
import { AppPrimaryColor, DarkModePrimaryColor } from '../../../MasterData/index'


const OutlineBtn = ({ isDarkTheme, loader, className, btnType, label, onClick, minWidth, width }) => {
    const Btn = withStyles(
        Button,
        (theme) => ({
            root: {
                fontFamily: 'DM Sans',
                color: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor,
                background: isDarkTheme ? "#000" : "#FFF",
                border: `1px solid ${isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor}`,
                textTransform: 'capitalize',
                borderRadius: '9px',
                width: (props) => props.Width,
                minWidth: (props) => props.minWidth,
            },
        }),
    );


    return (
        <Btn className={className} onClick={onClick} minWidth={minWidth} Width={width} type={loader ? "disable" : btnType}> {label}</Btn>
    )
}
export default OutlineBtn;