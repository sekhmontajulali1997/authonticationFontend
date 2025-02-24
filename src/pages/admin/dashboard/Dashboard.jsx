
const Dashboard = () => {
  return (
<>


  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Welcome Admin!</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <div className="dash-widget-header">
              <span className="dash-widget-icon text-primary border-primary">
                <i className="fe fe-users" />
              </span>
              <div className="dash-count">
                <h3>168</h3>
              </div>
            </div>
            <div className="dash-widget-info">
              <h6 className="text-muted">Doctors</h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-primary w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <div className="dash-widget-header">
              <span className="dash-widget-icon text-success">
                <i className="fe fe-credit-card" />
              </span>
              <div className="dash-count">
                <h3>487</h3>
              </div>
            </div>
            <div className="dash-widget-info">
              <h6 className="text-muted">Patients</h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-success w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <div className="dash-widget-header">
              <span className="dash-widget-icon text-danger border-danger">
                <i className="fe fe-money" />
              </span>
              <div className="dash-count">
                <h3>485</h3>
              </div>
            </div>
            <div className="dash-widget-info">
              <h6 className="text-muted">Appointment</h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-danger w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <div className="dash-widget-header">
              <span className="dash-widget-icon text-warning border-warning">
                <i className="fe fe-folder" />
              </span>
              <div className="dash-count">
                <h3>$62523</h3>
              </div>
            </div>
            <div className="dash-widget-info">
              <h6 className="text-muted">Revenue</h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-warning w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="row">
      <div className="col-md-12">
        {/* Recent Orders */}
        <div className="card card-table">
          <div className="card-header">
            <h4 className="card-title">Appointment List</h4>
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


 

  </div>



</>

  );
};

export default Dashboard;
