import "./App.css";
import Form from "./Form";
import GeoColumn from "./GeoColumn";
import TempColumn from "./TempColumn";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp">
          <Form />
          <div className="row row-cols-1 row-cols-md-2 g-4 mainInfo">
            <GeoColumn />
            <TempColumn />
          </div>
          <div className="container text-start">
            <div className="row align-items-start">
              <div className="col-2 daily" id="daily-tab">
                Daily
              </div>
              <div className="col-2 wind" id="wind-tab">
                Wind
              </div>
            </div>
          </div>
          <hr />
          <div className="weather-forecast"></div>
          <div className="wind-forecast"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
