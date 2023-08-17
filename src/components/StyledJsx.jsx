import React from 'react'

const StyledJsx = () => {
  return (
    <>
      <div className='container'>
        <p className='titleStyle'>- Styled JSX -</p>
        <button className='buttonStyle'>FIGHT!!</button>
        <style jsx="true">
          {`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .titleStyle {
            margin: 0;
            color: #c7b963;
          }
          .buttonStyle {
            background-color: #d7d448;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
          `}
        </style>
      </div>
    </>
  )
}

export default StyledJsx
