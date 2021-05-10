# CommonLootModifiers

Holds a set of implementations of [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) of common usage.

 These can be used freely instead of rewriting the same code more than once. They are also guaranteed to behave correctly.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifiers.CommonLootModifiers;
```


## Static Methods

:::group{name=add}

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.add(stack as IItemStack) as ILootModifier
```

| Parameter | Type                                        | Description      |
| --------- | ------------------------------------------- | ---------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add |


:::

:::group{name=addAll}

Adds all the given [IItemStack](/vanilla/api/items/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.addAll(stacks as IItemStack[]) as ILootModifier
```

| Parameter | Type                                          | Description       |
| --------- | --------------------------------------------- | ----------------- |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add |


:::

:::group{name=chaining}

Chains the given list of [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)s to be executed one after the other.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.chaining(modifiers as ILootModifier[]) as ILootModifier
```

| Parameter | Type                                                         | Description        |
| --------- | ------------------------------------------------------------ | ------------------ |
| modifiers | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)[] | The modifier list. |


:::

:::group{name=clearLoot}

Clears the entire drop list.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.clearLoot() as ILootModifier

CommonLootModifiers.clearLoot();
```

:::

:::group{name=remove}

Removes every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient) from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.remove(target as IIngredient) as ILootModifier
```

| Parameter | Type                                          | Description                                                  |
| --------- | --------------------------------------------- | ------------------------------------------------------------ |
| target    | [IIngredient](/vanilla/api/items/IIngredient) | The [IIngredient](/vanilla/api/items/IIngredient) to remove. |


:::

:::group{name=removeAll}

Removes every instance of all the targeted [IIngredient](/vanilla/api/items/IIngredient)s from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.removeAll(targets as IIngredient[]) as ILootModifier
```

| Parameter | Type                                            | Description                                                   |
| --------- | ----------------------------------------------- | ------------------------------------------------------------- |
| targets   | [IIngredient](/vanilla/api/items/IIngredient)[] | The [IIngredient](/vanilla/api/items/IIngredient)s to remove. |


:::

:::group{name=replaceAllStacksWith}

Replaces every instance of the targeted [IItemStack](/vanilla/api/items/IItemStack)s with the replacement [IItemStack](/vanilla/api/items/IItemStack)s, <br />  proportionally. <br />  <br />  As an example, if the loot drops 5 carrots and this loot modifier runs with 2 carrots as the key of a pair and 1 <br />  potato as the corresponding value, the loot will be modified to 2 potatoes and 1 carrot. This happens because <br />  every 2-carrot stack will be actively replaced by a 1-potato stack, without exceptions. <br />  <br />  This loot modifier acts differently than [this](.)#replaceAllWith(Map), where a simpler approach is used.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceAllStacksWith(replacementMap as IItemStack[IItemStack]) as ILootModifier
```

| Parameter      | Type                                                                                     | Description                                                                            |
| -------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| replacementMap | [IItemStack](/vanilla/api/items/IItemStack)[[IItemStack](/vanilla/api/items/IItemStack)] | A map of key-value pairs dictating the target to replace along with their replacement. |


:::

:::group{name=replaceAllWith}

Replaces every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient)s with their corresponding replacement <br />  [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  In this case, a simple matching procedure is used, where every stack that matches the key of the pair is replaced <br />  by the corresponding value, without considering stack size. If stack size is to be preserved, refer to <br />  [this](.)#replaceAllStacksWith(Map).

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceAllWith(replacementMap as IItemStack[IIngredient]) as ILootModifier
```

| Parameter      | Type                                                                                       | Description                                                                            |
| -------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| replacementMap | [IItemStack](/vanilla/api/items/IItemStack)[[IIngredient](/vanilla/api/items/IIngredient)] | A map of key-value pairs dictating the target to replace along with their replacement. |


:::

:::group{name=replaceStackWith}

Replaces every instance of the targeted [IItemStack](/vanilla/api/items/IItemStack) with the replacement [IItemStack](/vanilla/api/items/IItemStack), <br />  proportionally. <br />  <br />  As an example, if the loot drops 5 carrots and this loot modifier runs with 2 carrots as the <code>target</code> <br />  and 1 potato as the <code>replacement</code>, the loot will be modified to 2 potatoes and 1 carrot. This happens <br />  because every 2-carrot stack will be actively replaced by a 1-potato stack, without exceptions. <br />  <br />  This loot modifier acts differently than [this](.)#replaceWith(IIngredient, IItemStack), where a simpler approach <br />  is used.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceStackWith(target as IItemStack, replacement as IItemStack) as ILootModifier
```

| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| target      | [IItemStack](/vanilla/api/items/IItemStack) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/items/IItemStack) | The replacement to use. |


:::

:::group{name=replaceWith}

Replaces every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient) with the replacement [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  In this case, a simple matching procedure is used, where every stack that matches the given <code>target</code> <br />  is replaced by the <code>replacement</code> without considering stack size. If stack size is to be preserved, <br />  refer to [this](.)#replaceStackWith(IItemStack, IItemStack).

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
CommonLootModifiers.replaceWith(target as IIngredient, replacement as IItemStack) as ILootModifier
```

| Parameter   | Type                                          | Description             |
| ----------- | --------------------------------------------- | ----------------------- |
| target      | [IIngredient](/vanilla/api/items/IIngredient) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/items/IItemStack)   | The replacement to use. |


:::

