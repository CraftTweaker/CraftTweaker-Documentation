# Verzauberungsbauer

Mit diesem Paket können Sie benutzerdefinierte Verzauberungen für Werkzeuge, Waffen und wahrscheinlich alles andere erstellen.

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Eine Verzauberung erstellen

Zuallererst musst du einen Materialbauer erstellen.  
Dies kann mit der statischen Erstellungsmethode gemacht werden.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

Denken Sie daran, dass Sie die Verzauberung registrieren müssen, nachdem Sie Ihre Änderungen vorgenommen haben.  
Dies kann mit der `Registrierungsmethode` geschehen, die eine [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) der neuen Verzauberung zurückgibt.

```zenscript
myChant.register();
```

## Eigenschaften

Sie können diese Eigenschaften mit `myChant.name` setzen und erhalten.

| name             | Type                                                                               |
| ---------------- | ---------------------------------------------------------------------------------- |
| name             | string                                                                             |
| erlaubte OnBooks | bool                                                                               |
| anwendbare Slots | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (Standard: leer) |
| verflucht        | bool                                                                               |
| domain           | string (default: "contenttweaker")                                                 |
| maximaler Level  | int (Standard: 1)                                                                  |
| minLevel         | int (Standard: 1)                                                                  |
| seltenheit       | string (verwenden Sie die benutzerdefinierten Methoden)                            |
| schatz           | bool                                                                               |
| typ              | string (verwenden Sie die benutzerdefinierten Methoden)                            |

## Berechnete Eigenschaften

Sie können diese Eigenschaften-Funktionen einstellen und erhalten.

| name                       | Parameter                                                                                                                                                                                                              | Rückgabetyp |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| kann angewendet werden     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) this Verzauberung, [IItemStack](/Vanilla/Items/IItemStack/) Element                                                                            | bool        |
| canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) this Verzauberung, [IItemStack](/Vanilla/Items/IItemStack/) Element                                                                            | bool        |
| Canyoning zusammen         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/)                                                       | bool        |
| calcDamageByKreatur        | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [String]() creatureType                                                                                        | float       |
| calcEnchantabilityMin      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) this Verzauberung, [int]() level                                                                                                               | int         |
| calcEnchantabilityMax      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) this Verzauberung, [int]() level                                                                                                               | int         |
| calcModifierSchaden        | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                   | int         |
| calcTranslatedName         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) this Verzauberung, [int]() level                                                                                                               | string      |
|                            |                                                                                                                                                                                                                        |             |
| onEntityDamaged            | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) target [int]() level    | void        |
| onUserHurt                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) attacker, [int]() level | void        |

## Seltenheit und Typ

Verwenden Sie diese Methoden, um sofort benachrichtigt zu werden, wenn Sie einen Tippfehler gemacht haben.

```zenscript
//Raritäten
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Types
myChant.setTypeAll()
myChant.setTypeArmor()
myChant.setTypeFeed()
myChant.setTypeFeed() 
 myChant.setTypeFeed() 
 myChant.setTypeArmor() 
 myChant.setTypeFeed() 
 myChant.setTypeFeed() 
 myChant.setTypeFeed() 
 myChant.setRarityCommon() 
 myChant.setRarityCommon() 
 myChant.setRarityCommon() etTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setTypeDigger()
myChant.setTypeFishingRod()
myChant.setTypeBreakable()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## Beispiel

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, Füße, Beine, Kopf];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceEntity of crafttweaker. layer.IPlayer) {
        val player as crafttweaker.player. Player = Entity;
        player.foodStats.addStats(100, 10. f);
    }

};

builder.register();

builder.name = "other_chant";
builder. omain = "definitely_not_cot";
builder.calcModifierDamage = null;
builder. nUserHurt = function(thisEnch, player, attacker, level) {
    player.sendMessage("EARNED IT!");   
};
builder.register();
```