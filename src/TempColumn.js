import React from "react";
import "./TempColumn.css";

export default function TempColumn() {
  return (
    <div className="TempColumn">
      <div className="col">
        <div className="card-body default-data align-items">
          <div className="temperature">
            <div className="temp">
              <span className="tempNumber">24 </span>
              <span className="units">
                <div>
                  <div className="celcius">°C</div>
                  <div>
                    <img className="weatherIcon" src="#" alt="" width="60" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
