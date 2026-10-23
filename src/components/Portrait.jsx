import { people } from '../participants'

function BackHair({style, color}){
    if(style === 'curlyLong') return(
        <g fill={color}>
            <circle cx='50' cy='38' r='24'/>
            <circle cx='31' cy='52' r='11'/><circle cx='69' cy='52' r='11'/>
            <circle cx='30' cy='65' r='9'/><circle cx='70' cy='65' r='9'/>
        </g>
    )
    if(style === 'curlyShort') return(
        <g fill={color}>
            <circle cx='50' cy='36' r='24'/>
            <circle cx='30' cy='46' r='12'/><circle cx='70' cy='46' r='12'/>
            <circle cx='32' cy='60' r='9'/><circle cx='68' cy='60' r='9'/>
            <circle cx='38' cy='20' r='10'/><circle cx='62' cy='20' r='10'/>
        </g>
    )
    if(style === 'bob') return <path fill={color} d='M28 46 C26 22 40 17 50 17 C60 17 74 22 72 46 L73 64 Q73 70 67 70 L33 70 Q27 70 27 64 Z'/>
    if(style === 'bun') return <circle fill={color} cx='50' cy='16' r='10'/>
    return null
}

function FrontHair({style, color}){
    if(style === 'bald') return null
    if(style === 'cap') return(
        <g>
            <path fill='#b8bcc2' d='M31 36 C31 20 40 16 50 16 C60 16 69 20 69 36 Z'/>
            <path fill='#e9eaec' d='M33 29 C36 21 44 18 50 18 C56 18 64 21 67 29 Z'/>
            <path fill='#3b6e8f' d='M41 25 L58 23 L55 27 Z'/>
            <path fill='#9ea3aa' d='M29 34 L71 34 L75 38.5 L25 38.5 Z'/>
        </g>
    )
    if(style === 'bob') return <path fill={color} d='M32 42 C32 26 40 21 50 21 C60 21 68 26 68 42 C62 34 56 32 50 33 C44 32 38 34 32 42 Z'/>
    if(style === 'curlyLong' || style === 'curlyShort') return(
        <g fill={color}>
            <circle cx='38' cy='30' r='8'/><circle cx='50' cy='26' r='9'/><circle cx='62' cy='30' r='8'/>
        </g>
    )
    // short, pulledBack and bun share a close cap
    return <path fill={color} d='M32 44 C30 25 40 20 50 20 C60 20 70 25 68 44 C66 34 60 29 50 29 C40 29 34 34 32 44 Z'/>
}

// Draws a participant from their entry in participants.js.
export default function Portrait({person, className = ''}){

    const p = people[person]

    return(
        <svg viewBox='0 0 100 100' aria-hidden='true' className={className}>
            <rect width='100' height='100' fill={p.bg}/>
            <BackHair style={p.hairStyle} color={p.hair}/>
            <path fill={p.shirt} d='M14 100 C14 80 30 72 50 72 C70 72 86 80 86 100 Z'/>
            <rect x='43' y='58' width='14' height='16' rx='4' fill={p.skin}/>
            <rect x='43' y='58' width='14' height='8' fill='#000' opacity='.12'/>
            {p.necklace && <path d='M43 76 Q50 86 57 76' stroke='#d8d8d8' strokeWidth='1.2' fill='none'/>}
            <circle cx='33' cy='46' r='4' fill={p.skin}/>
            <circle cx='67' cy='46' r='4' fill={p.skin}/>
            <ellipse cx='50' cy='44' rx='17' ry='20' fill={p.skin}/>
            {p.stubble && <path fill='#000' opacity='.1' d='M34 48 C35 60 42 64 50 64 C58 64 65 60 66 48 C62 56 56 58 50 58 C44 58 38 56 34 48 Z'/>}
            {p.beard && <path fill={p.beard} d='M33 45 C33 60 41 66 50 66 C59 66 67 60 67 45 C64 53 60 54 57 54 C55 52 45 52 43 54 C40 54 36 53 33 45 Z'/>}
            <FrontHair style={p.hairStyle} color={p.hair}/>
            <path d='M40 40 L46 39.4 M54 39.4 L60 40' stroke={p.hairStyle === 'bald' ? '#1c1512' : p.hair} strokeWidth='1.6' strokeLinecap='round' opacity='.85'/>
            <circle cx='43' cy='45' r='1.8' fill='#1d1d1f'/>
            <circle cx='57' cy='45' r='1.8' fill='#1d1d1f'/>
            {p.smile
                ? <path d='M43 54 Q50 60 57 54 Z' fill='#fff' stroke='#5b2b22' strokeWidth='1.2' strokeLinejoin='round'/>
                : <path d='M45 55 Q50 57.5 55 55' stroke={p.beard ? '#5b2b22' : '#9a4f42'} strokeWidth='1.5' fill='none' strokeLinecap='round'/>}
            {p.glasses && (
                <g fill='none' stroke={p.glasses} strokeWidth='1.6'>
                    <rect x='36.5' y='41' width='12' height='9' rx='3'/>
                    <rect x='51.5' y='41' width='12' height='9' rx='3'/>
                    <path d='M48.5 45 L51.5 45'/>
                </g>
            )}
            {(p.headphones || p.headset) && (
                <g>
                    <path d='M30 46 C28 18 72 18 70 46' stroke='#2b2b30' strokeWidth='3' fill='none'/>
                    <rect x='26' y='40' width='7' height='13' rx='3' fill='#2b2b30'/>
                    <rect x='67' y='40' width='7' height='13' rx='3' fill='#2b2b30'/>
                </g>
            )}
            {p.headset && <path d='M30 52 Q34 61 43 59' stroke='#2b2b30' strokeWidth='1.8' fill='none' strokeLinecap='round'/>}
        </svg>
    )
}
