# TimeCheckLootConditionBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.TimeCheckLootConditionBuilder;
```


## 已实现的接口
TimeCheckLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in TimeCheckLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

| 结果类型                                                       | 是否隐藏 |
| ---------------------------------------------------------- | ---- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true |

## 使用方式

:::group{name=period}

Return Type: [TimeCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/TimeCheckLootConditionBuilder)

```zenscript
TimeCheckLootConditionBuilder.period(period as long) as TimeCheckLootConditionBuilder
```

| 参数     | 类型   | 描述                      |
| ------ | ---- | ----------------------- |
| period | long | No Description Provided |


:::


