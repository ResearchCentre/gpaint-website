
// SVG File
import GeoTech from "../../../Assets/svg/icons/GeoframingTech.svg"
import FlexImg from "../../../Assets/svg/icons/FlexibleCustomize.svg"
import Mobile from "../../../Assets/svg/icons/MobileCheckInApp.svg"

import ExtensionAttendance from "../../../Assets/svg/extensionAttendance.svg"
import MobileCheckIn from "../../../Assets/images/svg/twoMobiles.svg";



export const liveAttendancedata = [
    {
        heading: "Friendly & Professional Team",
        content: "Our team is passionate, polite, and always ready to assist with a smile. We believe in building long-term relationships with our customers.",
        img: GeoTech
    }, {
        heading: "Fast & Perfect Service",
        content: "We deliver on time without compromising quality. Our efficient process ensures minimal disruption to your daily life or business operations.",
        img: FlexImg
    },
    {
        heading: "High-Quality Workmanship",
        content: "We use premium paints and materials to guarantee a flawless finish that will stand the test of time. Every job is done with precision, from preparation to the final coat.",
        img: Mobile
    }
]

export const extensionAttendance = [
    {
        title: "Extension of Live Attendance",
        subtitle: "Check-in",
        content: "Introducing , the free revolutionary Check-In App which is an integration of Live Attendance platform. It helps your mates to check-in, track their time, make their presence in just a “Click”",
        btnLabel: "Get Started",
        img: ExtensionAttendance,
    }, {
        title: "Check-in App",
        content: "The Check-In Mobile App boasts a user-friendly interface designed for simplicity and efficiency. With just a few taps, employees can register their attendance, view their attendance history, and stay informed about their work hours.",
        // getApp: "AVAILABLE ON",
        img: MobileCheckIn
    }
]