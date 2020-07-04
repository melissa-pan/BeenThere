import Home from "../pages/Home/index";
import Family from "../pages/Family/index";
import Conversation from "../pages/Conversation";
// import Calling from "../pages/Calling";
import Training from "../pages/Training";
import Join from "../pages/Join";
import Landing from "../pages/Landing";
import Login from "../components/Login";
import Mentors from "../pages/Mentors";
import Mentor from "../pages/Mentor";
import Hotline from "../pages/Hotline";

export default [
  // {
  //   path: "/login",
  //   component: Login,
  // },
  // { path: "/signup", component: Login },
  { path: "/mentors/:id", component: Mentor },
  { path: "/training", component: Training },
  {
    path: "/",
    component: Home,
    routes: [
      { path: "/", exact: true, component: Landing },

      { path: "/conversation", component: Conversation },
      // { path: "/calling", component: Calling },

      { path: "/join", component: Join },
      { path: "/family", component: Family },
      { path: "/hotline", component: Hotline },
      {
        path: "/mentors",
        component: Mentors,
      },
    ],
  },
];
