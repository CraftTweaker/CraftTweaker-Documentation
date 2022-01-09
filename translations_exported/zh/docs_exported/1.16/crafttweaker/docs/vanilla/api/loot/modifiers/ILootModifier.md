# ILootModifier

Represents a modifier that gets applied to the loot dropped by a loot table.

 A modifier is something that can act on and change the loot dropped by a loot table, represented as a list of [IItemStack](/vanilla/api/items/IItemStack), leveraging the original [LootContext](/vanilla/api/loot/LootContext) that caused the loot drop.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifiers.ILootModifier;
```


## 使用方式

:::group{name=applyModifier}

Applies the modifier to the drops of a loot table.

Returns: A new list containing the modified loot, or the old list if the loot shouldn't be modified.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
ILootModifier.applyModifier(loot as stdlib.List<IItemStack>, currentContext as LootContext) as stdlib.List<IItemStack>
```

| 参数             | 类型                                                                         | 描述                                                       |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| loot           | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | The loot dropped by a loot table.                        |
| currentContext | [LootContext](/vanilla/api/loot/LootContext)                               | The context that caused the loot table to drop the loot. |


:::


