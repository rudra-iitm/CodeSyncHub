import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        const inner = document.querySelector("#inner");
        const innerRect = inner?.getBoundingClientRect() ? inner.getBoundingClientRect() : null;
        const innerHeight = (innerRect?.bottom && innerRect?.top) ? innerRect.bottom - innerRect.top : 0;
        const text1 = document.querySelector("#text1");
        const text2 = document.querySelector("#text2");
        const content = document.querySelector("#content");
        const k = 20;
        const textAnimate = () => {
            text1.style.fontSize = (60+(window.scrollY/(k)))+"px";
            text2.style.fontSize = (24+(window.scrollY/(k)))+"px";
            content.style.opacity = 1-(window.scrollY/(k*15));
            if (window.scrollY >= 10) {
                document.querySelector("#start").style.opacity = 0;
            } else {
                document.querySelector("#start").style.opacity = 1;
            }
            if (window.scrollY >= 0 && window.scrollY <= innerHeight) {
                inner.style.position = "fixed";
                inner.style.top = "0px";
            }
            else if (window.scrollY >= innerHeight) {
                inner.style.position = "relative";
                inner.style.top = "100vh";
            }
            else {
                inner.style.position = "relative";
                inner.style.top = "0px";
            }
        }
        document.addEventListener("scroll", textAnimate);
        return () => document.removeEventListener("scroll",textAnimate);
    },[])
    return (
        <div className="overflow-x-hidden">
            <div id="outer" className="h-[200vh] w-lvw relative">
                <div id="inner" className="h-lvh w-lvw flex justify-center items-center">
                    <div id="content" className="flex  flex-col gap-7 items-center">
                        <p id="text1" className="text-6xl">Idea to software, fast</p>
                        <p id="text2" className="text-2xl text-center">Build software collaboratively with the power of AI, on any 
                        <br/>
                        device, without spending a second on setup</p>
                        <button id="start" style={{boxShadow: "1px 1px 20px blue, -1px -1px 20px blue"}} className="py-3 px-2 text-lg font-semibold rounded-2xl">Start Creating</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home