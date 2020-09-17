# Зачарованный строитель

С помощью этого пакета вы можете создавать свои чары для инструментов, оружия и, вероятно, всего остального.

## Импорт класса

Возможно, вам потребуется импортировать класс, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Создание чара

Прежде всего, вам нужно будет создать конструктор материалов.  
Это можно сделать с помощью статического метода создания.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

Помните, что вам нужно зарегистрировать чары после того, как вы сделали свои изменения.  
Это может быть сделано методом `регистра` , который вернет [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) нового зачарования.

```zenscript
myChant.register();
```

## Свойства

Вы можете установить и получить эти свойства с помощью `myChant.name`.

| name                 | Тип                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------- |
| name                 | string                                                                                   |
| Разрешенные OnBooks  | bool                                                                                     |
| применимые Слоты     | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (по умолчанию: пустой) |
| проклятие            | bool                                                                                     |
| домен                | string (default: "contenttweaker")                                                       |
| максимальный уровень | int (по умолчанию: 1)                                                                    |
| minLevel             | int (по умолчанию: 1)                                                                    |
| редкость             | строка (используйте пользовательские методы ниже)                                        |
| сокровище            | bool                                                                                     |
| type                 | строка (используйте пользовательские методы ниже)                                        |

## Вычисляемые свойства

Вы можете задать и получить эти свойства функций.

| имя                         | параметры                                                                                                                                                                                                                         | Возвращаемый тип |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| висит                       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) предмет                                                                                         | bool             |
| CanApplyAtAtplyEnchantTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) предмет                                                                                         | bool             |
| канплей вместе              | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                            | bool             |
| Повреждённое существо       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() уровень, [String]() creatureType                                                                                                 | float            |
| calcEnchantabilityMin       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() уровень                                                                                                                          | int              |
| calcEnchantabilityMax       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() уровень                                                                                                                          | int              |
| Модификатор кальция         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() уровень, [IDamageSource](/Vanilla/Damage/IDamageSource/) повреждения                                                             | int              |
| calcTranslatedName          | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() уровень                                                                                                                          | string           |
|                             |                                                                                                                                                                                                                                   |                  |
| onEntityповрежден           | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) пользователь, [IEntity](/Vanilla/Entities/IEntity/) цель, [int]() уровень      | void             |
| onUserHurt                  | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) пользователь, [IEntity](/Vanilla/Entities/IEntity/) атакующий, [int]() уровень | void             |

## Редкость и тип

Используйте эти методы для мгновенного оповещения, если вы сделали опечатку.

```zenscript
//Rarities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Типы
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
 myChant.setTypeWearable()
```

## Пример

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker. layer.IPlayer) {
        val player as crafttweaker.player. Игрок = сущность;
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