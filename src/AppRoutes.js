import TourList from './components/TourList/TourLIst';
import AboutUs from './components/About';
import Home from "./components/Home";
import AfterSearch from "./components/TourList/AfterSearch";
import Package from "./components/TourList/Package";
import Login from "./components/Login";
import Signup from './components/SignUp';
import Booked from "./components/User-data/Booked";
import Wishlist from "./components/User-data/Wishlist";
import Userdatadisplay from './components/User-data/Userdatadisplay';

export default[
    {path:'/',component: Home,exact: true},
    {path:'/TourList',component: TourList,exact: true},
    {path:'/Search/:search',component: AfterSearch,exact: true},
    {path:'/AboutUs',component: AboutUs,exact: true},
    {path:'/Package/:package',component: Package,exact: true},
    {path:'/Login',component: Login,exact: true},
    {path:'/Signup',component: Signup,exact: true},
    {path:'/BookingList/:package',component: Booked,exact: true},
    {path:'/WishList/:package',component: Wishlist,exact: true},
    {path:'/User',component:Userdatadisplay,exact:true},
]