# Expansion for BlockState

Additional methods for easier modification of block state-related loot tables.

## Методы

:::group{name=addBlockLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, ignoring the current state.

```zenscript
BlockState.addBlockLootModifier(name as string, modifier as ILootModifier)
```

| Параметр | Тип                                                       | Описание                       |
| -------- | --------------------------------------------------------- | ------------------------------ |
| name     | string                                                    | The name of the loot modifier. |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add.      |


:::

:::group{name=addTargetedLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to the current block, only if it matches the current block state precisely.

```zenscript
BlockState.addTargetedLootModifier(name as string, modifier as ILootModifier)
```

| Параметр | Тип                                                       | Описание                                     |
| -------- | --------------------------------------------------------- | -------------------------------------------- |
| name     | string                                                    | The name of the loot modifier.               |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block state. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block state gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

```zenscript
BlockState.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier)
```

| Параметр | Тип                                                       | Описание                                     |
| -------- | --------------------------------------------------------- | -------------------------------------------- |
| name     | string                                                    | The name of the loot modifier.               |
| tool     | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block state was broken with.    |
| modifier | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block state. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block state gets broken with the given tool, optionally considering its damage.

 Additional parameters that may be attached to the tool, such as NBT or count, are ignored.

```zenscript
BlockState.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, modifier as ILootModifier)
```

| Параметр    | Тип                                                       | Описание                                                         |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| name        | string                                                    | The name of the loot modifier.                                   |
| tool        | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block state was broken with.                        |
| matchDamage | boolean                                                   | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block state.                     |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block state gets broken with the given tool, optionally considering its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

```zenscript
BlockState.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier)
```

| Параметр    | Тип                                                       | Описание                                                           |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| name        | string                                                    | The name of the loot modifier.                                     |
| tool        | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block state was broken with.                          |
| matchDamage | boolean                                                   | Whether to consider damage or not when trying to match the tool.   |
| matchNbt    | boolean                                                   | Whether to consider NBT data or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block state.                       |


:::


