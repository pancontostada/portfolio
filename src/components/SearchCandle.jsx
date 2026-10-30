import {useEffect, useRef, useState} from 'react'
import unlit from '../assets/home/searchCandle/unlit.webp'
import flame from '../assets/home/searchCandle/flame.png'

// A four-point star with pinched sides, centered on (x, y) with radius r.
function sparklePath(x, y, r){
    const k = r * 0.12
    return `M${x} ${y - r} Q${x + k} ${y - k} ${x + r} ${y} Q${x + k} ${y + k} ${x} ${y + r} Q${x - k} ${y + k} ${x - r} ${y} Q${x - k} ${y - k} ${x} ${y - r}Z`
}

const sparkles = [
    {name: 'candle-sparkle-1', x: 1350, y: 170, r: 100},
    {name: 'candle-sparkle-2', x: 1462, y: 66, r: 44},
    {name: 'candle-sparkle-3', x: 1458, y: 262, r: 26},
]

// The Search preview, animated: a match lights the candle and the AI sparkles pop out.
// Coordinates match the 2400x1503 source image. It crops like object-cover, or with fit='contain' scales to fit
// (its background is flat #91b2e4, so a container in that color hides the letterboxing).
// The sparkles are drawn large, in the familiar AI-sparkle cluster, so the AI reference reads at a glance.
// Plays once when scrolled into view, then again each time `replay` changes, unless a play is still running.
export default function SearchCandle({replay = 0, fit = 'cover', className = ''}){

    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    const [run, setRun] = useState(0)
    const [busy, setBusy] = useState(true)
    const [seenReplay, setSeenReplay] = useState(replay)

    if(replay !== seenReplay){
        setSeenReplay(replay)
        if(!busy){
            setBusy(true)
            setRun(run + 1)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setInView(true)
                observer.disconnect()
            }
        }, {threshold: 0.5})
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return(
        <svg
            ref={ref}
            viewBox='0 0 2400 1503'
            preserveAspectRatio={fit === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'}
            aria-hidden='true'
            className={`search-candle ${inView ? '' : 'is-waiting'} ${className}`}
            onAnimationEnd={event => event.animationName === 'candle-sparkle-3' && setBusy(false)}
        >
            <defs>
                <radialGradient id='candle-glow'>
                    <stop offset='0%' stopColor='#fff6c9' stopOpacity='.9'/>
                    <stop offset='100%' stopColor='#fff6c9' stopOpacity='0'/>
                </radialGradient>
                <linearGradient id='candle-sparkle' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stopColor='#fffdf0'/>
                    <stop offset='100%' stopColor='#ffd23f'/>
                </linearGradient>
                <filter id='candle-sparkle-glow' x='-50%' y='-50%' width='200%' height='200%'>
                    <feGaussianBlur stdDeviation='10' result='blur'/>
                    <feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge>
                </filter>
            </defs>
            <image href={unlit} width='2400' height='1503'/>
            <g key={run}>
                <circle className='candle-glow' cx='1202' cy='215' r='130' fill='url(#candle-glow)'/>
                <g className='candle-flame'>
                    <image className='candle-flicker' href={flame} x='1178' y='145' width='48' height='155'/>
                </g>
                <g filter='url(#candle-sparkle-glow)'>
                    {sparkles.map(sparkle => (
                        <g key={sparkle.name} className={`candle-sparkle ${sparkle.name}`}>
                            <path className='candle-twinkle' d={sparklePath(sparkle.x, sparkle.y, sparkle.r)} fill='url(#candle-sparkle)'/>
                        </g>
                    ))}
                </g>
                <g transform='translate(1212 256)'>
                    <g className='candle-match'>
                        <g transform='rotate(28)'>
                            <rect x='6' y='-7' width='330' height='14' rx='4' fill='#e9c891' stroke='#c79d5f' strokeWidth='2'/>
                            <ellipse cx='8' cy='0' rx='20' ry='15' fill='#b3352b'/>
                        </g>
                        <path className='candle-flicker' d='M6 -6 C-12 -24 -8 -46 6 -72 C20 -46 24 -24 6 -6 Z' fill='#ffd36b' stroke='#ffefb0' strokeWidth='4'/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
