# TreasureMapForEmeralds

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.TreasureMapForEmeralds;
```


## Implemented Interfaces
TreasureMapForEmeralds implements the following interfaces. That means all methods defined in these interfaces are also available in TreasureMapForEmeralds

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Static Methods

:::group{name=create}

Creates a new TreasureMapForEmeralds trade

Returns: A new TreasureMapForEmeralds  
Return Type: [TreasureMapForEmeralds](/vanilla/api/villager/trade/type/TreasureMapForEmeralds)

```zenscript
// TreasureMapForEmeralds.create(emeraldCost as int, destination as ResourceLocation, displayName as string, destinationType as MapDecorationType, maxUses as int, villagerXp as int) as TreasureMapForEmeralds

TreasureMapForEmeralds.create(1, <resource:minecraft:ruined_portal>, "Ruined Portal", <constant:minecraft:world/map/decorationtype:mansion>, 16, 2);
```

|    Parameter    |                             Type                              |                       Description                       |
|-----------------|---------------------------------------------------------------|---------------------------------------------------------|
| emeraldCost     | int                                                           | How many emeralds should the map cost                   |
| destination     | [ResourceLocation](/vanilla/api/resource/ResourceLocation)    | What should the map lead the player to                  |
| displayName     | string                                                        | The name of the map                                     |
| destinationType | [MapDecorationType](/vanilla/api/world/map/MapDecorationType) | The type of destination t                               |
| maxUses         | int                                                           | How many times this trade can be used                   |
| villagerXp      | int                                                           | How much experience does this trade reward the villager |


:::

