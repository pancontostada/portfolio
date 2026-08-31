import memoji from '../assets/memoji.webp'
import signature from '../assets/signature.gif'

export default function Home(){
    return(
        <main>
            <h1>Hi, my name is David</h1>
            <img src={memoji} />
            <h2>I'm a UX Designer and Researcher</h2>
            <h3>And I design to help people lead long, healthy. lives and have fun along the way</h3>
            <img src={signature} width="400px"/>
        </main>
    )
}