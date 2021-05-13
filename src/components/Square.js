import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Square(props) {
    return (
       
        <Button variant="contained" color="primary" className="square" onClick={props.onClick}>
            {props.value}
            </Button>
            
    )
}