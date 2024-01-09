# DamageSourceLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.DamageSourceLootCondition;
```


## Extending Record

DamageSourceLootCondition extends Record. That means all methods available in Record are also available in DamageSourceLootCondition

## Implemented Interfaces
DamageSourceLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in DamageSourceLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
DamageSourceLootCondition.create(predicate as DamageSourcePredicateBuilder) as LootConditionBuilder
```

| Parameter |                                            Type                                             |
|-----------|---------------------------------------------------------------------------------------------|
| predicate | [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder) |


:::

