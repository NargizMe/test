import React from 'react';

function ExtraNew(props) {
  console.log('extraNew:', props.name);
  return (
    <div>
      <label style={{color:'green'}}>{props.name}</label>
    </div>
  );
}

export default ExtraNew;
