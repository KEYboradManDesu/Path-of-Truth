ServerEvents.recipes(event => {
  //我真是sb
  event.shapeless(Item.of('tfmg:coal_coke_dust',1),
        [
            '#forge:dusts/coal_coke'
        ]
  )
  //我不到啊
  event.shapeless(Item.of('tfmg:aluminum_ingot',1),
        [
            '#forge:ingots/aluminum'
        ]
  )
})