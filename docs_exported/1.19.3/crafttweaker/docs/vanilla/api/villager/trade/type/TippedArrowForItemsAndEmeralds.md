# TippedArrowForItemsAndEmeralds

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.TippedArrowForItemsAndEmeralds;
```


## Implemented Interfaces
TippedArrowForItemsAndEmeralds implements the following interfaces. That means all methods defined in these interfaces are also available in TippedArrowForItemsAndEmeralds

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new TippedArrowForItemsAndEmeralds(fromItem as ItemDefinition, fromCount as int, toItem as ItemDefinition, toCount as int, emeraldCost as int, maxUses as int, villagerXp as int) as TippedArrowForItemsAndEmeralds
new TippedArrowForItemsAndEmeralds(<item:minecraft:diamond>, 8, <item:minecraft:diamond>, 1, 2, 8, 2);
```
|  Parameter  |                        Type                        |                                         Description                                         |
|-------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| fromItem    | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager, that will have a random potion effect attached |
| fromCount   | int                                                | The amount of the Item being sold to the villager                                           |
| toItem      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager                                                 |
| toCount     | int                                                | The amount of the item that is being sold by the villager                                   |
| emeraldCost | int                                                | How many emeralds will be given to the villager                                             |
| maxUses     | int                                                | How many times can this trade be used                                                       |
| villagerXp  | int                                                | How much experience does this trade reward the villager                                     |



