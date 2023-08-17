import React from 'react'
import classes from './CssModules.module.scss';

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleStyle}>- CSS Modules -</p>
      <button  className={classes.buttonStyle}>FIGHT!!</button>
    </div>
  )
}

export default CssModules
