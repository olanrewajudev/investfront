import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./Layout/user-layout.tsx', [
        index("routes/general/home.tsx"),
        route("/about-us", "routes/general/aboutus.tsx"),
        route("/team", "routes/general/team.tsx"),
        route("/contact-us", "routes/general/contactus.tsx"),
        route("/buy-and-sell", "routes/general/buy-sell.tsx"),
        route("/service", "routes/general/service.tsx"),
        route("/service/:id", "routes/general/service-single.tsx"),
        route("/testimonial", "routes/general/testimonials.tsx"),
    ])

] satisfies RouteConfig;
