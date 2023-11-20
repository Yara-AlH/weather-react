import React from "react";
import "./GeoColumn.css";

export default function GeoColumn() {
  return (
    <div className="Column">
      <div className="col">
        <div className="card-body default-location align-items">
          <div className="geo">
            <div className="city" id="city">
              Damascus
            </div>
            <div className="country">Syria</div>
            <div className="lastUpdate">
              Last updated:{"11:49 "}
              <span id="current-date">Friday, September, 2023</span>
            </div>
            <div className="condition"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
