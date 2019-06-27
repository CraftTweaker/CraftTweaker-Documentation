# Enchantment Builder

Using this package you can create custom enchantments for tools, weapons and probably everything else.

## Importing the class

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Creating an Enchant

First and foremost you will need to create a Material Builder.  
This can be done using the static create method.

    //mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
    val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
    

Remember, that you will need to register the enchantment after you've done your changes.  
This can be done with the `register` method which will return a [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) of the new enchantment.

    myChant.register();
    

## Properties

You can set and get these properties using `myChant.name`.

| name            | Type                                                                               |
| --------------- | ---------------------------------------------------------------------------------- |
| name            | string                                                                             |
| allowedOnBooks  | bool                                                                               |
| applicableSlots | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (default: empty) |
| curse           | bool                                                                               |
| domain          | string (default: "contenttweaker")                                                 |
| maxLevel        | int (default: 1)                                                                   |
| minLevel        | int (default: 1)                                                                   |
| rarity          | string (use the custom methods below)                                              |
| treasure        | bool                                                                               |
| type            | string (use the custom methods below)                                              |

## Calculated Properties

You can set and get these properties functions.

| name                       | parameters                                                                                                                                                                                                             | Return Type |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| canApply                   | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) item                                                                                 | bool        |
| canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) item                                                                                 | bool        |
| canApplyTogether           | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                 | bool        |
| calcDamageByCreature       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [String]() creatureType                                                                                        | float       |
| calcEnchantabilityMin      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int         |
| calcEnchantabilityMax      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int         |
| calcModifierDamage         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                   | int         |
| calcTranslatedName         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | string      |
|                            |                                                                                                                                                                                                                        |             |
| onEntityDamaged            | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) target, [int]() level   | void        |
| onUserHurt                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) attacker, [int]() level | void        |

## Rarity and Type

Use these methods to be instantly notified if you made a typo.

    //Rarities
    myChant.setRarityCommon()
    myChant.setRarityUncommon()
    myChant.setRarityRare()
    myChant.setRarityVeryRare()
    
    //Types
    myChant.setTypeAll()
    myChant.setTypeArmor()
    myChant.setTypeFeed()
    myChant.setTypeLegs()
    myChant.setTypeChest()
    myChant.setTypeHead()
    myChant.setTypeWeapon()
    myChant.setTypeDigger()
    myChant.setTypeFishingRod()
    myChant.setTypeBreakable()
    myChant.setTypeBow()
    myChant.setTypeWearable()
    

## Example

    #loader contenttweaker
    val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
    builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
    builder.setTypeAll();
    builder.setRarityVeryRare();
    builder.calcModifierDamage = function(thisEnch, level, damageSource){
        return level;
    };
    
    builder.onUserHurt = function(thisEnch, entity, attacker, level) {
        entity.health = entity.maxHealth;
        if(entity instanceof crafttweaker.player.IPlayer) {
            val player as crafttweaker.player.IPlayer = entity;
            player.foodStats.addStats(100, 10.0f);
        }
    
    };
    
    builder.register();
    
    builder.name = "other_chant";
    builder.domain = "definitely_not_cot";
    builder.calcModifierDamage = null;
    builder.onUserHurt = function(thisEnch, player, attacker, level) {
        player.sendMessage("EARNED IT!");   
    };
    builder.register();