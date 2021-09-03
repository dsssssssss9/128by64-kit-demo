input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix16x16(`
        # # # # # # # # # # # # # # # #
        # . . . . . . . . . . . . . . #
        # . # # # # # # # # # # # # . #
        # . # . . . . . . . . . . # . #
        # . # . # # # # # # # # . # . #
        # . # . # . . . . . . # . # . #
        # . # . # . # # # # . # . # . #
        # . # . # . # . . # . # . # . #
        # . # . # . # . . # . # . # . #
        # . # . # . # # # # . # . # . #
        # . # . # . . . . . . # . # . #
        # . # . # # # # # # # # . # . #
        # . # . . . . . . . . . . # . #
        # . # # # # # # # # # # # # . #
        # . . . . . . . . . . . . . . #
        # # # # # # # # # # # # # # # #
        `), 0, 0)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix16x16(`
        # # # # # # # # # # # # # # # #
        # . . . . . . . . . . . . . . #
        # . # # # # # # # # # # # # . #
        # . # . . . . . . . . . . # . #
        # . # . # # # # # # # # . # . #
        # . # . # . . . . . . # . # . #
        # . # . # . # # # # . # . # . #
        # . # . # . # . . # . # . # . #
        # . # . # . # . . # . # . # . #
        # . # . # . # # # # . # . # . #
        # . # . # . . . . . . # . # . #
        # . # . # # # # # # # # . # . #
        # . # . . . . . . . . . . # . #
        # . # # # # # # # # # # # # . #
        # . . . . . . . . . . . . . . #
        # # # # # # # # # # # # # # # #
        `), 0, 15)
    kitronik_VIEW128x64.refresh()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 63; index++) {
        for (let index2 = 0; index2 <= 127; index2++) {
            kitronik_VIEW128x64.setPixelbuffer(index2, index)
        }
    }
    kitronik_VIEW128x64.refresh()
})
basic.showIcon(IconNames.Happy)
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.invert(kitronik_VIEW128x64.onOff(false))
basic.forever(function () {
	
})
