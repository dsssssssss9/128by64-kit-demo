input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.writeImageOLED(list, 0, 0)
    kitronik_VIEW128x64.refresh()
})
let list: Image = null
basic.showIcon(IconNames.Yes)
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
list = [
0,
1,
2,
3,
4,
5,
6,
7
]
basic.forever(function () {
	
})
