import React from 'react';

const Question = props => {

  return(
    <div className="row">
      <div className="col s10">
        <div className="row">
          <div className="col s6">
            <ul>
              <li>
                {props.text}
              </li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Question;
