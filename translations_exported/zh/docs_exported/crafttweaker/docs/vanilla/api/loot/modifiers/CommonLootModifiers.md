# CommonLootModifiers

Holds a set of implementations of [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) of common usage.

 These can be used freely instead of rewriting the same code more than once. They are also guaranteed to behave correctly.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifiers.CommonLootModifiers;
```


## 方法

### add

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.add(stack as IItemStack) as ILootModifier
```

| 参数    | 类型                                          | 描述               |
| ----- | ------------------------------------------- | ---------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add |


### addAll

Adds all the given [IItemStack](/vanilla/api/items/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.addAll(stacks as IItemStack[]) as ILootModifier
```

| 参数     | 类型                                            | 描述                |
| ------ | --------------------------------------------- | ----------------- |
| stacks | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add |


### clearLoot

Clears the entire drop list.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.clearLoot() as ILootModifier
CommonLootModifiers.clearLoot();
```

### remove

Removes every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient) from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.remove(target as IIngredient) as ILootModifier
```

| 参数     | 类型                                                | 描述                                                           |
| ------ | ------------------------------------------------- | ------------------------------------------------------------ |
| target | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The [IIngredient](/vanilla/api/items/IIngredient) to remove. |


### removeAll

Removes every instance of all the targeted [IIngredient](/vanilla/api/items/IIngredient)s from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.removeAll(targets as IIngredient[]) as ILootModifier
```

| 参数      | 类型                                              | 描述                                                            |
| ------- | ----------------------------------------------- | ------------------------------------------------------------- |
| targets | [IIngredient](/vanilla/api/items/IIngredient)[] | The [IIngredient](/vanilla/api/items/IIngredient)s to remove. |


### replaceAllWith

Replaces every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient)s with their corresponding replacement [IItemStack](/vanilla/api/items/IItemStack).

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceAllWith(replacementMap as IItemStack[IIngredient]) as ILootModifier
```

| 参数             | 类型                                                                                         | 描述                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| replacementMap | [IItemStack](/vanilla/api/items/IItemStack)[[IIngredient](/vanilla/api/items/IIngredient)] | A map of key-value pairs dictating the target to replace along with their replacement. |


### replaceWith

Replaces every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient) with the replacement [IItemStack](/vanilla/api/items/IItemStack).

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation. Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceWith(target as IIngredient, replacement as IItemStack) as ILootModifier
```

| 参数          | 类型                                                | 描述                      |
| ----------- | ------------------------------------------------- | ----------------------- |
| target      | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/items/IItemStack)       | The replacement to use. |


