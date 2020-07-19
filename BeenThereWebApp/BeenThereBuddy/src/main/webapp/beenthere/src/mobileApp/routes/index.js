import { Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Home from "../pages/Home/index";
const FamilyComponent = lazy(() => import("../pages/Family/index"));
// const ConversationComponent = lazy(() => import("../pages/Conversation"));
// const Calling = lazy(() =>  "../pages/Calling";
const TrainingComponent = lazy(() => import("../pages/Training"));
const JoinComponent = lazy(() => import("../pages/Join"));
const LandingComponent = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../components/Login"));
const MentorsComponent = lazy(() => import("../pages/Mentors"));
const MentorComponent = lazy(() => import("../pages/Mentor"));
const HotlineComponent = lazy(() => import("../pages/Hotline"));
const ChecklistComponent = lazy(() =>
  import("../pages/Mentor/components/Checklist")
);
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  );
};
export default [
  // {
  //   path: "/login",
  //   component: Login,
  // },
  // { path: "/signup", component: Login },
  // { path: "/psgmeeting", component: SuspenseComponent(TrainingComponent) },
  // {
  //   path: "/mentors/:id",
  //   exact: true,
  //   component: SuspenseComponent(MentorComponent),
  // },

  // {
  //   path: "/mentors/:id/checklist",
  //   component: SuspenseComponent(ChecklistComponent),
  // },
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        component: SuspenseComponent(LandingComponent),
      },

      // {
      //   path: "/conversation",
      //   component: SuspenseComponent(ConversationComponent),
      // },
      // { path: "/calling", component: Calling },

      { path: "/join", component: SuspenseComponent(JoinComponent) },
      { path: "/family", component: SuspenseComponent(FamilyComponent) },
      { path: "/hotline", component: SuspenseComponent(HotlineComponent) },
      // {
      //   path: "/mentors",
      //   component: SuspenseComponent(MentorsComponent),
      // },
    ],
  },
  // { path: "/*", render: () => <Redirect to={"/"} /> },
];
