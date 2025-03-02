import HomeImage from "../../../Assets/images/png/HomeImage.png"

import ResidentialPaintingImage from "../../../Assets/images/png/ResidentialPaintingImage.png"
import CommercialPaintingImage from "../../../Assets/images/png/CommercialPaintingImage.png"
import CorporateStrataPaintingImage from "../../../Assets/images/png/CorporateStrataPaintingImage.png"

import customerService from "../../../Assets/images/png/customerService.png"
import affortableCost from "../../../Assets/images/png/affortableCost.png"



export const homePgContent = [
    {
        topSubTitle: "We help you",
        subtitleClass: "sub_title",
        title: "GPaint",
        headingStyle: "firstmain_heading",
        description: [{ para: "At WA Painters, we’re committed to your satisfaction"
+"Whether it's a residential or commercial project, our team delivers top-notch painting services with exceptional results. We only use high-quality materials to ensure lasting beauty for your property."

+"We offer a wide range of painting and decorating services to suit any budget. Every job meets Australian painting standards and OHS guidelines, ensuring safety and quality. Our trained team is dedicated to providing the best service and ensuring you’re happy with the final outcome" 

+"Trust us to handle every detail, with quotes provided for each project, ensuring great value for your investment" }],
        btnLabel: "View in detail",
        button: true,
        secondContentImg: HomeImage,
        firstContentImg: "",
        imgClass: "first_att_img",
        ecllips: true
    },
    {
        headingStyle: "sec_main_heading",
        title: "Excellent Customer Service",
        description: [{ para: "Your satisfaction is our top priority. We listen to your needs, provide honest advice, and keep you informed at every stage of the project." }],
        firstContentImg: customerService,
        secondContentImg: "",
        button: false,
        imgClass: "grp_img"

    },
    {
        headingStyle: "sec_main_heading",
        // bottomSubTitle: "Single account for multiple products",
        title: "Affordable Pricing with No Hidden Costs",
        description: [{ para: "We offer competitive pricing with detailed quotes – no surprises, just great value for money." },
             { para: "Join us in embracing unity, efficiency, and a future where your online experience works harmoniously." }],
        secondContentImg: affortableCost,
        firstContentImg: "",
        button: false,
        bottomSubtittleClass: "bottom_subtittle",
        imgClass: "system_account_img"
    },
];

export const exploreProduct = [
    {
        maintitle: "Explore our product",
        subTitle: "Residential Painting",
        para: "Transform your home with our expert interior and exterior painting services. We bring a fresh look to your living spaces with vibrant colours and smooth finishes  all tailored to your style."
        + "✔ New Homes ✔ Repaints & Renovations ✔ Feature Walls ✔ Texture Coating✔ Fence & Deck Painting",
        buttonLabel: "Get Started",
        navLink: "/",
        img: ResidentialPaintingImage
    },


    {
        maintitle: "Explore our product",
        subTitle: "Commercial Painting",
        para: "We understand how important it is to maintain a professional image for your business. Our commercial painting services will give your property a clean, fresh, and inviting look to impress your customers and employees."
        + "✔ Offices ✔ Shops & Retail Outlets ✔ Restaurants ✔ Warehouses ✔ Industrial Buildings",
        buttonLabel: "Get Started",
        navLink: "/",
        img: CommercialPaintingImage
    },

    {
        maintitle: "Explore our product",
        subTitle: "Corporate & Strata Painting",
        para: "We provide high-quality painting solutions for corporate offices, apartments, and strata buildings. Our team works efficiently to ensure minimal disruption to your business operations."
        + "✔ ✔ Corporate Offices ✔ Apartment Complexes & Common Area ✔ High-Rise Buildings ✔ Strata Maintenance",
        buttonLabel: "Get Started",
        navLink: "/",
        img: CorporateStrataPaintingImage
    }


];

export const subscriptionDetail = [{
    maintitle: "Payment Plans",
    para: "Choose the best plan for your painting project and enjoy professional service with flexible payment options. Whether it's a one-time project or an ongoing contract, we've got you covered.",
    amountdetails: [
        {
            heading: "Contract Work",
            para: "For larger or ongoing projects, we offer customized contracts based on your specific needs. This plan includes a detailed agreement and a fixed price for the entire project.",
            // rate: "$3"
        },
        {
            heading: "Hourly Work",
            para: "If you need a smaller project or just a few hours of work, our hourly service is perfect for you. You only pay for the time spent on your project.",
            // rate: "$27"
        }
    ],
    // boldtext: "Subscription amount will be the sum of both space and total users count",
    paraheading: "Flexible Payment Options",
    paraLine: "Choose the plan that fits your needs and budget.",
    para2: "Payment Methods Accepted:Bank Transfer, Cash Payment Contact us today to discuss your project and choose the best payment plan for your needs!"

}]

