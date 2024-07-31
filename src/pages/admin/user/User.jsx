import { useState } from "react";
import ModalPopap from "../../../component/modalPopap/ModalPopap";

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        {/* modal start */}
        {showModal && (
          <ModalPopap tittle="Add User" hide={handleModalClose}>
            <form>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="mb-3">
                    <label className="mb-2">Specialities</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="mb-3">
                    <label className="mb-2">Image</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
            </form>
          </ModalPopap>
        )}
        {/* modal end*/}

        {/* Recent Orders */}
        <div className="card card-table">
          <div className="card-header d-flex justify-content-between">
            <div>
              <h4 className="card-title">User List</h4>
            </div>

            <div>
              <button className="btn btn-primary " onClick={handleModal}>
                Add User
              </button>
            </div>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Speciality</th>
                    <th>Patient Name</th>
                    <th>Apointment Time</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/doctors/doctor-thumb-01.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Dr. Ruby Perrin</a>
                      </h2>
                    </td>
                    <td>Dental</td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/patients/patient1.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Charlene Reed </a>
                      </h2>
                    </td>
                    <td>
                      9 Nov 2023{" "}
                      <span className="text-primary d-block">
                        11.00 AM - 11.15 AM
                      </span>
                    </td>
                    <td>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="status_1"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="status_1" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>$200.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/doctors/doctor-thumb-02.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Dr. Darren Elder</a>
                      </h2>
                    </td>
                    <td>Dental</td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/patients/patient2.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Travis Trimble </a>
                      </h2>
                    </td>
                    <td>
                      5 Nov 2023{" "}
                      <span className="text-primary d-block">
                        11.00 AM - 11.35 AM
                      </span>
                    </td>
                    <td>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="status_2"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="status_2" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>$300.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/doctors/doctor-thumb-03.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Dr. Deborah Angel</a>
                      </h2>
                    </td>
                    <td>Cardiology</td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/patients/patient3.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Carl Kelly</a>
                      </h2>
                    </td>
                    <td>
                      11 Nov 2023{" "}
                      <span className="text-primary d-block">
                        12.00 PM - 12.15 PM
                      </span>
                    </td>
                    <td>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="status_3"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="status_3" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>$150.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/doctors/doctor-thumb-04.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Dr. Sofia Brient</a>
                      </h2>
                    </td>
                    <td>Urology</td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/patients/patient4.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html"> Michelle Fairfax</a>
                      </h2>
                    </td>
                    <td>
                      7 Nov 2023
                      <span className="text-primary d-block">
                        1.00 PM - 1.20 PM
                      </span>
                    </td>
                    <td>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="status_4"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="status_4" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>$150.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/doctors/doctor-thumb-05.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Dr. Marvin Campbell</a>
                      </h2>
                    </td>
                    <td>Orthopaedics</td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/patients/patient5.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="profile.html">Gina Moore</a>
                      </h2>
                    </td>
                    <td>
                      15 Nov 2023{" "}
                      <span className="text-primary d-block">
                        1.00 PM - 1.15 PM
                      </span>
                    </td>
                    <td>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="status_5"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="status_5" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>$200.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* /Recent Orders */}
      </div>
    </div>
  );
};

export default User;
