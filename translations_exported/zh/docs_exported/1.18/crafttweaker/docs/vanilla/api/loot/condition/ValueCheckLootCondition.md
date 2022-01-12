# ValueCheckLootCondition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.ValueCheckLootCondition;
```


## 已实现的接口
ValueCheckLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in ValueCheckLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
ValueCheckLootCondition.create(provider as NumberProvider, range as IntRange) as LootConditionBuilder
```

| 参数       | 类型                                                 | 描述                      |
| -------- | -------------------------------------------------- | ----------------------- |
| provider | [NumberProvider](/vanilla/api/loot/NumberProvider) | No Description Provided |
| range    | [IntRange](/vanilla/api/loot/IntRange)             | No Description Provided |


:::

