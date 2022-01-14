let Pas = 0
let Temps = 0
let Test_Chrono = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Pas = 0
    Temps = 0
    Test_Chrono = 1
    while (Test_Chrono == 1) {
        Temps += 1
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Test_Chrono = 0
})
basic.forever(function () {
    if (Pas / Temps * 60 < 0) {
        music.setVolume(255)
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (Pas / Temps * 60 > 0) {
        music.setVolume(255)
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        Pas += 1
    }
})
