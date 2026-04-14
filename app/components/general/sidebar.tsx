import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavbarLink } from '../utils/utils'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router'
export default function Sidebar({ closeView }: { closeView: () => void }) {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            closeView()
        }, 200)
    }



    React.useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible]);

    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-220%' }} transition={{ duration: 0.5 }} className="bg-white/20 backdrop-blur-xl fixed top-0 z-[99] left-0 w-full scrollsdown h-[73%] overflow-y-auto shadow-2xl">
                            <div className="mx-5 my-3 overflow-auto flex items-end justify-end"><div className="flex items-center z-50 py-2 justify-between">
                                <div className="text-3xl w-full bg-white/25 backdrop-blur-xl p-2 rounded-full shadow-2xl"><FaTimes className="cursor-pointer" onClick={handleClose} /></div></div>
                            </div> 
                            <div className="mx-5">{NavbarLink.map((item) => (<div className="pb-3" key={item.id}><div className="w-full bg-white/25 backdrop-blur-xl py-5 rounded-full shadow-2xl"><Linked to={item.href} className="font-bold px-5 flex items-center justify-between">{item.name}</Linked></div></div>))}</div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
