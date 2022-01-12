# AlternativeLootConditionBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.AlternativeLootConditionBuilder;
```


## 已实现的接口
AlternativeLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in AlternativeLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

| 结果类型                                                       | 是否隐藏 |
| ---------------------------------------------------------- | ---- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true |

## 使用方式

:::group{name=or}

Return Type: [AlternativeLootConditionBuilder](/vanilla/api/loot/condition/builder/AlternativeLootConditionBuilder)

```zenscript
AlternativeLootConditionBuilder.or(condition as LootConditionBuilder) as AlternativeLootConditionBuilder
```

| 参数        | 类型                                                                               | 描述                      |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| condition | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) | No Description Provided |


:::


