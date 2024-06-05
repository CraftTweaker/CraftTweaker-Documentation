# Expansion for Block

Additional methods for easier modification of block-related loot tables.

## Methods

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, with the given name.

```zenscript
Block.addLootModifier(name as string, modifier as ILootModifier)
```

| Parameter |                           Type                            |              Description              |
|-----------|-----------------------------------------------------------|---------------------------------------|
| name      | string                                                    | The name of the loot modifier to add. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add.             |


:::

:::group{name=addNoSilkTouchLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, with the given name, only if it is not harvested with the silk touch enchantment.

```zenscript
Block.addNoSilkTouchLootModifier(name as string, modifier as ILootModifier)
```

| Parameter |                           Type                            |              Description              |
|-----------|-----------------------------------------------------------|---------------------------------------|
| name      | string                                                    | The name of the loot modifier to add. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add.             |


:::

:::group{name=addStateLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, firing only if it matches the state outlined in the
 [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

```zenscript
Block.addStateLootModifier(name as string, statePredicate as StatePropertiesPredicateBuilder, modifier as ILootModifier)
```

|   Parameter    |                                               Type                                                |                                                              Description                                                              |
|----------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| name           | string                                                                                            | The name of the loot modifier to add.                                                                                                 |
| statePredicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) | A consumer to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) to identify the target state. |
| modifier       | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)                                         | The loot modifier to add.                                                                                                             |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

```zenscript
Block.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier)
```

| Parameter |                           Type                            |              Description               |
|-----------|-----------------------------------------------------------|----------------------------------------|
| name      | string                                                    | The name of the loot modifier.         |
| tool      | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block was broken with.    |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block gets broken with the given tool, optionally considering
 its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

```zenscript
Block.addToolLootModifier(name as string, tool as IItemStack, matchComponents as boolean, modifier as ILootModifier)
```

|    Parameter    |                           Type                            |                             Description                              |
|-----------------|-----------------------------------------------------------|----------------------------------------------------------------------|
| name            | string                                                    | The name of the loot modifier.                                       |
| tool            | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block was broken with.                                  |
| matchComponents | boolean                                                   | Whether to consider components or not when trying to match the tool. |
| modifier        | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block.                               |


:::


