# BasicTradeListing

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.BasicTradeListing;
```


## Implemented Interfaces
BasicTradeListing implements the following interfaces. That means all methods defined in these interfaces are also available in BasicTradeListing

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new BasicTradeListing(emeralds as int, forSale as ItemStack, maxTrades as int, xp as int) as BasicTradeListing
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| emeralds  | int                                      |
| forSale   | [ItemStack](/vanilla/api/item/ItemStack) |
| maxTrades | int                                      |
| xp        | int                                      |



```zenscript
new BasicTradeListing(price as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as BasicTradeListing
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| price     | [ItemStack](/vanilla/api/item/ItemStack) |
| forSale   | [ItemStack](/vanilla/api/item/ItemStack) |
| maxTrades | int                                      |
| xp        | int                                      |
| priceMult | float                                    |



```zenscript
new BasicTradeListing(price as ItemStack, price2 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as BasicTradeListing
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| price     | [ItemStack](/vanilla/api/item/ItemStack) |
| price2    | [ItemStack](/vanilla/api/item/ItemStack) |
| forSale   | [ItemStack](/vanilla/api/item/ItemStack) |
| maxTrades | int                                      |
| xp        | int                                      |
| priceMult | float                                    |



## Methods

:::group{name=getForSale}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// BasicTradeListing.getForSale() as ItemStack

myBasicTradeListing.getForSale();
```

:::

:::group{name=getMaxTrades}

Return Type: int

```zenscript
// BasicTradeListing.getMaxTrades() as int

myBasicTradeListing.getMaxTrades();
```

:::

:::group{name=getPrice}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// BasicTradeListing.getPrice() as ItemStack

myBasicTradeListing.getPrice();
```

:::

:::group{name=getPrice2}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// BasicTradeListing.getPrice2() as ItemStack

myBasicTradeListing.getPrice2();
```

:::

:::group{name=getPriceMult}

Return Type: float

```zenscript
// BasicTradeListing.getPriceMult() as float

myBasicTradeListing.getPriceMult();
```

:::

:::group{name=getXp}

Return Type: int

```zenscript
// BasicTradeListing.getXp() as int

myBasicTradeListing.getXp();
```

:::


## Properties

|   Name    |                   Type                   | Has Getter | Has Setter |
|-----------|------------------------------------------|------------|------------|
| forSale   | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| maxTrades | int                                      | true       | false      |
| price     | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| price2    | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| priceMult | float                                    | true       | false      |
| xp        | int                                      | true       | false      |

