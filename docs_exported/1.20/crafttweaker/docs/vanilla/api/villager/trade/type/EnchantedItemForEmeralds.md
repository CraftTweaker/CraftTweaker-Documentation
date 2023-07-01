# EnchantedItemForEmeralds

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.EnchantedItemForEmeralds;
```


## Implemented Interfaces
EnchantedItemForEmeralds implements the following interfaces. That means all methods defined in these interfaces are also available in EnchantedItemForEmeralds

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new EnchantedItemForEmeralds(item as ItemDefinition, baseEmeraldCost as int, maxUses as int, villagerXp as int) as EnchantedItemForEmeralds
new EnchantedItemForEmeralds(<item:minecraft:diamond_axe>, 5, 8, 2);
```
|    Parameter    |                        Type                        |                          Description                          |
|-----------------|----------------------------------------------------|---------------------------------------------------------------|
| item            | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager                   |
| baseEmeraldCost | int                                                | The base cost of the trade before any multipliers are applied |
| maxUses         | int                                                | How many times can this trade be used                         |
| villagerXp      | int                                                | How much experience does this trade reward the villager       |



```zenscript
new EnchantedItemForEmeralds(item as ItemDefinition, baseEmeraldCost as int, maxUses as int, villagerXp as int, priceMultiplier as float) as EnchantedItemForEmeralds
new EnchantedItemForEmeralds(<item:minecraft:diamond_axe>, 5, 8, 2, 0.05);
```
|    Parameter    |                        Type                        |                                      Description                                      |
|-----------------|----------------------------------------------------|---------------------------------------------------------------------------------------|
| item            | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager                                           |
| baseEmeraldCost | int                                                | The base cost of the trade before any multipliers are applied                         |
| maxUses         | int                                                | How many times can this trade be used                                                 |
| villagerXp      | int                                                | How much experience does this trade reward the villager                               |
| priceMultiplier | float                                              | How much the price is affected by demand, Hero of the Village, and village reputation |



