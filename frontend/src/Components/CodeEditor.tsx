import { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'; // Import jQuery UI

const CodeEditor = () => {
    const resizableDivRef = useRef(null);

    useEffect(() => {
        if (resizableDivRef.current) {
        $(resizableDivRef.current).resizable(); // Initialize resizable
        }
    }, []);
    return (
        <div ref={resizableDivRef} className="w-3/5 flex-grow bg-blue-600"></div>
    )
}

export default CodeEditor