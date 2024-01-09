# CanToolPerformActionLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.CanToolPerformActionLootCondition;
```


## Extending Record

CanToolPerformActionLootCondition extends Record. That means all methods available in Record are also available in CanToolPerformActionLootCondition

## Implemented Interfaces
CanToolPerformActionLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in CanToolPerformActionLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
CanToolPerformActionLootCondition.create(action as ToolAction) as LootConditionBuilder
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| action    | [ToolAction](/forge/api/tool/ToolAction) |


:::

