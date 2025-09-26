import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./Layout/user-layout.tsx', [
        index("routes/general/home.tsx"),
        route("/about-us", "routes/general/aboutus.tsx"),
        route("/team", "routes/general/team.tsx"),
        route("/contact-us", "routes/general/contactus.tsx"),
        route("/buy-and-sell", "routes/general/buy-sell.tsx"),
        route("/service", "routes/general/service.tsx"),
    ])

] satisfies RouteConfig;
