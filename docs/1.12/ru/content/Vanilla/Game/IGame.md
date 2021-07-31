# IGame

Класс IGame используется, чтобы получать основную информацию об игре. Можно получить доступ с помощью `game`.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.game.IGame;`

## Геттеры

| Zengetter \--- | Что он делает?                              | Возвращаемый тип                                                              | Использование       |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------- | ------------------- |
| biomes         | Returns all registered biomes as list       | List<[IBiomes](/Vanilla/Biomes/IBiome/)>                                      | `game.biomes`       |
| blocks         | Returns all registered blocks as list       | List<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>                   | `game.blocks`       |
| entities       | Returns all registered entities as list     | List<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)>               | `game.entities`     |
| items          | Returns all registered items as list        | List<[IItemDefinition](/Vanilla/Items/IItemDefinition/)>                      | `game.items`        |
| liquids        | Returns all registered liquids as list      | List<[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/)>                | `game.liquids`      |
| potions        | Returns all registered potions as list      | List<[IPotion](/Vanilla/Potions/IPotion/)>                                    | `game.potions`      |
| enchantments   | Returns all registered enchantments as list | List<[IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/)> | `game.enchantments` |

## Методы

### getEntity

```zenscript
//getEntity(EntityName)

//essentially the same
val sheep = game.getEntity("sheep");
val sheep1 = <entity:minecraft:sheep>;
```

### setLocalization

Sets the localization.  
All parameters are strings. `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### localize

Returns a localized String  
`game.localize(key)`  
`game.localize(key, lang)`