# RandomChanceLootCondition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.RandomChanceLootCondition;
```


## 已实现的接口
RandomChanceLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in RandomChanceLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
RandomChanceLootCondition.create(probability as float) as LootConditionBuilder
```

| 参数          | 类型    |
| ----------- | ----- |
| probability | float |


:::

