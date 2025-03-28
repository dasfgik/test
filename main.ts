input.onButtonPressed(Button.A, function () {
    nombre_1 += 1
    basic.showNumber(nombre_1)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(nombre_1)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.showNumber(nombre_2)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(nombre_1 + nombre_2)
    basic.pause(500)
    basic.clearScreen()
    resultat = 0
    nombre_2 = 0
    nombre_1 = 0
})
input.onButtonPressed(Button.B, function () {
    nombre_2 += 1
    basic.showNumber(nombre_2)
    basic.pause(100)
    basic.clearScreen()
})
let resultat = 0
let nombre_1 = 0
let nombre_2 = 0
nombre_2 = 0
nombre_1 = 0
