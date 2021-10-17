# ILootCondition

Represents a condition on a [LootContext](/vanilla/api/loot/LootContext).

 This is effectively the same as <code>Predicate&lt;LootContext&gt;</code>.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.ILootCondition;
```


## Методы

:::group{name=test}

Tests the context for a set of conditions.

Returns: Whether the context passes the condition set.  
Return Type: boolean

```zenscript
ILootCondition.test(context as LootContext) as boolean
```

| Параметр | Тип                                          | Описание            |
| -------- | -------------------------------------------- | ------------------- |
| контекст | [LootContext](/vanilla/api/loot/LootContext) | The context to test |


:::


