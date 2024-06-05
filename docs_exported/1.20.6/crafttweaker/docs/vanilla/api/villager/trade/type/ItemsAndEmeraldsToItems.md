# ItemsAndEmeraldsToItems

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.ItemsAndEmeraldsToItems;
```


## Implemented Interfaces
ItemsAndEmeraldsToItems implements the following interfaces. That means all methods defined in these interfaces are also available in ItemsAndEmeraldsToItems

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new ItemsAndEmeraldsToItems(fromItem as ItemCost, emeraldCost as int, toItem as ItemStack, maxUses as int, villagerXp as int, priceMultiplier as float) as ItemsAndEmeraldsToItems
new ItemsAndEmeraldsToItems(ItemCost.of(<item:minecraft:dirt>), 4, <item:minecraft:diamond>, 1, 8, 0.5);
```
|    Parameter    |                    Type                    |                                      Description                                      |
|-----------------|--------------------------------------------|---------------------------------------------------------------------------------------|
| fromItem        | [ItemCost](/vanilla/api/villager/ItemCost) | The secondary item that is being given to the villager                                |
| emeraldCost     | int                                        | The amount of the emeralds that is being given to the villager                        |
| toItem          | [ItemStack](/vanilla/api/item/ItemStack)   | The itemstack that is being sold by the villager                                      |
| maxUses         | int                                        | How many times can this trade be used                                                 |
| villagerXp      | int                                        | How much experience does this trade reward the villager                               |
| priceMultiplier | float                                      | How much the price is affected by demand, Hero of the Village, and village reputation |



