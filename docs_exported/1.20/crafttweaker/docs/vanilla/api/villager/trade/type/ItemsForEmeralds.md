# ItemsForEmeralds

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.ItemsForEmeralds;
```


## Implemented Interfaces
ItemsForEmeralds implements the following interfaces. That means all methods defined in these interfaces are also available in ItemsForEmeralds

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new ItemsForEmeralds(item as ItemDefinition, emeraldCost as int, numberOfItems as int, villagerXp as int) as ItemsForEmeralds
new ItemsForEmeralds(<item:minecraft:diamond>, 2, 4, 2);
```
|   Parameter   |                        Type                        |                       Description                       |
|---------------|----------------------------------------------------|---------------------------------------------------------|
| item          | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager             |
| emeraldCost   | int                                                | How many emeralds will be given to the villager         |
| numberOfItems | int                                                | The amount of the Item being sold to the villager       |
| villagerXp    | int                                                | How much experience does this trade reward the villager |



```zenscript
new ItemsForEmeralds(block as Block, emeraldCost as int, numberOfItems as int, maxUses as int, villagerXp as int) as ItemsForEmeralds
new ItemsForEmeralds(<block:minecraft:dirt>, 2, 4, 8, 2);
```
|   Parameter   |               Type                |                       Description                       |
|---------------|-----------------------------------|---------------------------------------------------------|
| block         | [Block](/vanilla/api/block/Block) | The Block that is being sold by the villager            |
| emeraldCost   | int                               | How many emeralds will be given to the villager         |
| numberOfItems | int                               | The amount of the Block being sold to the villager      |
| maxUses       | int                               | How many times can this trade be used                   |
| villagerXp    | int                               | How much experience does this trade reward the villager |



```zenscript
new ItemsForEmeralds(itemStack as ItemStack, emeraldCost as int, numberOfItems as int, maxUses as int, villagerXp as int, priceMultiplier as float) as ItemsForEmeralds
new ItemsForEmeralds(<item:minecraft:diamond>, 2, 4, 8, 2, 0.05);
```
|    Parameter    |                   Type                   |                                      Description                                      |
|-----------------|------------------------------------------|---------------------------------------------------------------------------------------|
| itemStack       | [ItemStack](/vanilla/api/item/ItemStack) | The Item that is being sold by the villager                                           |
| emeraldCost     | int                                      | How many emeralds will be given to the villager                                       |
| numberOfItems   | int                                      | The amount of the Item being sold to the villager                                     |
| maxUses         | int                                      | How many times can this trade be used                                                 |
| villagerXp      | int                                      | How much experience does this trade reward the villager                               |
| priceMultiplier | float                                    | How much the price is affected by demand, Hero of the Village, and village reputation |



