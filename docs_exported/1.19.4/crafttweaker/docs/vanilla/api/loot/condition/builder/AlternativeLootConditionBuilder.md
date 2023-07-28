# AlternativeLootConditionBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.AlternativeLootConditionBuilder;
```


## Implemented Interfaces
AlternativeLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in AlternativeLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

|                        Result Type                         | Is Implicit |
|------------------------------------------------------------|-------------|
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true        |

## Methods

:::group{name=or}

Return Type: [AlternativeLootConditionBuilder](/vanilla/api/loot/condition/builder/AlternativeLootConditionBuilder)

```zenscript
AlternativeLootConditionBuilder.or(condition as LootConditionBuilder) as AlternativeLootConditionBuilder
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| condition | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::


