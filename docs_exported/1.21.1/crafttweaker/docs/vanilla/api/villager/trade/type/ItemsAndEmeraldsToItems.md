# ItemsAndEmeraldsToItems

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.ItemsAndEmeraldsToItems;
```


## Implemented Interfaces
ItemsAndEmeraldsToItems implements the following interfaces. That means all methods defined in these interfaces are also available in ItemsAndEmeraldsToItems

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Static Methods

:::group{name=of}

Return Type: [ItemsAndEmeraldsToItems](/vanilla/api/villager/trade/type/ItemsAndEmeraldsToItems)

```zenscript
ItemsAndEmeraldsToItems.of(fromItem as ItemCost, emeraldCost as int, toItem as ItemStack, maxUses as int, villagerXp as int, priceMultiplier as float, enchantmentProvider as ResourceKey<T>?) as ItemsAndEmeraldsToItems
```

|      Parameter      |                            Type                            | Optional |
|---------------------|------------------------------------------------------------|----------|
| fromItem            | [ItemCost](/vanilla/api/villager/ItemCost)                 | false    |
| emeraldCost         | int                                                        | false    |
| toItem              | [ItemStack](/vanilla/api/item/ItemStack)                   | false    |
| maxUses             | int                                                        | false    |
| villagerXp          | int                                                        | false    |
| priceMultiplier     | float                                                      | false    |
| enchantmentProvider | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;T&gt;? | true     |


:::

