
// SVG File
import GeoTech from "../../../Assets/svg/icons/GeoframingTech.svg"
import FlexImg from "../../../Assets/svg/icons/FlexibleCustomize.svg"
import Mobile from "../../../Assets/svg/icons/MobileCheckInApp.svg"

import ExtensionAttendance from "../../../Assets/svg/extensionAttendance.svg"
import MobileCheckIn from "../../../Assets/images/svg/twoMobiles.svg";



export const liveAttendancedata = [
    {
        heading: "Geoframing technology",
        content: "Define specific geographical boundaries for your workspace directly within the platform. This means employees can only check in or check out when they are within the designated office area.",
        img: GeoTech
    }, {
        heading: "Flexible and Customizable",
        content: "Tailor the geofencing boundaries to suit your unique workspace layout. Easily draw and adjust boundaries through an intuitive interface.",
        img: FlexImg
    },
    {
        heading: "Mobile Check-In App",
        content: "Integrated with our Check-In App, this feature is effortlessly accessible to your employees. As they use the app to check in or out, the system ensures their location aligns with the boundaries.",
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