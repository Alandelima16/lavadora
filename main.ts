input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Hello!")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(15000)
    basic.showLeds(`
        # . # . .
        # . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . # . .
        # . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(4000)
    basic.showLeds(`
        # . # . .
        # . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(10000)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(6000)
    basic.showString("end of cycle")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Bye")
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        . . . . .
        `)
})
