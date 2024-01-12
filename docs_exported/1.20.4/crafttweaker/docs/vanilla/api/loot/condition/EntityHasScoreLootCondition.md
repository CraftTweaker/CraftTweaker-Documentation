# EntityHasScoreLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.EntityHasScoreLootCondition;
```


## Extending Record

EntityHasScoreLootCondition extends Record. That means all methods available in Record are also available in EntityHasScoreLootCondition

## Implemented Interfaces
EntityHasScoreLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in EntityHasScoreLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [EntityHasScoreLootConditionBuilder](/vanilla/api/loot/condition/builder/EntityHasScoreLootConditionBuilder)

```zenscript
EntityHasScoreLootCondition.create(target as EntityTarget) as EntityHasScoreLootConditionBuilder
```

| Parameter |                      Type                      |
|-----------|------------------------------------------------|
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget) |


:::

