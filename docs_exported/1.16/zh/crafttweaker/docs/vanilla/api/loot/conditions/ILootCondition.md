# ILootCondition

Represents a condition on a [LootContext](/vanilla/api/loot/LootContext).

 This is effectively the same as <code>Predicate&lt;LootContext&gt;</code>.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.ILootCondition;
```


## 方法

### test

Tests the context for a set of conditions.

Return Type: boolean

```zenscript
ILootCondition.test(context as LootContext) as boolean
```

| 参数   | 类型                                           | 描述                  |
| ---- | -------------------------------------------- | ------------------- |
| 上下文： | [LootContext](/vanilla/api/loot/LootContext) | The context to test |



