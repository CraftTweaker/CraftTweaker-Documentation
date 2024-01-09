# EntityPropertyLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.EntityPropertyLootCondition;
```


## Extending Record

EntityPropertyLootCondition extends Record. That means all methods available in Record are also available in EntityPropertyLootCondition

## Implemented Interfaces
EntityPropertyLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in EntityPropertyLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
EntityPropertyLootCondition.create(target as EntityTarget) as LootConditionBuilder
```

| Parameter |                      Type                      |
|-----------|------------------------------------------------|
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget) |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
EntityPropertyLootCondition.create(target as EntityTarget, predicate as EntityPredicateBuilder) as LootConditionBuilder
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget)                                  |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

