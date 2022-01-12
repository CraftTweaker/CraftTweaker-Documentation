# EntityHasScoreLootConditionBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.EntityHasScoreLootConditionBuilder;
```


## 已实现的接口
EntityHasScoreLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in EntityHasScoreLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

| 结果类型                                                       | 是否隐藏 |
| ---------------------------------------------------------- | ---- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true |

## 使用方式

:::group{name=withScore}

Return Type: [EntityHasScoreLootConditionBuilder](/vanilla/api/loot/condition/builder/EntityHasScoreLootConditionBuilder)

```zenscript
EntityHasScoreLootConditionBuilder.withScore(name as string, range as IntRange) as EntityHasScoreLootConditionBuilder
```

| 参数       | 类型                                     | 描述                      |
| -------- | -------------------------------------- | ----------------------- |
| name（名称） | string                                 | No Description Provided |
| range    | [IntRange](/vanilla/api/loot/IntRange) | No Description Provided |


:::


