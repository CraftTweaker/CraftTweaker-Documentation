# TimeCheckLootCondition

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.TimeCheckLootCondition;
```


## Implemented Interfaces
TimeCheckLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in TimeCheckLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [TimeCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/TimeCheckLootConditionBuilder)

```zenscript
TimeCheckLootCondition.create(range as IntRange) as TimeCheckLootConditionBuilder
```

| Параметр | Тип                                    |
| -------- | -------------------------------------- |
| range    | [IntRange](/vanilla/api/loot/IntRange) |


:::

