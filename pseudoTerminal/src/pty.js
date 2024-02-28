import {fork,IPty} from 'node-pty';

const SHELL = "bash";

class TerminalManager{
    constructor(){
        this.sessions = {}; 
    }

    createPty(id,replId,onData) {
        let term = fork(SHELL,[],{
            cols:100,
            name:'xterm',
            cwd:'/workspace'
        });

        term.on('data',(data)=> onData(data,term.pid));
        this.sessions[id] = {
            terminal: term,
            replId
        };
        term.on('exit',()=>{
            delete this.sessions[term.pid];
        });

        return term;
    }

    write(terminalId,data){
        if(this.sessions[terminalId]){
            this.sessions[terminalId].terminal.write(data);
        }
    }

    clear(terminalId){
        if(this.sessions[terminalId]){
            this.sessions[terminalId].terminal.kill();
            delete this.sessions[terminalId];
        }
    }
}

export {TerminalManager};