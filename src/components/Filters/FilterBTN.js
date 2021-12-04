import React from "react";

const FilterBTN = ({
  key,
  name,
  item,
  index,
  changeFunction,
  setPageNumber,
}) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check my-2">
        <input
          className="form-check-input x"
          type="radio"
          name={`${name}`}
          id={`${name}-${index}`}
          onClick={() => {
            changeFunction(item);
            setPageNumber(1);
          }}
        />
        <label class="btn  btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
