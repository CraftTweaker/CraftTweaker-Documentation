# BasicItemListing

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.BasicItemListing;
```


## Implemented Interfaces
BasicItemListing implements the following interfaces. That means all methods defined in these interfaces are also available in BasicItemListing

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new BasicItemListing(price as ItemStack, price2 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as BasicItemListing
new BasicItemListing(<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>, 8, 2, 0.05);
```
| Parameter |                   Type                   |                                      Description                                      |
|-----------|------------------------------------------|---------------------------------------------------------------------------------------|
| price     | [ItemStack](/vanilla/api/item/ItemStack) | The primary Item that is being given to the villager                                  |
| price2    | [ItemStack](/vanilla/api/item/ItemStack) | The secondary item that is being given to the villager                                |
| forSale   | [ItemStack](/vanilla/api/item/ItemStack) | The Item that is being sold by the villager                                           |
| maxTrades | int                                      | How many times can this trade be used                                                 |
| xp        | int                                      | How much experience does this trade reward the villager                               |
| priceMult | float                                    | How much the price is affected by demand, Hero of the Village, and village reputation |



