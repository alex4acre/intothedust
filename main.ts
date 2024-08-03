enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (invincible || jump <= 4) {
        jump = jump + 1
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (!(invincible)) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (!(invincible)) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    invincible = true
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 400), music.PlaybackMode.LoopingInBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    pause(5000)
    music.play(music.stringPlayable("- - - - - - - - ", 400), music.PlaybackMode.LoopingInBackground)
    invincible = false
})
let projectile: Sprite = null
let jump = 0
let invincible = false
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level2`)
let foodsprite = sprites.create(img`
    ..............eeeeeee...........
    ............ee455662e2e.........
    ..........ee45556723e2688.......
    .........e46776677232e777668....
    ........e46745554772227776778...
    .......4448744444777766777678...
    ......4522e7777776777766676668..
    .....4523227766722e666eeeee888..
    ....455232e76672322e4555dddd48..
    ...44567777554623e455ddddddddd4.
    ...e66774554477e455dddd55554dd44
    ..e46777444677e55dd55555d55dddd4
    ..e5668677666e5dd555555555555dde
    .e45544e8776e5d555554555555555de
    .e554eeee66e5d5555d55555dddd54de
    .e55ee44fee5d5d555555d5d5dddddde
    e454eeeefe45d55555555555dd4ddde.
    e5e4eefffe5d55555555d5555dddde..
    e5ee4eeff45d555555555555dddde...
    e5eeeeffe5d55d555d5555d5ddde....
    e5ffefeee5d55545555555ddd4e.....
    e5ffffffe545555555d5d4ddee......
    e54efeff45d55d55555dddde........
    e5eeeffe5dd5555545dddee.........
    e4eeefff5d5555d55ddde...........
    e4efefff5d5d55555d4e............
    .e4efffe5d555555dee.............
    .e54eeee5d545dd4e...............
    ..e554ee5dddddee................
    ...ee5544dddee..................
    .....eeeeeee....................
    ................................
    `, SpriteKind.Food)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e b b b b b e . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . b . . e e e . e f f f . . 
    . . . . . . e e e . . f b . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e . e e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . b b . . b b . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 . . . . . 
    . . . . 2 . . . . 4 4 . . . . . 
    . . . . 2 4 . . 4 5 4 . . . . . 
    . . . . . 2 4 d 5 5 4 . . . . . 
    . . . . . 2 5 5 5 5 4 . . . . . 
    . . . . . . 2 5 5 5 5 4 . . . . 
    . . . . . . 2 5 4 2 4 4 . . . . 
    . . . . . . 4 4 . . 2 4 4 . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mysprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 . . . . . 
    . . . . 2 . . . . 4 4 . . . . . 
    . . . . 2 4 . . 4 5 4 . . . . . 
    . . . . . 2 4 d 5 5 4 . . . . . 
    . . . . . 2 5 5 5 5 4 . . . . . 
    . . . . . . 2 5 5 5 5 4 . . . . 
    . . . . . . 2 5 4 2 4 4 . . . . 
    . . . . . . 4 4 . . 2 4 4 . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let MySpite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 . . . . . 
    . . . . 2 . . . . 4 4 . . . . . 
    . . . . 2 4 . . 4 5 4 . . . . . 
    . . . . . 2 4 d 5 5 4 . . . . . 
    . . . . . 2 5 5 5 5 4 . . . . . 
    . . . . . . 2 5 5 5 5 4 . . . . 
    . . . . . . 2 5 4 2 4 4 . . . . 
    . . . . . . 4 4 . . 2 4 4 . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
tiles.placeOnRandomTile(mysprite3, assets.tile`myTile0`)
tiles.placeOnRandomTile(MySpite4, assets.tile`myTile0`)
tiles.placeOnRandomTile(foodsprite, assets.tile`myTile1`)
mySprite.ay = 500
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
animation.setAction(mySprite, ActionKind.Walking)
game.onUpdateInterval(5000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mysprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MySpite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
    tiles.placeOnRandomTile(mysprite3, assets.tile`myTile0`)
    tiles.placeOnRandomTile(MySpite4, assets.tile`myTile0`)
})
game.onUpdateInterval(500, function () {
    if (invincible) {
        mySprite.startEffect(effects.confetti)
    } else {
        mySprite.startEffect(effects.none)
    }
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, randint(-100, 100), randint(-100, 100))
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mysprite3, randint(-100, 100), randint(-100, 100))
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, MySpite4, randint(-100, 100), randint(-100, 100))
    if (0 == mySprite.vy) {
        jump = 0
    }
})
