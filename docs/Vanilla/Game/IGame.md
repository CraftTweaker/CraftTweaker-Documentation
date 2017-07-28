# Game Class

The IGame Class is used to obtain general game information.
Can be accessed using `game`

## Zengetters

| Zengetter | What does it do?                        | Return Type              | Usage           |
|-----------|-----------------------------------------|--------------------------|-----------------|
| items     | Returns all registered items as list    | List<IItemDefinition>    | `game.items`    |
| blocks    | Returns all registered blocks as list   | List<IBlockDefinition>   | `game.blocks`   |
| liquids   | Returns all registered liquids as list  | List<ILiquidDefinition>  | `game.liquids`  |
| biomes    | Returns all registered biomes as list   | List<IBiomes>            | `game.biomes`   |
| entities  | Returns all registered entities as list | List<IEntitiyDefinition> | `game.entities` |
| locked    | Retrurns if the skript is locked or not | boolean                  | `game.locked`   |

## Methods

### GetEntity
```
//getEntity(EntityName)

//essentially the same
val sheep = game.getEntity("sheep");
val sheep1 = <entity:sheep>;
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

### Lock
Locks the game, so skripts can no longer be reloaded.  
Only applicable prior to CT 1.12 as CT 1.12 does no longer support reloads.