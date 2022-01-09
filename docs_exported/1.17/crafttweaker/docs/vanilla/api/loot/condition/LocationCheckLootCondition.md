# LocationCheckLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LocationCheckLootCondition;
```


## Implemented Interfaces
LocationCheckLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in LocationCheckLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder) as LootConditionBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) | No Description Provided |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder, offset as BlockPos) as LootConditionBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) | No Description Provided |
| offset | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder, xOffset as int, yOffset as int, zOffset as int) as LootConditionBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) | No Description Provided |
| xOffset | int | No Description Provided |
| yOffset | int | No Description Provided |
| zOffset | int | No Description Provided |


:::

