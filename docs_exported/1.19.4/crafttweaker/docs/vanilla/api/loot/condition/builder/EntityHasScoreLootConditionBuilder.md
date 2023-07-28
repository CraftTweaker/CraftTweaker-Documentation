# EntityHasScoreLootConditionBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.EntityHasScoreLootConditionBuilder;
```


## Implemented Interfaces
EntityHasScoreLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in EntityHasScoreLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

|                        Result Type                         | Is Implicit |
|------------------------------------------------------------|-------------|
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true        |

## Methods

:::group{name=withScore}

Return Type: [EntityHasScoreLootConditionBuilder](/vanilla/api/loot/condition/builder/EntityHasScoreLootConditionBuilder)

```zenscript
EntityHasScoreLootConditionBuilder.withScore(name as string, range as IntRange) as EntityHasScoreLootConditionBuilder
```

| Parameter |                  Type                  |
|-----------|----------------------------------------|
| name      | string                                 |
| range     | [IntRange](/vanilla/api/loot/IntRange) |


:::


