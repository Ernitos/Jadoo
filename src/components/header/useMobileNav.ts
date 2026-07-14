// useMobileNav.ts
'use client'

import { useEffect } from 'react'

interface UseMobileNavProps {
  isOpen: boolean 
  setIsOpen: (isOpen: boolean) => void
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function useMobileNav({ isOpen, setIsOpen, onScrollTo }: UseMobileNavProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    
      document.body.style.touchAction = 'none' 
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false)
    onScrollTo(e, href)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleToggle = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState)
  }

  return {
    handleMobileClick,
    handleClose,
    handleToggle,
  }
}