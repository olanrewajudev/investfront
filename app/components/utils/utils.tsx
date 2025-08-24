import toast, { type Renderable, type Toast, type ValueFunction } from "react-hot-toast";
import banner5 from '../../../public/general/banner1.jpg'
import banner4 from '../../../public/general/banner2.jpg'
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
    },
    {
        image: '/general/calc-bg.jpg',
        title: 'second blog post',
        date: 'January 9, 2019',
    },
]


export const HomeBanner = [
    {
        img: banner4,
        title: 'Crypto Currency exchange you can trust',
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