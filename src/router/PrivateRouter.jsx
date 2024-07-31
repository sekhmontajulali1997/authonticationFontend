import Layouts from "../component/layouts/Layouts";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminPanel from "../pages/admin/adminPanel/AdminPanel";
import User from "../pages/admin/user/User";
import AllProducts from "../pages/admin/allProducts/AllProducts";
import PrivateGardRoute from "./PrivateGardRoute";

const PrivateRouter = [
  {
    element: <PrivateGardRoute/>,
    children: [
      {
        element: <Layouts />,
        children: [
          {
            path: "/admin",
            element: <AdminPanel />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "user",
                element: <User />,
              },
              {
                path: "all-products",
                element: <AllProducts />,
              },
            ],
          },
        ],
      },
    ]
  }
];

// const PrivateRouter = [
//   {
//     element: <PrivateRouterGard />,
//     children: [
//       {
//         element: <Layouts />,
//         children: [
//           {
//             path: "/admin",
//             element: <AdminPanel />,
//             children: [
//               {
//                 path: "dashboard",
//                 element: <Dashboard />,
//               },
//               {
//                 path: "user",
//                 element: <User />,
//               },
//               {
//                 path: "all-products",
//                 element: <AllProducts />,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// export privateRouter

export default PrivateRouter;
