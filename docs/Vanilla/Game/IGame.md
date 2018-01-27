# Game Class

The IGame Class is used to obtain general game information.
Can be accessed using `game`

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.game.IGame;`

## Zengetters

| Zengetter | What does it do?                        | Return Type                                                    | Usage           |
|-----------|-----------------------------------------|----------------------------------------------------------------|-----------------|
| biomes    | Returns all registered biomes as list   | List<[IBiomes](/Vanilla/Biomes/IBiome)>                        | `game.biomes`   |
| blocks    | Returns all registered blocks as list   | List<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition)>     | `game.blocks`   |
| entities  | Returns all registered entities as list | List<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition)> | `game.entities` |
| items     | Returns all registered items as list    | List<[IItemDefinition](/Vanilla/Items/IItemDefinition)>        | `game.items`    |
| liquids   | Returns all registered liquids as list  | List<[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition)>  | `game.liquids`  |
| potions   | Returns all registered potions as list  | List<[IPotion](/Vanilla/Potions/IPotion)>                      | `game.potions`  |

## Methods

### GetEntity
```
//getEntity(EntityName)

//essentially the same
val sheep = game.getEntity("sheep");
val sheep1 = <entity:minecraft:sheep>;
```

### SetLocalization

Sets the localization.   
All parameters are strings.
`game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### Localize

Returns a localized String  
`game.localize(key)`  
`game.localize(key, lang)`