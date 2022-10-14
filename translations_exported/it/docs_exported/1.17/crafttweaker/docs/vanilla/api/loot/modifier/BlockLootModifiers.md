# Expansion for Block

Additional methods for easier modification of block-related loot tables.

## Metodi

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, with the given name.

Return Type: void

```zenscript
Block.addLootModifier(name as string, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                      | Descrizione                           |
| --------- | --------------------------------------------------------- | ------------------------------------- |
| nome      | string                                                    | The name of the loot modifier to add. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add.             |


:::

:::group{name=addStateLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this block, firing only if it matches the state outlined in the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

Return Type: void

```zenscript
Block.addStateLootModifier(name as string, statePredicate as StatePropertiesPredicateBuilder, modifier as ILootModifier) as void
```

| Parametro      | Tipo                                                                                              | Descrizione                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| nome           | string                                                                                            | The name of the loot modifier to add.                                                                                                 |
| statePredicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) | A consumer to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) to identify the target state. |
| modifier       | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)                                         | The loot modifier to add.                                                                                                             |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block gets broken with the given tool.

 Parameters that may be attached to the tool such as count, damage, or NBT data are ignored.

Return Type: void

```zenscript
Block.addToolLootModifier(name as string, tool as IItemStack, modifier as ILootModifier) as void
```

| Parametro | Tipo                                                      | Descrizione                            |
| --------- | --------------------------------------------------------- | -------------------------------------- |
| nome      | string                                                    | The name of the loot modifier.         |
| tool      | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block was broken with.    |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block. |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block gets broken with the given tool, optionally considering its damage.

 Additional parameters that may be attached to the tool, such as NBT or count, are ignored.

Return Type: void

```zenscript
Block.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, modifier as ILootModifier) as void
```

| Parametro   | Tipo                                                      | Descrizione                                                      |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| nome        | string                                                    | The name of the loot modifier.                                   |
| tool        | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block was broken with.                              |
| matchDamage | boolean                                                   | Whether to consider damage or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block.                           |


:::

:::group{name=addToolLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that fires if this block gets broken with the given tool, optionally considering its damage or NBT.

 Additional parameters that may be attached to the tool, such as count, are ignored.

Return Type: void

```zenscript
Block.addToolLootModifier(name as string, tool as IItemStack, matchDamage as boolean, matchNbt as boolean, modifier as ILootModifier) as void
```

| Parametro   | Tipo                                                      | Descrizione                                                        |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| nome        | string                                                    | The name of the loot modifier.                                     |
| tool        | [IItemStack](/vanilla/api/item/IItemStack)                | The tool the block was broken with.                                |
| matchDamage | boolean                                                   | Whether to consider damage or not when trying to match the tool.   |
| matchNbt    | boolean                                                   | Whether to consider NBT data or not when trying to match the tool. |
| modifier    | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add to the block.                             |


:::


