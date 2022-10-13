# IGame

Класс IGame используется, чтобы получать основную информацию об игре. Можно получить доступ с помощью `game`.

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.IGame;`

## Геттеры

| Геттер       | Что он делает?                              | Возвращаемый тип                                                              | Usage               |
| ------------ | ------------------------------------------- | ----------------------------------------------------------------------------- | ------------------- |
| biomes       | Returns all registered biomes as list       | List<[IBiomes](/Vanilla/Biomes/IBiome/)>                                      | `game.biomes`       |
| blocks       | Returns all registered blocks as list       | List<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>                   | `game.blocks`       |
| enchantments | Returns all registered enchantments as list | List<[IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/)> | `game.enchantments` |
| entities     | Returns all registered entities as list     | List<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)>               | `game.entities`     |
| items        | Returns all registered items as list        | List<[IItemDefinition](/Vanilla/Items/IItemDefinition/)>                      | `game.items`        |
| liquids      | Returns all registered liquids as list      | List<[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/)>                | `game.liquids`      |
| potions      | Returns all registered potions as list      | List<[IPotion](/Vanilla/Potions/IPotion/)>                                    | `game.potions`      |

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
