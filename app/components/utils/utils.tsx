import toast, { type Renderable, type Toast, type ValueFunction } from "react-hot-toast";
import banner5 from '../../../public/general/banner1.jpg'
import banner4 from '../../../public/general/banner2.jpg'
import homeabout1 from '../../../public/general/box-icon-a.png'
import homeabout2 from '../../../public/general/box-icon-b.png'
import homeabout3 from '../../../public/general/box-icon-c.png'
import homeabout4 from '../../../public/general/box-icon-d.png'
import homeabout5 from '../../../public/general/box-icon-e.png'
import user from '../../../public/general/user.png'
import cl1 from '../../../public/general/cl-logo1.png'
import cl2 from '../../../public/general/cl-logo2.png'
import cl3 from '../../../public/general/cl-logo3.png'
import cl4 from '../../../public/general/cl-logo4.png'
import cl5 from '../../../public/general/cl-logo5.png'
import cl6 from '../../../public/general/cl-logo6.png'
import choose1 from '../../../public/general/box-icon-f.png'
import choose2 from '../../../public/general/box-icon-g.png'
import choose3 from '../../../public/general/box-icon-h.png'
import team3 from '../../../public/general/user.png'
import service1 from '../../../public/general/service-thumb-a.jpg'
import service2 from '../../../public/general/service-thumb-b.jpg'
import service3 from '../../../public/general/service-thumb-c.jpg'
import service4 from '../../../public/general/service-thumb-d.jpg'
import service5 from '../../../public/general/service-thumb-e.jpg'
import service6 from '../../../public/general/service-thumb-f.jpg'
import { BiHome } from "react-icons/bi";

export const HotAlert = (message: Renderable | ValueFunction<Renderable, Toast>) => {
    return toast.success(message, {
        duration: 6000,
        style: {
            borderRadius: '20px',
            background: '#fff',
            color: '#333',
            padding: '10px 18px',
            fontSize: '17px',
            minWidth: '320px',
        },
    });
};


export const ErrorAlert = (message: string) => {
    return toast.error(message, {
        duration: 7000,
        style: {
            borderRadius: '20px',
            background: '#fff',
            color: '#333',
            padding: '10px 18px',
            fontSize: '17px',
            minWidth: '320px',
        },
    });
};
export const formatAmount = (amount?: number) => {
    if (typeof amount !== "number") return "0.00";

    return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
export const adminSidebar = [
    { title: 'Home', url: [`/admin/home-dashboard`], Icon: BiHome },
    { title: 'Customers', url: [`/admin/customer`], Icon: BiHome },
    { title: 'Kyc Management', url: [`/admin/kyc`], Icon: BiHome },
    { title: 'Plans', url: [`/admin/plan`], Icon: BiHome },
    { title: 'Deposit', url: [`/admin/deposit`], Icon: BiHome },
    { title: 'Withdraw', url: [`/admin/withdraw`], Icon: BiHome },
    { title: 'Transaction', url: [`/admin/transactions`], Icon: BiHome },
]
export const UserSidebar = [
    { title: 'Home', url: [`/user/dashboard`], Icon: BiHome },
    { title: 'Kyc', url: [`/user/kyc`], Icon: BiHome },
    { title: 'Plans', url: [`/user/plans`], Icon: BiHome },
    { title: 'All Deposit', url: [`/user/deposit`], Icon: BiHome },
    { title: 'All Withdraw', url: [`/user/withdraw`], Icon: BiHome },
    { title: 'All Transaction', url: [`/user/transactions`], Icon: BiHome },
    { title: 'Settings', url: [`/user/settings`], Icon: BiHome },
]
export const formatTimeAgo = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime()
    const minutes = Math.floor(diff / 1000 / 60)
    return minutes < 60 ? `${minutes}m ago` : `${Math.floor(minutes / 60)}h ago`
}
export function formatDate(date?: string) {
    if (!date) return ""
    return new Date(date)
        .toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        })
        .replace(/\//g, "-")
}
export function formatTime(date?: string) {
    if (!date) return "";

    return new Date(date).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}
