# BlockStatePropertyLootConditionBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.BlockStatePropertyLootConditionBuilder;
```


## 已实现的接口
BlockStatePropertyLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in BlockStatePropertyLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

| 结果类型                                                       | 是否隐藏 |
| ---------------------------------------------------------- | ---- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true |

## 使用方式

:::group{name=properties}

Return Type: [BlockStatePropertyLootConditionBuilder](/vanilla/api/loot/condition/builder/BlockStatePropertyLootConditionBuilder)

```zenscript
BlockStatePropertyLootConditionBuilder.properties(predicate as StatePropertiesPredicateBuilder) as BlockStatePropertyLootConditionBuilder
```

| 参数        | 类型                                                                                                | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) | No Description Provided |


:::


