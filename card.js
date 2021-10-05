"use strict"

const herois = [
    'Iron Man - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'Captain America - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const separarTitulo = (texto) => {
    const separador = texto.lastIndexOf("-") - 1

    const titulo = texto.substring(0, separador)

    return titulo
}

const separarTexto = (texto) => {
    const separador = texto.lastIndexOf("-") + 1
    const final = texto.lastIndexOf(".") + 1

    const text = texto.substring(separador, final)

    return text
}

const criarCard = (texto) => {
    const container = document.querySelector(".card-container")
    const novoCard = document.createElement("div")
    const title = separarTitulo(texto)
    const p = separarTexto(texto)
    novoCard.classList.add("card-item")
    novoCard.innerHTML = `

        <h2> ${title} </h2>

        <p> ${p} </p>
`

    container.appendChild(novoCard)
}

const carregarCards = (texto) => texto.forEach(criarCard)
carregarCards(herois)
