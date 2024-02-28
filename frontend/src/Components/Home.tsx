import { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const buttonclickHandler=()=>{
        navigate('/project')
    }
    useEffect(() => {
        const textAnimate = () => {
            const inner = document.querySelector<HTMLDivElement>("#inner");
            const innerRect = inner?.getBoundingClientRect();
            const innerHeight = (innerRect) ? innerRect?.bottom - innerRect?.top : null;
            const text1 = document.querySelector<HTMLParagraphElement>("#text1");
            const text2 = document.querySelector<HTMLParagraphElement>("#text2");
            const content = document.querySelector<HTMLDivElement>("#content");
            const startButton = document.querySelector<HTMLButtonElement>("#start");
            const k = 20;
            
            if (!inner || !innerRect || !text1 || !text2 || !content || !startButton) return;

            text1.style.fontSize = `${60 + (window.scrollY / k)}px`;
            text2.style.fontSize = `${24 + (window.scrollY / k)}px`;
            content.style.opacity = `${1 - (window.scrollY / (k * 15))}`;

            if (window.scrollY >= 10) {
                startButton.classList.remove(...startButton.classList);
                startButton.classList.add("py-3","px-2","text-lg","font-semibold","rounded-2xl","opacity-0");
            } else {
                startButton.classList.remove(...startButton.classList);
                startButton.classList.add("py-3","px-2","text-lg","font-semibold","rounded-2xl","opacity-100");
            }
            if (innerHeight) {
                if (window.scrollY >= 0 && window.scrollY <= innerHeight) {
                    inner.classList.remove(...inner.classList);
                    inner.classList.add("h-lvh","w-lvw","flex","justify-center","items-center","fixed","top-0");
                } else if (window.scrollY >= innerHeight) {
                    inner.classList.remove(...inner.classList);
                    inner.classList.add("h-lvh","w-lvw","flex","justify-center","items-center","relative","top-[100vh]");
                } else {
                    inner.classList.remove(...inner.classList);
                    inner.classList.add("h-lvh","w-lvw","flex","justify-center","items-center","relative","top-0");
                }
            }
        };

        document.addEventListener("scroll", textAnimate);
        return () => document.removeEventListener("scroll", textAnimate);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div id="outer" className="h-[200vh] w-lvw relative bg-black text-white">
                <BackgroundBeams/>
                <div id="inner" className="h-lvh w-lvw flex justify-center items-center">
                    <div id="content" className="flex flex-col gap-7 items-center">
                        <p id="text1" className="text-6xl">Idea to software, fast</p>
                        <p id="text2" className="text-2xl text-center">Build software collaboratively with the power of AI, on any 
                        <br/>
                        device, without spending a second on setup</p>
                        <button id="start" onClick={buttonclickHandler} style={{ boxShadow: "1px 1px 20px blue, -1px -1px 20px blue" }} className="py-3 px-2 text-lg font-semibold rounded-2xl cursor-pointer">Start Creating</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;