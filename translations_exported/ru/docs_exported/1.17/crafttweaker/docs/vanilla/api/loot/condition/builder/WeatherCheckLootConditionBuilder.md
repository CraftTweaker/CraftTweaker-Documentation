# WeatherCheckLootConditionBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.WeatherCheckLootConditionBuilder;
```


## Implemented Interfaces
WeatherCheckLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in WeatherCheckLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Утилиты

| Тип результата                                             | Является неявным |
| ---------------------------------------------------------- | ---------------- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true             |

## Методы

:::group{name=raining}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.raining(raining as bool?) as WeatherCheckLootConditionBuilder
```

| Параметр | Тип   | Описание                | Optional | DefaultValue |
| -------- | ----- | ----------------------- | -------- | ------------ |
| raining  | bool? | No Description Provided | true     | true         |


:::

:::group{name=thundering}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.thundering(thundering as bool?) as WeatherCheckLootConditionBuilder
```

| Параметр   | Тип   | Описание                | Optional | DefaultValue |
| ---------- | ----- | ----------------------- | -------- | ------------ |
| thundering | bool? | No Description Provided | true     | true         |


:::


