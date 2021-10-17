# ILootCondition

Represents a condition on a [LootContext](/vanilla/api/loot/LootContext).

 This is effectively the same as <code>Predicate&lt;LootContext&gt;</code>.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.ILootCondition;
```


## 使用方式

:::group{name=test}

Tests the context for a set of conditions.

Returns: Whether the context passes the condition set.  
Return Type: boolean

```zenscript
ILootCondition.test(context as LootContext) as boolean
```

| 参数   | 类型                                           | 描述                  |
| ---- | -------------------------------------------- | ------------------- |
| 上下文： | [LootContext](/vanilla/api/loot/LootContext) | The context to test |


:::


