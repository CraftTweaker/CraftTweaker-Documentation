# Expansion for IItemStack

Additional methods for easier modification of item stack-related loot tables.

## 使用方式

:::group{name=addToolModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that uses this item as a tool, such as block breaking.

 Additional parameters that further identify the tool, such as NBT data, damage, or count, are ignored.

Return Type: void

```zenscript
IItemStack.addToolModifier(name as string, modifier as ILootModifier) as void
```

| 参数       | 类型                                                         | 描述                            |
| -------- | ---------------------------------------------------------- | ----------------------------- |
| name（名称） | string                                                     | A name for the loot modifier. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.     |


:::

:::group{name=addToolModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that uses this item as a tool, such as block breaking, optionally considering its damage.

 Additional parameters that further identify the tool, such as NBT data, or count, are ignored.

Return Type: void

```zenscript
IItemStack.addToolModifier(name as string, matchDamage as boolean, modifier as ILootModifier) as void
```

| 参数          | 类型                                                         | 描述                                                               |
| ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| name（名称）    | string                                                     | A name for the loot modifier.                                    |
| matchDamage | 布尔值                                                        | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.                                        |


:::

:::group{name=addToolModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that uses this item as a tool, such as block breaking, optionally considering its damage and count.

 Additional parameters that further identify the tool, such as NBT data, are ignored.

Return Type: void

```zenscript
IItemStack.addToolModifier(name as string, matchDamage as boolean, matchCount as boolean, modifier as ILootModifier) as void
```

| 参数          | 类型                                                         | 描述                                                                   |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| name（名称）    | string                                                     | A name for the loot modifier.                                        |
| matchDamage | 布尔值                                                        | Whether to consider damage or not when trying to match the tool.     |
| matchCount  | 布尔值                                                        | Whether to consider the amount or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.                                            |


:::

:::group{name=addToolModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) for everything that uses this item as a tool, such as block breaking, optionally considering its damage, count, and NBT data.

Return Type: void

```zenscript
IItemStack.addToolModifier(name as string, matchDamage as boolean, matchCount as boolean, matchNbt as boolean, modifier as ILootModifier) as void
```

| 参数          | 类型                                                         | 描述                                                                   |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| name（名称）    | string                                                     | A name for the loot modifier.                                        |
| matchDamage | 布尔值                                                        | Whether to consider damage or not when trying to match the tool.     |
| matchCount  | 布尔值                                                        | Whether to consider the amount or not when trying to match the tool. |
| matchNbt    | 布尔值                                                        | Whether to consider NBT data or not when trying to match the tool.   |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.                                            |


:::


