# Expansion for MCBlockState

Additional methods for easier modification of block state-related loot tables.

## Metodi

:::group{name=addBlockDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addBlockLootModifier(BlockState, String, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) to the drop for this block, ignoring the current state.

Return Type: void

```zenscript
MCBlockState.addBlockDrop(uniqueId as string, stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addBlockDrops}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addBlockLootModifier(BlockState, String, ILootModifier) instead.]

Adds a list of [IItemStack](/vanilla/api/items/IItemStack)s to the drops for this block, ignoring the current state.

Return Type: void

```zenscript
MCBlockState.addBlockDrops(uniqueId as string, stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addBlockLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) to this block, ignoring the current state.

Return Type: void

```zenscript
MCBlockState.addBlockLootModifier(name as string, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                       | Descrizione                    |
| --------- | ---------------------------------------------------------- | ------------------------------ |
| nome      | string                                                     | The name of the loot modifier. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.      |


:::

:::group{name=addTargetedDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addTargetedLootModifier(BlockState, String, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) to the drops of the current block, only if it matches the current block state precisely.

Return Type: void

```zenscript
MCBlockState.addTargetedDrop(uniqueId as string, stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addTargetedDrops}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addTargetedLootModifier(BlockState, String, ILootModifier) instead.]

Adds a list of [IItemStack](/vanilla/api/items/IItemStack)s to the drops of the current block, only if it matches the current block state precisely.

Return Type: void

```zenscript
MCBlockState.addTargetedDrops(uniqueId as string, stacks as IItemStack[]) as void
```

| Parametro | Tipo                                          | Descrizione                                 |
| --------- | --------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                        | A unique identifier for this loot modifier. |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add to the drops.             |


:::

:::group{name=addTargetedLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) to the current block, only if it matches the current block state precisely.

Return Type: void

```zenscript
MCBlockState.addTargetedLootModifier(name as string, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                       | Descrizione                                  |
| --------- | ---------------------------------------------------------- | -------------------------------------------- |
| nome      | string                                                     | The name of the loot modifier.               |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block state. |


:::

:::group{name=addToolDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addToolLootModifier(BlockState, String, IItemStack, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) to the drops of this block, if it gets broken with the given tool and matches the current block state precisely.

 Parameters that may be attached the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlockState.addToolDrop(uniqueId as string, tool as IItemStack, stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| tool      | [IItemStack](/vanilla/api/items/IItemStack) | The tool the block state was broken with.   |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addToolDrops}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addToolLootModifier(BlockState, String, IItemStack, ILootModifier) instead.]

Adds a list of [IItemStack](/vanilla/api/items/IItemStack)s to the drops of this block, if it gets broken with the given tool and matches the current block state precisely.

 Parameters that may be attached the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlockState.addToolDrops(uniqueId as string, tool as IItemStack, stacks as IItemStack[]) as void
```

| Parametro | Tipo                                          | Descrizione                                 |
| --------- | --------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                        | A unique identifier for this loot modifier. |
| tool      | [IItemStack](/vanilla/api/items/IItemStack)   | The tool the block state was broken with.   |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add to the drops.             |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block state gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlockState.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                       | Descrizione                                  |
| --------- | ---------------------------------------------------------- | -------------------------------------------- |
| nome      | string                                                     | The name of the loot modifier.               |
| tool      | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block state was broken with.    |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block state. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block state gets broken with the given tool, optionally considering its damage.

 Additional parameters that may be attached to the tool, such as NBT or count, are ignored.

Return Type: void

```zenscript
MCBlockState.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, modifier as ILootModifier) as void
```

| Parametro   | Tipo                                                       | Descrizione                                                      |
| ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| nome        | string                                                     | The name of the loot modifier.                                   |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block state was broken with.                        |
| matchDamage | boolean                                                    | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block state.                     |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block state gets broken with the given tool, optionally considering its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

Return Type: void

```zenscript
MCBlockState.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier) as void
```

| Parametro   | Tipo                                                       | Descrizione                                                        |
| ----------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| nome        | string                                                     | The name of the loot modifier.                                     |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block state was broken with.                          |
| matchDamage | boolean                                                    | Whether to consider damage or not when trying to match the tool.   |
| matchNbt    | boolean                                                    | Whether to consider NBT data or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block state.                       |


:::

:::group{name=addToolTypeLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block state gets broken with a tool with the given [ToolType](/vanilla/api/tool/ToolType).

 Damage or NBT is ignored when attempting to match the tool.

Return Type: void

```zenscript
MCBlockState.addToolTypeLootModifier(name as string, toolType as ToolType, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                       | Descrizione                                               |
| --------- | ---------------------------------------------------------- | --------------------------------------------------------- |
| nome      | string                                                     | The name of the loot modifier.                            |
| toolType  | [ToolType](/vanilla/api/tool/ToolType)                     | The type of the tool the block state must be broken with. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block state.              |


:::


