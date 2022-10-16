# LocationCheckLootCondition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LocationCheckLootCondition;
```


## 已实现的接口
LocationCheckLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in LocationCheckLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder) as LootConditionBuilder
```

| 参数        | 类型                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder, offset as BlockPos) as LootConditionBuilder
```

| 参数        | 类型                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |
| offset    | [BlockPos](/vanilla/api/util/math/BlockPos)                                         |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LocationCheckLootCondition.create(predicate as LocationPredicateBuilder, xOffset as int, yOffset as int, zOffset as int) as LootConditionBuilder
```

| 参数        | 类型                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |
| xOffset   | int                                                                                 |
| yOffset   | int                                                                                 |
| zOffset   | int                                                                                 |


:::