export const formatCustomDate = (date: string) => {
    const d = new Date(date);

    const month = d.toLocaleString("en-US", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();

    return `${month} ${day} ${year}`;
};
export const formatCurrency = (amount: number | string) => {
    if (!amount) return "0";
    return Number(amount).toLocaleString();
};

export const headerFirstLink = [
    { title: "Help", href: '' },
    { title: "Support", href: '' },
]
export const headerSecondLink = [
    { title: "Home", href: '/' },
    { title: "About Us", href: '/about-us' },
    { title: "Service", href: '/service' },
    { title: "Buy & Sell", href: '/buy-and-sell' },
    { title: "Contact Us", href: '/contact-us' }
]
export const userSideBar = [
    { id: 1, title: "Home", href: '/' },
    { id: 2, title: "All Plans", href: '/' },
    { id: 3, title: "Investments", href: '/' },
    { id: 5, title: "Add Money", href: '/' },
    { id: 6, title: "Withdraw", href: '/' },
    { id: 7, title: "Referral", href: '/' },
    { id: 8, title: "Settings", href: '/' },
    { id: 4, title: "All Transactions", href: '/' },

]
export const footersLink = [
    {
        title: 'SERVICES',
        links: [
            { name: 'Buy Crypto', href: '/how-it-works', isNew: false },
            { name: 'Crypto Trading', href: '', isNew: false },
            { name: 'Margin Trading', href: '', isNew: false },
            { name: 'Market Data', href: '', isNew: false },
        ]
    },
    {
        title: 'INFORMATION',
        links: [
            { name: 'Payment Options', href: '', isNew: false },
            { name: 'How It Works', href: '', isNew: false },
            { name: 'Pricing', href: '', isNew: false },
            { name: 'Identity Verification Guide', href: '', isNew: false },
            { name: 'Card Verification Guide', href: '', isNew: false },
        ]
    },
]

export const footerAddress = {
    address: '217 Summit Boulevard Birmingham, AL 35243',
    phone1: '(123) 4567 8910',
    phone2: '(123) 4567 8910',
    email: 'sitename@gmail.com',
    support: 'support@sitename.com'
}

export const recentBlogPosts = [
    {
        image: '/general/banner1.jpg',
        title: 'First blog post',
        date: 'December 19, 2017',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda ',
    },
]


export const HomeBanner = [
    {
        img: banner4,
        title: 'Licensed Lbourg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        id: 1
    },
    {
        img: banner5,
        title: 'NO. 1 Broker in the world.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        id: 2
    },

]
export const reviews = [
    {
        img: user,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        name: 'Jack Lbourg',
        role: 'CEO, CryptoCoin',
        id: 1
    },
    {
        img: user,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        name: 'Jack Lbourg',
        role: 'CEO, CryptoCoin',
        id: 2
    },
    {
        img: user,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        name: 'Jack Lbourg',
        role: 'CEO, CryptoCoin',
        id: 3
    },
    {
        img: user,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt ratione vel assumenda praesentium, sed eaque tempora laudantium magnam non sequi ipsam, a accusantium officiis fugit nemo nihil dolorem voluptates.',
        name: 'Jack Lbourg',
        role: 'CEO, CryptoCoin',
        id: 4
    },


]

export const homeabout = [
    {
        img: homeabout1,
        title: 'Licensed Lbourg ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 1
    },
    {
        img: homeabout2,
        title: 'NO HIDDEN FEES',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 2
    },
    {
        img: homeabout3,
        title: 'INSTANT TRADING',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 3
    },
    {
        img: homeabout4,
        title: 'SECURE trusted',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 4
    },
]

export const clientsLogo = [
    { img: cl1, id: 1 },
    { img: cl2, id: 2 },
    { img: cl3, id: 3 },
    { img: cl4, id: 4 },
    { img: cl5, id: 5 },
    { img: cl6, id: 6 },
]

export const buyandsell = [
    {
        img: homeabout1,
        title: 'Licensed Lbourg ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 1
    },
    {
        img: homeabout5,
        title: 'Licensed Lbourg ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 2
    },
    {
        img: homeabout3,
        title: 'Licensed Lbourg ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 3
    },
]

export const tablPanel = [
    { amount: "0.0656 btc", price: '100.00' },
    { amount: "0.0656 btc", price: '100.00' },
    { amount: "0.0656 btc", price: '100.00' },
    { amount: "0.0656 btc", price: '100.00' },
]

export const walletFeatures = [
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: '', title: "", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
]
export const chooseus = [
    { icon: choose1, title: "Payment Options", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: choose2, title: "Strong Security", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
    { icon: choose3, title: "World Coverage", text: 'Morbi eget varius risus, ut venenatis libero. Pellentesque in porta dui.' },
]
export const team = [
    { icon: team3, name: "jason markerson", role: 'consultant' },
    { icon: team3, name: "felix antik", role: 'team leader' },
    { icon: team3, name: "mardorna phillip", role: 'consultant' },
    { icon: team3, name: "roy cole", role: 'broker' },
    { icon: team3, name: "smith stone", role: 'broker' },
    { icon: team3, name: "micheal leonard", role: 'team leader' },
]

export const services = [
    { id: '1', icon: service1, title: "Buy crypto Online", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
    { id: '2', icon: service2, title: "sell crypto", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
    { id: '3', icon: service3, title: "earn passive income", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
    { id: '4', icon: service4, title: "trade with sceure escrow", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
    { id: '5', icon: service5, title: "build your reputation", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
    { id: '6', icon: service6, title: "get a free wallet", text: 'Justo dolor pede pede sit. Eu amet eos mauris, iaculis in, fringilla diam eros erat, fermentum etiam parturient est adipiscing.' },
]
export const serviceSingle = [
    { id: '1', icon: service1, title: "Buy crypto Online", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
    { id: '2', icon: service2, title: "sell crypto", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
    { id: '3', icon: service3, title: "earn passive income", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
    { id: '4', icon: service4, title: "trade with sceure escrow", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
    { id: '5', icon: service5, title: "build your reputation", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
    { id: '6', icon: service6, title: "get a free wallet", text: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris idunt ut labore et dolore magna aliqua.', text2: 'Sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris.Tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris.' },
]

export const NavbarLink = [
    { id: 1, href: "/", name: 'Home' },
    { id: 2, href: "/about-us", name: 'About Us' },
    { id: 3, href: "/service", name: 'Service' },
    { id: 4, href: "/buy-and-sell", name: 'Buy & Sell' },
    { id: 5, href: "/contact-us", name: 'Contact Us' },
]
