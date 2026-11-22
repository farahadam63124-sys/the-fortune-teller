controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fortuneTeller.sayText("Hmm... let me see...", 600, false)
    pause(1500)
    game.showLongText(fortunes[randint(0, fortunes.length - 1)], DialogLayout.Bottom)
})
let fortunes: string[] = []
let fortuneTeller: Sprite = null
fortuneTeller = sprites.create(img`
    . . . . . f f f f f . . . . . 
    . . . f f f 4 4 4 f f f . . . 
    . . f f 4 4 4 4 4 4 4 f f . . 
    . f f 4 4 4 4 4 4 4 4 4 f f . 
    f f 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 d 4 4 4 4 d 4 4 4 f f 
    f f 4 4 d 4 4 4 4 d 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 f 4 4 f 4 4 4 4 f f 
    . f f 4 4 f f f f 4 4 f f . . 
    . . f f 4 4 4 4 4 4 f f . . . 
    . . . f f f f f f f f . . . . 
    `, SpriteKind.Player)
fortunes = [
"Great luck ahead!",
"Ask again later...",
"Beware of Monday!",
"Yes, definitely!",
"A surprise awaits you",
"Trust your gut",
"Not looking good...",
"Fortune favors you!"
]
game.splash("Press A for your fortune!")
