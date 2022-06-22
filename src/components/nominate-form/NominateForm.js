import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const categories = [{ label: "Best yacht", value: "Best Yacht" }];
const customValueRenderer = (selected, _options) => {
  return categories.length ? (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {selected.map(({ label }) => (
        <div
          style={{
            padding: 4,
            display: "flex",
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 2,
            marginBottom: 2,
            flexDirection: "row",
            fontWeight: 500,
            display: "flex",
            backgroundColor: "#FBE7A7",
            marginRight: 4,
            color: "#B78533",
            marginLeft: 0,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  ) : (
    "No Items Selected"
  );
};

function NominateForm() {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-2">
        <span className="text-sm font-medium text-gray">
          Please Select one or more categories
        </span>
        <MultiSelect
          options={categories}
          disabled={false}
          value={selected}
          className="bg-parrot"
          onChange={setSelected}
          labelledBy={"Select"}
          valueRenderer={customValueRenderer}
        />
      </div>
    </div>
  );
}

export default NominateForm;
