# Expansion for MCBlock

Additional methods for easier modification of block-related loot tables.

## Methods

:::group{name=addDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addLootModifier(Block, String, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) as a drop for this block.

Return Type: void

```zenscript
MCBlock.addDrop(uniqueId as string, stack as IItemStack) as void
```

| Parameter | Type                                        | Description                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addDrops}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addLootModifier(Block, String, ILootModifier) instead.]

Adds a list of [IItemStack](/vanilla/api/items/IItemStack)s as drops for this block.

Return Type: void

```zenscript
MCBlock.addDrops(uniqueId as string, stacks as IItemStack[]) as void
```

| Parameter | Type                                          | Description                                 |
| --------- | --------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                        | A unique identifier for this loot modifier. |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add to the drops.             |


:::

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) to this block, with the given name.

Return Type: void

```zenscript
MCBlock.addLootModifier(name as string, modifier as ILootModifier) as void
```

| Parameter | Type                                                       | Description                           |
| --------- | ---------------------------------------------------------- | ------------------------------------- |
| name      | string                                                     | The name of the loot modifier to add. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add.             |


:::

:::group{name=addStateDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addStateLootModifier(Block, String, Consumer, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) to the drops of this block if it matches the state outlined in the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

Return Type: void

```zenscript
MCBlock.addStateDrop(uniqueId as string, statePredicate as Consumer<StatePropertiesPredicate>, stack as IItemStack) as void
```

| Parameter      | Type                                                                                                    | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| uniqueId       | string                                                                                                  | A unique identifier for this loot modifier.                                                                                           |
| statePredicate | Consumer&lt;[StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)&gt; | A consumer to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) to identify the target state. |
| stack          | [IItemStack](/vanilla/api/items/IItemStack)                                                             | The stack to add to the drops.                                                                                                        |


:::

:::group{name=addStateLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) to this block, firing only if it matches the state outlined in the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

Return Type: void

```zenscript
MCBlock.addStateLootModifier(name as string, statePredicate as Consumer<StatePropertiesPredicate>, modifier as ILootModifier) as void
```

| Parameter      | Type                                                                                                    | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| name           | string                                                                                                  | The name of the loot modifier to add.                                                                                                 |
| statePredicate | Consumer&lt;[StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)&gt; | A consumer to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) to identify the target state. |
| modifier       | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)                                              | The loot modifier to add.                                                                                                             |


:::

:::group{name=addToolDrop}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addToolLootModifier(Block, String, IItemStack, ILootModifier) instead.]

Adds an [IItemStack](/vanilla/api/items/IItemStack) to the drops of this block, if it gets broken with the given tool.

 Parameters that may be attached the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlock.addToolDrop(uniqueId as string, tool as IItemStack, stack as IItemStack) as void
```

| Parameter | Type                                        | Description                                 |
| --------- | ------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                      | A unique identifier for this loot modifier. |
| tool      | [IItemStack](/vanilla/api/items/IItemStack) | The tool the block was broken with.         |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add to the drops.              |


:::

:::group{name=addToolDrops}

::deprecated[Scheduled for removal in 1.17: use [this](.)#addToolLootModifier(Block, String, IItemStack, ILootModifier) instead.]

Adds a list of [IItemStack](/vanilla/api/items/IItemStack)s to the drops of this block, if it gets broken with the given tool.

 Parameters that may be attached the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlock.addToolDrops(uniqueId as string, tool as IItemStack, stacks as IItemStack[]) as void
```

| Parameter | Type                                          | Description                                 |
| --------- | --------------------------------------------- | ------------------------------------------- |
| uniqueId  | string                                        | A unique identifier for this loot modifier. |
| tool      | [IItemStack](/vanilla/api/items/IItemStack)   | The tool the block was broken with.         |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add to the drops.             |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
MCBlock.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier) as void
```

| Parameter | Type                                                       | Description                            |
| --------- | ---------------------------------------------------------- | -------------------------------------- |
| name      | string                                                     | The name of the loot modifier.         |
| tool      | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block was broken with.    |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block gets broken with the given tool, optionally considering its damage.

 Additional parameters that may be attached to the tool, such as NBT or count, are ignored.

Return Type: void

```zenscript
MCBlock.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, modifier as ILootModifier) as void
```

| Parameter   | Type                                                       | Description                                                      |
| ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| name        | string                                                     | The name of the loot modifier.                                   |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block was broken with.                              |
| matchDamage | boolean型                                                   | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block.                           |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block gets broken with the given tool, optionally considering its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

Return Type: void

```zenscript
MCBlock.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier) as void
```

| Parameter   | Type                                                       | Description                                                        |
| ----------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| name        | string                                                     | The name of the loot modifier.                                     |
| tool        | [IItemStack](/vanilla/api/items/IItemStack)                | The tool the block was broken with.                                |
| matchDamage | boolean型                                                   | Whether to consider damage or not when trying to match the tool.   |
| matchNbt    | boolean型                                                   | Whether to consider NBT data or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block.                             |


:::

:::group{name=addToolTypeLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that fires if this block gets broken with a tool with the given [ToolType](/vanilla/api/tool/ToolType).

 Damage or NBT is ignored when attempting to match the tool.

Return Type: void

```zenscript
MCBlock.addToolTypeLootModifier(name as string, toolType as ToolType, modifier as ILootModifier) as void
```

| Parameter | Type                                                       | Description                                         |
| --------- | ---------------------------------------------------------- | --------------------------------------------------- |
| name      | string                                                     | The name of the loot modifier.                      |
| toolType  | [ToolType](/vanilla/api/tool/ToolType)                     | The type of the tool the block must be broken with. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier to add to the block.              |


:::


