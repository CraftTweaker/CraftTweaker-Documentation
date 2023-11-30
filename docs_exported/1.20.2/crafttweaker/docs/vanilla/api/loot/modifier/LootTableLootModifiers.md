# Expansion for LootTable

Additional methods for easier modification of a specific loot table.

## Methods

:::group{name=addLootModifier}

Adds an [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) to this loot table, with the given name.

```zenscript
LootTable.addLootModifier(name as string, modifier as ILootModifier)
```

| Parameter |                           Type                            |              Description              |
|-----------|-----------------------------------------------------------|---------------------------------------|
| name      | string                                                    | The name of the loot modifier to add. |
| modifier  | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) | The loot modifier to add.             |


:::


