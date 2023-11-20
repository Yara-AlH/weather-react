import React from "react";

export default function From() {
  return (
    <div className="Form">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control search-form"
              type="search"
              placeholder="Enter a city..."
              autocomplete="off"
              autofocus
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary searchBtn"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
