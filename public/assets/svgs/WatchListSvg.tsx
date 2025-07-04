import { IconProps } from '@/types/IconProps'
import React from 'react'

const WatchListSvg = ({ className }: IconProps) => {
    return (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.81367 9.28927C5.39278 6.82045 7.32045 4.89278 9.78927 4.31367C11.5722 3.89544 13.4278 3.89544 15.2107 4.31367C17.6796 4.89277 19.6072 6.82045 20.1863 9.28928C20.6046 11.0722 20.6046 12.9278 20.1863 14.7107C19.6072 17.1796 17.6796 19.1072 15.2107 19.6863C13.4278 20.1046 11.5722 20.1046 9.78928 19.6863C7.32045 19.1072 5.39278 17.1796 4.81367 14.7107C4.39544 12.9278 4.39544 11.0722 4.81367 9.28927Z" stroke="currentColor" strokeWidth="1.33333" />
            <path d="M2.5 11C1.99997 17 4.99998 20.5 8.49998 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.6618 10.8707C15.4461 11.3726 15.4461 12.6274 14.6618 13.1293L12.0147 14.8233C11.2304 15.3253 10.25 14.6979 10.25 13.694L10.25 10.306C10.25 9.30214 11.2304 8.67473 12.0147 9.17665L14.6618 10.8707Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>

    )
}

export default WatchListSvg