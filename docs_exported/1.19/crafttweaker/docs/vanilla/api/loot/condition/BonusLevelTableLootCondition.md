# BonusLevelTableLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.BonusLevelTableLootCondition;
```


## Implemented Interfaces
BonusLevelTableLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in BonusLevelTableLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
BonusLevelTableLootCondition.create(enchantment as Enchantment, values as float[]) as LootConditionBuilder
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |
| values      | float[]                                                  |


:::

