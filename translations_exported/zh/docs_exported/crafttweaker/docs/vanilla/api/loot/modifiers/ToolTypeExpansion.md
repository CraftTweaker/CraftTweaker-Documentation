# Expansion for ToolType

Additional methods for ease of modification of loot tables that interact with a certain [ToolType](/vanilla/api/tool/ToolType).

## 方法

:::group{name=addToolModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that gets broken by a tool with this tool type.

Return Type: void

```zenscript
ToolType.addToolModifier(name as string, modifier as ILootModifier) as void
```

| 参数       | 类型                                                         | 描述                             |
| -------- | ---------------------------------------------------------- | ------------------------------ |
| name     | string                                                     | The name of the loot modifier. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.      |


:::


