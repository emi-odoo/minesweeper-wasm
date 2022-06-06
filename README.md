# Minesweeper WASM

## Premise

This is a simple project I used to test Rust and WASM. I used Vanilla JS for writing the DOM part, no extra framework
I'm not a frontend developer and the Javascript part can be definetely better. Same thing applies to the Rust part as I just started learning it.

## What is it?

A simple recreation of the classic game, without any fancy graphic or functionality. Some features are still in WIP.

## How it works

Rust is managing all the logic of the game. JS receives a Grid instance and a pointer to cells, used to create a table.

The Grid instance implements very basic and naive functions for managing the game itself. The minefield itself if just a Vector of u8 integers, every u8 is a cell. Some bitwise operations are required to understand the status of a cell (is it a mine? is it revealed? is it flagged? how many mines are nearby?)

## Known bugs and TODOs

As this is still in WIP, a list of bugs and TODOs can be found here: [TODO.md](TODO.md)
