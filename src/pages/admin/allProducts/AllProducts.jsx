//import { useEffect } from "react";
import sp1 from "../../../assets/img/specialities/specialities-01.png";

const AllProducts = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_length"
                      id="DataTables_Table_0_length"
                    >
                      <label>
                        Show{" "}
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6" />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="datatable table table-hover table-center mb-0 dataTable no-footer"
                      id="DataTables_Table_0"
                      role="grid"
                      aria-describedby="DataTables_Table_0_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="#: activate to sort column descending"
                            style={{ width: "173.798px" }}
                          >
                            #
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Specialities: activate to sort column ascending"
                            style={{ width: "430.325px" }}
                          >
                            Specialities
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Actions: activate to sort column ascending"
                            style={{ width: "410.072px" }}
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="sorting_1">#SP001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img"
                                  src={sp1}
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Urology</a>
                            </h2>
                          </td>
                          <td>
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-bs-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                data-bs-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light m-1"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 5 of 5 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next disabled"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
