import AboutUs from '../pages/AboutUs/AboutUs';
import Contacts from '../pages/Contacts/Contacts';
import FAQ from '../pages/FAQ/FAQ';
import Portfolio from '../pages/Portfolio/Portfolio';
import Products from '../pages/Products/Products';
import Sercives from '../pages/Sercives/Sercives';

export const publicRoutes = [
    { path: '/about_us', component: AboutUs, exact: true },
    { path: '/FAQ', component: FAQ, exact: true },
    { path: '/contacts', component: Contacts, exact: true },
    { path: '/portfolio', component: Portfolio, exact: true },
    { path: '/products', component: Products, exact: true },
    { path: '/services', component: Sercives, exact: true },
    { path: '/*', component: AboutUs, exact: true },
];
