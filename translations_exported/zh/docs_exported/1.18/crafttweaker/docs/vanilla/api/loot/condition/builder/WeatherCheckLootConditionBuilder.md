# WeatherCheckLootConditionBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.WeatherCheckLootConditionBuilder;
```


## 已实现的接口
WeatherCheckLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in WeatherCheckLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Casters

| 结果类型                                                       | 是否隐藏 |
| ---------------------------------------------------------- | ---- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true |

## 使用方式

:::group{name=raining}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.raining(raining as bool?) as WeatherCheckLootConditionBuilder
```

| 参数      | 类型    | 描述                      | 可选   | DefaultValue |
| ------- | ----- | ----------------------- | ---- | ------------ |
| raining | bool? | No Description Provided | true | true         |


:::

:::group{name=thundering}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.thundering(thundering as bool?) as WeatherCheckLootConditionBuilder
```

| 参数         | 类型    | 描述                      | 可选   | DefaultValue |
| ---------- | ----- | ----------------------- | ---- | ------------ |
| thundering | bool? | No Description Provided | true | true         |


:::


