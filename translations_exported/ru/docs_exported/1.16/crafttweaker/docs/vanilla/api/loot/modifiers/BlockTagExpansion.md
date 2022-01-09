# Expansion for MCTag&lt;MCBlock&gt;

Additional methods for easier modification of loot tables of blocks contained in tags.

## Методы

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) to all the blocks contained in this tag, with the given name.

Return Type: void

```zenscript
MCTag.addLootModifier(name as string, modifier as ILootModifier) as void
```

| Параметр | Тип                                                        | Описание                              |
| -------- | ---------------------------------------------------------- | ------------------------------------- |
| name     | string                                                     | The name of the loot modifier to add. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.             |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if any of the blocks contained in this tag gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCTag.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier) as void
```

| Параметр | Тип                                                        | Описание                                                         |
| -------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| name     | string                                                     | The name of the loot modifier.                                   |
| tool     | [IItemStack](/vanilla/api/items/IItemStack)                | The tool one of the blocks contained in the tag was broken with. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block tag.                       |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if any of the blocks contained in this tag gets broken with the given tool, optionally considering its damage.

 Additional parameters that may be attached to the tool, such as NBT or count, are ignored.

Return Type: void

```zenscript
MCTag.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, modifier as ILootModifier) as void
```

| Параметр    | Тип                                                        | Описание                                                         |
| ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| name        | string                                                     | The name of the loot modifier.                                   |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool one of the blocks contained in the tag was broken with. |
| matchDamage | boolean                                                    | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block tag.                       |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if any of the blocks contained in this tag gets broken with the given tool, optionally considering its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

Return Type: void

```zenscript
MCTag.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier) as void
```

| Параметр    | Тип                                                        | Описание                                                           |
| ----------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| name        | string                                                     | The name of the loot modifier.                                     |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool one of the blocks contained in the tag was broken with.   |
| matchDamage | boolean                                                    | Whether to consider damage or not when trying to match the tool.   |
| matchNbt    | boolean                                                    | Whether to consider NBT data or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block tag.                         |


:::

:::group{name=addToolTypeLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if any of the blocks contained in this tag gets broken with a tool with the given [ToolType](/vanilla/api/tool/ToolType).

 Damage or NBT is ignored when attempting to match the tool.

Return Type: void

```zenscript
MCTag.addToolTypeLootModifier(name as string, toolType as ToolType, modifier as ILootModifier) as void
```

| Параметр | Тип                                                        | Описание                                                                          |
| -------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| name     | string                                                     | The name of the loot modifier.                                                    |
| toolType | [ToolType](/vanilla/api/tool/ToolType)                     | The type of the tool one of the blocks contained in this tag must be broken with. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block tag.                                        |


:::


