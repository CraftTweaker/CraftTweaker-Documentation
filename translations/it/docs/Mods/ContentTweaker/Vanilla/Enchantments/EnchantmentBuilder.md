# Costruttore Incantesimi

Utilizzando questo pacchetto è possibile creare incantesimi personalizzati per strumenti, armi e probabilmente tutto il resto.

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Creare un Incantesimo

Prima di tutto dovrai creare un Material Builder.  
Questo può essere fatto usando il metodo di creazione statica.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

Ricordate, che dovrete registrare l'incanto dopo aver fatto le modifiche.  
Questo può essere fatto con il metodo `register` che restituirà una [Definizione IEnchantment](/Vanilla/Enchantments/IEnchantmentDefinition/) del nuovo incantesimo.

```zenscript
myChant.register();
```

## Proprietà

È possibile impostare e ottenere queste proprietà utilizzando `myChant.name`.

| nome            | Tipo                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| nome            | stringa                                                                                |
| allowedOnBooks  | bool                                                                                   |
| applicabileSlot | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (predefinito: vuoto) |
| maledizione     | bool                                                                                   |
| dominio         | string (default: "contenttweaker")                                                     |
| maxLevel        | int (predefinito: 1)                                                                   |
| minLevel        | int (predefinito: 1)                                                                   |
| rarità          | stringa (usa i metodi personalizzati qui sotto)                                        |
| tesoro          | bool                                                                                   |
| tipo            | stringa (usa i metodi personalizzati qui sotto)                                        |

## Proprietà Calcolate

È possibile impostare e ottenere queste funzioni proprietà.

| nome                       | parametri                                                                                                                                                                                                              | Tipo Di Reso |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| canApplica                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) item                                                                                 | bool         |
| canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) item                                                                                 | bool         |
| canApplyTogether           | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                 | bool         |
| calcDamageByCreature       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [String]() creatureType                                                                                        | galleggiante |
| calcEnchantabilityMin      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int          |
| calcEnchantabilityMax      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int          |
| calcModifierDamage         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                   | int          |
| calcTranslatedName         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | stringa      |
|                            |                                                                                                                                                                                                                        |              |
| onEntityDamaged            | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) target, [int]() level   | vuoto        |
| onUserHurt                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) uter, [IEntity](/Vanilla/Entities/IEntity/) attacker, [int]() level | vuoto        |

## Rarità e tipo

Usa questi metodi per essere immediatamente avvisati se hai fatto un tiro.

```zenscript
//Rarities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Types
myChant.setTypeAll()
myChant.setTypeArmor()
myChant.setTypeFeed()
myChant. etTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setTypeDigger()
myChant.setTypeFishingRod()
myChant.setTypeBreakable()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## Esempio

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, gambe, petto, testa];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker. layer.IPlayer) {
        val player as crafttweaker.player. Giocatore = entità;
        giocatore.foodStats.addStats(100, 10. f);
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