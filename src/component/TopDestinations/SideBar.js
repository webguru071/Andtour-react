import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="left_side_search_area">
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Filter by Review</h5>
          </div>
          <div className="filter_review">
            <form className="review_star">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValu="1"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValu="1"
                  id="flexCheckDefault1"
                />
                <label className="form-check-label" for="flexCheckDefault1">
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_asse"></i>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValu="1"
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" for="flexCheckDefault2">
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValu="1"
                  id="flexCheckDefault3"
                />
                <label className="form-check-label" for="flexCheckDefault3">
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValu="1"
                  id="flexCheckDefault5"
                />
                <label className="form-check-label" for="flexCheckDefault5">
                  <i className="fas fa-star color_theme"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                  <i className="fas fa-star color_asse"></i>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Tour type</h5>
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
                  <span>Ecotourism</span>
                  <span>17</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultf2"
              />
              <label className="form-check-label" for="flexCheckDefaultf2">
                <span className="area_flex_one">
                  <span>Escorted tour </span>
                  <span>14</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultf3"
              />
              <label className="form-check-label" for="flexCheckDefaultf3">
                <span className="area_flex_one">
                  <span>Family trips</span>
                  <span>30</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultf4"
              />
              <label className="form-check-label" for="flexCheckDefaultf4">
                <span className="area_flex_one">
                  <span>Group tour</span>
                  <span>22</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultf5"
              />
              <label className="form-check-label" for="flexCheckDefaultf5">
                <span className="area_flex_one">
                  <span>City trips</span>
                  <span>41</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="left_side_search_boxed">
          <div className="left_side_search_heading">
            <h5>Facilities</h5>
          </div>
          <div className="tour_search_type">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultt1"
              />
              <label className="form-check-label" for="flexCheckDefaultt1">
                <span className="area_flex_one">
                  <span>Gymnasium</span>
                  <span>20</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultt2"
              />
              <label className="form-check-label" for="flexCheckDefaultt2">
                <span className="area_flex_one">
                  <span>Mountain Bike</span>
                  <span>14</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultt3"
              />
              <label className="form-check-label" for="flexCheckDefaultt3">
                <span className="area_flex_one">
                  <span>Wifi</span>
                  <span>62</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultt4"
              />
              <label className="form-check-label" for="flexCheckDefaultt4">
                <span className="area_flex_one">
                  <span>Aerobics Room</span>
                  <span>08</span>
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValu="1"
                id="flexCheckDefaultt5"
              />
              <label className="form-check-label" for="flexCheckDefaultt5">
                <span className="area_flex_one">
                  <span>Golf Cages</span>
                  <span>12</span>
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
