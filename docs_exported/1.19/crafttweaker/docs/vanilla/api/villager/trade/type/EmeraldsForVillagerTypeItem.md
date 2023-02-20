# EmeraldsForVillagerTypeItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.EmeraldsForVillagerTypeItem;
```


## Implemented Interfaces
EmeraldsForVillagerTypeItem implements the following interfaces. That means all methods defined in these interfaces are also available in EmeraldsForVillagerTypeItem

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Static Methods

:::group{name=create}

Creates a new EmeraldsForVillagerTypeItem trade

Returns: A new EmeraldsForVillagerTypeItem  
Return Type: [EmeraldsForVillagerTypeItem](/vanilla/api/villager/trade/type/EmeraldsForVillagerTypeItem)

```zenscript
// EmeraldsForVillagerTypeItem.create(cost as int, maxUses as int, villagerXp as int, trades as IItemStack[VillagerType]) as EmeraldsForVillagerTypeItem

EmeraldsForVillagerTypeItem.create(1, 16, 2, {<villagertype:minecraft:desert>: <item:minecraft:sand>, <villagertype:minecraft:plains>: <item:minecraft:dirt>});
```

| Parameter  |                                              Type                                              |                                                       Description                                                        |
|------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| cost       | int                                                                                            | How many emeralds should the map cost                                                                                    |
| maxUses    | int                                                                                            | How many times this trade can be used                                                                                    |
| villagerXp | int                                                                                            | How much experience does this trade reward the villager                                                                  |
| trades     | [IItemStack](/vanilla/api/item/IItemStack)[[VillagerType](/vanilla/api/villager/VillagerType)] | A map of [VillagerType](/vanilla/api/villager/VillagerType) to [ItemDefinition](/vanilla/api/item/ItemDefinition) trades |


:::

