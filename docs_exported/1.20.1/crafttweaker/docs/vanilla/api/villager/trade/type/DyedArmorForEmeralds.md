# DyedArmorForEmeralds

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.type.DyedArmorForEmeralds;
```


## Implemented Interfaces
DyedArmorForEmeralds implements the following interfaces. That means all methods defined in these interfaces are also available in DyedArmorForEmeralds

- [ItemListing](/vanilla/api/villager/trade/ItemListing)

## Constructors


```zenscript
new DyedArmorForEmeralds(item as ItemDefinition, value as int) as DyedArmorForEmeralds
new DyedArmorForEmeralds(<item:minecraft:leather_chestplate>, 16);
```
| Parameter |                        Type                        |                           Description                            |
|-----------|----------------------------------------------------|------------------------------------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager, dyed a random color |
| value     | int                                                | How many emeralds will this trade cost                           |



```zenscript
new DyedArmorForEmeralds(item as ItemDefinition, value as int, maxUses as int, villagerXp as int) as DyedArmorForEmeralds
new DyedArmorForEmeralds(<item:minecraft:leather_chestplate>, 16, 8, 2);
```
| Parameter  |                        Type                        |                           Description                            |
|------------|----------------------------------------------------|------------------------------------------------------------------|
| item       | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The Item that is being sold by the villager, dyed a random color |
| value      | int                                                | How many emeralds will this trade cost                           |
| maxUses    | int                                                | How many times can this trade be used                            |
| villagerXp | int                                                | How much experience does this trade reward the villager          |



