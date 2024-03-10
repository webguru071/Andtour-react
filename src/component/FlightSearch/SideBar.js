import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="left_side_search_area">
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Filter by price</h5>
          </div>
          <div className="filter-price">
            <div id="price-slider"></div>
          </div>
          <button className="apply" type="button">
            Apply
          </button>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Number of stops</h5>
          </div>
          <div className="tour_search_type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultf1"
              />
              <label className="form-check-label" for="flexCheckDefaultf1">
                <span className="area_flex_one">
                  <span>1 stop</span>
                  <span>20</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="2"
                id="flexCheckDefaultf2"
              />
              <label className="form-check-label" for="flexCheckDefaultf2">
                <span className="area_flex_one">
                  <span>2 stop</span>
                  <span>16</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="3"
                id="flexCheckDefaultf3"
              />
              <label className="form-check-label" for="flexCheckDefaultf3">
                <span className="area_flex_one">
                  <span>3 stop</span>
                  <span>30</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="4"
                id="flexCheckDefaultf4"
              />
              <label className="form-check-label" for="flexCheckDefaultf4">
                <span className="area_flex_one">
                  <span>Non-stop</span>
                  <span>22</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Flight className</h5>
          </div>
          <div className="tour_search_type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="5"
                id="flexCheckDefaultt1"
              />
              <label className="form-check-label" for="flexCheckDefaultt1">
                <span className="area_flex_one">
                  <span>Economy</span>
                  <span>20</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="6"
                id="flexCheckDefaultt2"
              />
              <label className="form-check-label" for="flexCheckDefaultt2">
                <span className="area_flex_one">
                  <span>Business</span>
                  <span>26</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Airlines</h5>
          </div>
          <div className="tour_search_type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="7"
                id="flexCheckDefaults1"
              />
              <label className="form-check-label" for="flexCheckDefaults1">
                <span className="area_flex_one">
                  <span>Quatar Airways</span>
                  <span>17</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="8"
                id="flexCheckDefaults2"
              />
              <label className="form-check-label" for="flexCheckDefaults2">
                <span className="area_flex_one">
                  <span>Fly Amirates </span>
                  <span>14</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="9"
                id="flexCheckDefaults3"
              />
              <label className="form-check-label" for="flexCheckDefaults3">
                <span className="area_flex_one">
                  <span>Novo Air </span>
                  <span>62</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="10"
                id="flexCheckDefaults4"
              />
              <label className="form-check-label" for="flexCheckDefaults4">
                <span className="area_flex_one">
                  <span>Air Asia </span>
                  <span>08</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="11"
                id="flexCheckDefaults5"
              />
              <label className="form-check-label" for="flexCheckDefaults5">
                <span className="area_flex_one">
                  <span>Singapore Airlines </span>
                  <span>12</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Refundable</h5>
          </div>
          <div className="tour_search_type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="12"
                id="flexCheckDefaultp1"
              />
              <label className="form-check-label" for="flexCheckDefaultp1">
                <span className="area_flex_one">
                  <span>Yes</span>
                  <span>17</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="13"
                id="flexCheckDefaultp2"
              />
              <label className="form-check-label" for="flexCheckDefaultp2">
                <span className="area_flex_one">
                  <span>No</span>
                  <span>14</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="14"
                id="flexCheckDefaultp3"
              />
              <label className="form-check-label" for="flexCheckDefaultp3">
                <span className="area_flex_one">
                  <span>As per rules</span>
                  <span>62</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
