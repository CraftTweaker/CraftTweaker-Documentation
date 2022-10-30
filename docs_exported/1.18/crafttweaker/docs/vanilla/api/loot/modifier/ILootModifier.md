# ILootModifier

Represents a modifier that gets applied to the loot dropped by a loot table.

 A modifier is something that can act on and change the loot dropped by a loot table, represented as a list of
 [IItemStack](/vanilla/api/item/IItemStack), leveraging the original [LootContext](/vanilla/api/loot/LootContext) that caused the loot drop.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifier.ILootModifier;
```


## Methods

:::group{name=modify}

Applies the modifier to the drops of a loot table.

Returns: A list containing the modified loot.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
ILootModifier.modify(loot as stdlib.List<IItemStack>, context as LootContext) as stdlib.List<IItemStack>
```

| Parameter |                             Type                              |                       Description                        |
|-----------|---------------------------------------------------------------|----------------------------------------------------------|
| loot      | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The loot dropped by a loot table.                        |
| context   | [LootContext](/vanilla/api/loot/LootContext)                  | The context that caused the loot table to drop the loot. |


:::


