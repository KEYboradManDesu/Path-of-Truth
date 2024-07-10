ServerEvents.recipes(event => {
  //下界合金
  event.remove({ id: 'minecraft:netherite_ingot' })
  event.recipes.create.mixing(['netherite_ingot'], [Fluid.of('tfmg:napalm',500),'#forge:ingots/gold','#forge:ingots/gold','#forge:ingots/gold','#forge:ingots/gold','minecraft:netherite_scrap','minecraft:netherite_scrap','minecraft:netherite_scrap','minecraft:netherite_scrap']).superheated()

  //烈焰蛋糕
  event.remove({ id: 'create:compacting/blaze_cake' })
  event.remove({ id: 'create:filling/blaze_cake' })
  event.recipes.create.compacting(['create:blaze_cake_base'], ['minecraft:sugar','irons_spellbooks:cinder_essence','#forge:plates/horizonite']).heated()
  event.recipes.create.filling('create:blaze_cake',[Fluid.of('tfmg:gasoline',1000),'create:blaze_cake_base'])

  //多彩化合物
  event.remove({ id: 'createchromaticreturn:chromatic_compound_recipe' })
  event.shapeless(
    Item.of('createchromaticreturn:chromatic_compound',1),
    [
      'kubejs:buran',
      'kubejs:midnight'
    ]
  )

  //移除一些原有配方
  event.remove({ id: 'createchromaticreturn:bedrock_shard_crushing' })
  event.remove({ id: 'createchromaticreturn:andesite_component_recipe' })
  event.remove({ id: 'createchromaticreturn:brass_component_recipe' })
  event.remove({ input: 'createchromaticreturn:andesite_component' })
  event.remove({ input: 'createchromaticreturn:brass_component' })

  //环境枪
  event.shapeless(
    Item.of('create:handheld_worldshaper',1),
    [
      'createchromaticreturn:industrium_charm',
      'createchromaticreturn:shadow_charm',
      'createchromaticreturn:refined_charm',
      'createchromaticreturn:multiplite_charm',
      'createchromaticreturn:silkstrum_charm',
      'createchromaticreturn:antiplite_charm'
    ]
  )

  //终极锭
  event.remove({ id: 'createchromaticreturn:shadow_steel_recipe' })
  event.remove({ id: 'createchromaticreturn:industrium_recipe' })
  event.remove({ id: 'createchromaticreturn:durasteel_recipe' })
  
  event.remove({id:'createchromaticreturn:refined_radiance_recipe'})
  event.remove({id:'createchromaticreturn:silkstrum_recipe'})
  event.remove({id:'createchromaticreturn:glowing_ingot_recipe'})

  event.remove({ id: 'createchromaticreturn:industrium_book_recipe' })
  event.remove({ id: 'createchromaticreturn:durasteel_book_recipe' })
  event.remove({id:'createchromaticreturn:silkstrum_book_recipe'})
  
  event.remove({id:'createchromaticreturn:multiplite_recipe'})
  event.remove({id:'createchromaticreturn:antiplite_recipe'})

  event.recipes.create.mixing(['createchromaticreturn:industrium_ingot'], ['createchromaticreturn:shadow_steel','create:deployer','create:mechanical_arm','immersiveengineering:powerpack','tfmg:large_radial_engine']).superheated()
  event.recipes.create.sequenced_assembly([
    Item.of('createchromaticreturn:industrium_book').withChance(10.0),
    Item.of('book').withChance(90.0)
    ], 'immersiveengineering:manual', [
    event.recipes.createDeploying('kubejs:incomplete_industrium_book', ['kubejs:incomplete_industrium_book', '#forge:plates/plastic']),
    event.recipes.createFilling('kubejs:incomplete_industrium_book', ['kubejs:incomplete_industrium_book', Fluid.of('create_enchantment_industry:hyper_experience',500)]),
    event.recipes.createDeploying('kubejs:incomplete_industrium_book', ['kubejs:incomplete_industrium_book', 'createchromaticreturn:industrium_ingot']),
    event.recipes.createFilling('kubejs:incomplete_industrium_book', ['kubejs:incomplete_industrium_book', Fluid.of('create_enchantment_industry:ink',500)]),
    event.recipes.createDeploying('kubejs:incomplete_industrium_book', ['kubejs:incomplete_industrium_book', '#forge:plates/plastic'])
  ]).transitionalItem('kubejs:incomplete_industrium_book').loops(10)

  event.recipes.create.compacting(['createchromaticreturn:durasteel_ingot'], ['createchromaticreturn:shadow_steel','#forge:storage_blocks/froststeel','#forge:storage_blocks/steel','#forge:storage_blocks/iron','#forge:storage_blocks/cast_iron','#blue_skies:storage_blocks/horizonite','#forge:storage_blocks/netherite']).superheated()
  event.recipes.create.sequenced_assembly([
    Item.of('createchromaticreturn:durasteel_book').withChance(10.0),
    Item.of('book').withChance(90.0)
    ], 'immersiveengineering:manual', [
    event.recipes.createDeploying('kubejs:incomplete_durasteel_book', ['kubejs:incomplete_durasteel_book', '#forge:plates/obsidian']),
    event.recipes.createFilling('kubejs:incomplete_durasteel_book', ['kubejs:incomplete_durasteel_book', Fluid.of('create_enchantment_industry:hyper_experience',500)]),
    event.recipes.createDeploying('kubejs:incomplete_durasteel_book', ['kubejs:incomplete_durasteel_book', 'createchromaticreturn:durasteel_ingot']),
    event.recipes.createFilling('kubejs:incomplete_durasteel_book', ['kubejs:incomplete_durasteel_book', Fluid.of('create_enchantment_industry:ink',500)]),
    event.recipes.createDeploying('kubejs:incomplete_durasteel_book', ['kubejs:incomplete_durasteel_book', '#forge:plates/obsidian'])
  ]).transitionalItem('kubejs:incomplete_durasteel_book').loops(10)

  //魔法侧终极锭修改
  //光辉石
  event.shaped(Item.of('createchromaticreturn:refined_radiance',1),
        [' A ',
        'BCD',
        ' E '],
        {
            A:'irons_spellbooks:lesser_spell_slot_upgrade',
            B:'irons_spellbooks:arcane_ingot',
            C:'createchromaticreturn:chromatic_compound',
            D:'irons_spellbooks:shriving_stone',
            E:'irons_spellbooks:upgrade_orb'
        }
    )
  
})