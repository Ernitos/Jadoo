'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { NAV_LINKS } from './NavData'

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const menuVariants: Variants = {
  closed: {
    x: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.05, staggerDirection: -1 }
  },
  opened: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28, staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  closed: { opacity: 0, y: 15 },
  opened: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
}

export function MobileNav({ isOpen, setIsOpen, onScrollTo }: MobileNavProps) {
  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false) 
    onScrollTo(e, href)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex flex-col gap-1.5 md:hidden z-50 focus:outline-none p-2 cursor-pointer'
        aria-label='Toggle menu'
      >
        <span
          className={`h-0.5 w-6 bg-navy rounded transition-all duration-300 origin-center ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-navy rounded transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-0' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-navy rounded transition-all duration-300 origin-center ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate='opened'
            exit='closed'
            className='fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-10 md:hidden'
          >
            <nav className='flex flex-col items-center gap-6'>
              {NAV_LINKS.map(link => (
                <motion.div key={link.id} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={e => handleMobileClick(e, link.href)}
                    className='text-2xl text-navy hover:text-coral font-bold tracking-wide transition-colors duration-200'
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={itemVariants} className='flex flex-col items-center gap-4 w-2/3'>
              <button className='w-full border border-gray-300 rounded-full py-3 text-navy font-semibold text-lg hover:bg-navy/5 active:scale-95 transition-all duration-200'>
                Login
              </button>
              <button className='w-full bg-navy text-white rounded-full py-3 font-semibold text-lg hover:bg-navy/90 active:scale-95 transition-all duration-200 shadow-md'>
                Sign up
              </button>
              <button className='w-full border border-gray-200 rounded-full py-3 text-navy font-semibold text-lg hover:bg-navy/5 active:scale-95 transition-all duration-200'>
                English
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}