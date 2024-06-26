# CanItemPerformAbilityLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.CanItemPerformAbilityLootCondition;
```


## Implemented Interfaces
CanItemPerformAbilityLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in CanItemPerformAbilityLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
CanItemPerformAbilityLootCondition.create(action as ItemAbility) as LootConditionBuilder
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| action    | [ItemAbility](/neoforge/api/item/ItemAbility) |


:::

