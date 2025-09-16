import toast, { type Renderable, type Toast, type ValueFunction } from "react-hot-toast";
import banner5 from '../../../public/general/banner1.jpg'
import banner4 from '../../../public/general/banner2.jpg'
import homeabout1 from '../../../public/general/box-icon-a.png'
import homeabout2 from '../../../public/general/box-icon-b.png'
import homeabout3 from '../../../public/general/box-icon-c.png'
import homeabout4 from '../../../public/general/box-icon-d.png'
import user from '../../../public/general/user.png'
import cl1 from '../../../public/general/cl-logo1.png'
import cl2 from '../../../public/general/cl-logo2.png'
import cl3 from '../../../public/general/cl-logo3.png'
import cl4 from '../../../public/general/cl-logo4.png'
import cl5 from '../../../public/general/cl-logo5.png'
import cl6 from '../../../public/general/cl-logo6.png'


export const HotAlert = (message: Renderable | ValueFunction<Renderable, Toast>) => {
    toast.success(message,
        {
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        }
    );
}
export const ErrorAlert = (message: Renderable | ValueFunction<Renderable, Toast>) => {
    toast.error(message,
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        }
    );
}

export const headerFirstLink = [
    { title: "Help", href: '' },
    { title: "Support", href: '' },
    { title: "Login", href: '' },
    { title: "Register", href: '' }
]
export const headerSecondLink = [
    { title: "Home", href: '' },
    { title: "About Us", href: '' },
    { title: "Service", href: '' },
    { title: "Buy & Sell", href: '' },
    { title: "Contact Us", href: '' }
]
export const footersLink = [
    {
        title: 'SERVICES',
        links: [
            { name: 'Buy Bitcoins', href: '', isNew: false },
            { name: 'Buy Ethereum', href: '', isNew: false },
            { name: 'Bitcoin Trading', href: '', isNew: false },
            { name: 'Margin Trading', href: '', isNew: false },
        ]
    },
    {
        title: 'INFORMATION',
        links: [
            { name: 'Payment Options', href: '', isNew: false },
            { name: 'Fee Schedule', href: '', isNew: false },
            { name: 'Getting Started', href: '', isNew: false },
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