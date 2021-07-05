import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
        <span className="tag is-danger delete-tag">Delete
          <button className="delete is-medium delete-buttonr" onClick={() => {
              props.removeFeature(props.feature)
            }}
          />
      </span>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
