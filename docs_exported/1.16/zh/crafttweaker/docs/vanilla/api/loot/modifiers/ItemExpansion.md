# Expansion for MCItemDefinition

Additional methods for easier modification of item-related loot tables.

## 方法

### addToolModifier

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that uses this item as a tool, such as block breaking.

Return Type: void

```zenscript
MCItemDefinition.addToolModifier(name as string, modifier as ILootModifier) as void
```

| 参数       | 类型                                                         | 描述                            |
| -------- | ---------------------------------------------------------- | ----------------------------- |
| name     | string                                                     | A name for the loot modifier. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.     |



