let strip = neopixel.create(DigitalPin.P12, 36, NeoPixelMode.RGB)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    . # . . .
    . . # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . #
    . . . # .
    . # # . .
    `)
basic.showIcon(IconNames.Happy)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    strip.showRainbow(1, 36)
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "cam")
        huskylens.writeOSD("cam", 150, 30)
        huskylens.clearOSD()
        pins.digitalWritePin(DigitalPin.P13, 1)
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.servoWritePin(AnalogPin.P7, 0)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.servoWritePin(AnalogPin.P7, 180)
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "kagit")
        huskylens.writeOSD("kagit", 150, 30)
        huskylens.clearOSD()
        pins.digitalWritePin(DigitalPin.P14, 1)
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P8, 0)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P8, 180)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(3, "pet")
        huskylens.writeOSD("pet sise", 150, 30)
        huskylens.clearOSD()
        pins.digitalWritePin(DigitalPin.P15, 1)
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        pins.servoWritePin(AnalogPin.P9, 0)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P9, 180)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    if (huskylens.isLearned(4)) {
        strip.clear()
        huskylens.writeName(4, "atik yok")
        huskylens.writeOSD("atik yok", 150, 30)
        huskylens.clearOSD()
    }
})
