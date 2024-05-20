import React from "react";
import background from "../images/loginbgnew.png";
import user from "../images/small.png";
import img from "../images/main-logo.jpg";
import {useNavigate} from "react-router-dom";
const HomePage =
    () => {
  const navigate = useNavigate()
  return (
      <>
        <div>
          <section>
            <div className="w-100 d-flex justify-content-between align-items-center py-3 bg-white">
              <div className="px-4">
                <img src={img} style={{ height: "60px" }} alt="logo image" />
              </div>
              <div className="ms-2 fw-bold text-wrap">
                National Cooperative Consumer's Federation of India Ltd - Bharat
                Brand Portal
              </div>
              <div></div>
              <div></div>
            </div>
            <div
                className="main"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height:"100%",
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
            >

              <div className="px-5 w-100 h-50">
                <div className="box bg-light p-md-5 p-3 h-100">
                  <div className="row m-0 align-items-center">
                    <div className="col-md-6 order-md-1 order-2">
                      {" "}
                      <div className="details">
                        Apply For Provisional Permission for New Rice Mill
                        <button className="Sidebutton ms-2">
                          View Instructions
                        </button>
                      </div>
                      <div className="details">
                        Fixation/Enhancement of Capacity of Rice Mill
                        <button className=" ms-2 Sidebutton">
                          View Instructions
                        </button>
                      </div>
                      <div className="details">
                        Final Registration of New Rice Mill
                        <button className=" ms-2 Sidebutton">
                          View Instructions
                        </button>
                      </div>
                      <div className="details">
                        Change in Constitution of already Registered Rice Mill
                        <button className=" ms-2 Sidebutton">
                          View Instructions
                        </button>
                      </div>
                      <div className="details">
                        Application for Allotment of Rice Mill
                        <button className=" ms-2 Sidebutton">
                          View Milling Policy
                        </button>
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <div
                            className="me-2"
                            style={{ height: "60px", width: "46px" }}
                        >
                          <img src={user} alt={user} />
                        </div>
                        <div>
                          <div>
                            Helpdesk 24/7 | 9 AM to 7 PM
                            <br />
                            <div className="color1 ">
                              77430-11156 | 77430-11157 | 77430-11158 |
                              77430-11159
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5 order-md-2 order-1">
                      <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                          <h5>If already registered?</h5>
                          <button className="btn btn-success mb-2">Login</button>
                        </div>
                        <div className="my-4">
                          <h5>For New Registration</h5>
                          <button className="btn btn-success" onClick={()=> navigate("/register")}>
                            Registration
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
  );
};
export default HomePage;