import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout('./Layout/general-layout.tsx', [
        index("routes/general/home.tsx"),
        route("/about-us", "routes/general/aboutus.tsx"),
        route("/team", "routes/general/team.tsx"),
        route("/contact-us", "routes/general/contactus.tsx"),
        route("/buy-and-sell", "routes/general/buy-sell.tsx"),
        route("/how-it-works", "routes/general/how-it-works.tsx"),
        route("/service", "routes/general/service.tsx"),
        route("/service/:id", "routes/general/service-single.tsx"),
        route("/testimonial", "routes/general/testimonials.tsx"),
        route("/terms-of-service", "routes/general/termsofservice.tsx"),
        route("/privacy-policy", "routes/general/privacy-policy.tsx"),
        route("/health", "routes/general/health.tsx"),
        route("/admin/login", "routes/admin/form/login.tsx"),
        route("/admin/signup", "routes/admin/form/signup.tsx"),
    ]),

    layout("./Layout/admin-layout.tsx", [
        ...prefix("admin", [
            route("home-dashboard", "routes/admin/dashboard.tsx"),

        ])
    ]),
    layout("./Layout/user-layout.tsx", [
        ...prefix("user", [
            route("dashboard", "routes/user/dashboard.tsx"),
            route("kyc", "routes/user/kyc.tsx"),
            route("plans", "routes/user/plans.tsx"),
            route("deposit", "routes/user/deposit.tsx"),
            route("withdraw", "routes/user/withdraw.tsx"),
            route("transactions", "routes/user/transaction.tsx"),
            route("settings", "routes/user/settings.tsx"),

        ])
    ]),

] satisfies RouteConfig;
