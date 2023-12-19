'use client'

import { useState } from "react";

export default function LocalSession() {
    const [input1, setInput1] = useState<string>('')
    const [p1, setP1] = useState<string | null>('')

    const [input2, setInput2] = useState<string>('')
    const [p2, setP2] = useState<string | null>('')

    function setSessionStorage() {
        sessionStorage.setItem("SessionStorage", input1);
    }

    function getSessionStorage() {
        setP1(sessionStorage.getItem("SessionStorage"))
    }

    function deleteSessionStorage() {
        sessionStorage.removeItem("SessionStorage")
    }

    function setLocalStorage() {
        localStorage.setItem("LocalStorage", input2);
    }

    function getLocalStorage() {
        setP2(localStorage.getItem("LocalStorage"))
    }

    function deleteLocalStorage() {
        localStorage.removeItem("LocalStorage")
    }

    return (
        <div className="m-4">

            <h1 className="text-2xl">LocalStorage e SessionStorage</h1>

            <p>
                O modo mais conhecido e mais simples de armazenar dados, introduzido no html5. Permite o armazenamento de textos no navegador do usuário com um limite de até 5MB na maiorias dos navegadores
            </p>

            <div>
                <h2 className="text-xl mt-2">
                    SessionStorage
                </h2>
                <p>
                    Permite o armazenamento de dados na SESSÃO do usuário (aba). Quando a aba é fechado, os dados serão removidos
                </p>
                <input type='text' placeholder="Digite algo aqui" className="border-2 border-black" onChange={(e) => { setInput1(e.target.value) }}></input>
                <button value='setItem' onClick={setSessionStorage} className='border-2 border-black ml-2 rounded-md'>SetSessionItem</button>
            </div>
            <div className="mt-4">
                <button value='setItem' onClick={getSessionStorage} className='border-2 border-black rounded-md mr-2'>GetSessionItem</button>
                {p1}
            </div>
            <div className="mt-4">
                <button value='deleteItem' onClick={deleteSessionStorage} className='border-2 border-black rounded-md mr-2'>DeleteSessionItem</button>
            </div>

            <div>
                <h2 className="text-xl mt-2">
                    LocalStorage
                </h2>
                <p>
                    Similar ao sessionStorage, com a diferença de que seus dados salvos não irão expirar ao fechar a aba/janela
                </p>
                <input type='text' placeholder="Digite algo aqui" className="border-2 border-black" onChange={(e) => { setInput2(e.target.value) }}></input>
                <button value='setItem' onClick={setLocalStorage} className='border-2 border-black ml-2 rounded-md'>SetLocalItem</button>
            </div>
            <div className="mt-4">
                <button value='setItem' onClick={getLocalStorage} className='border-2 border-black rounded-md mr-2'>GetLocalItem</button>
                {p2}
            </div>
            <div className="mt-4">
                <button value='deleteItem' onClick={deleteLocalStorage} className='border-2 border-black rounded-md mr-2'>DeleteLocalItem</button>
            </div>

        </div>
    )
}