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
// CommonLootModifiers.add(stack as IItemStack) as ILootModifier

CommonLootModifiers.add(<item:minecraft:cobblestone>);
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
// CommonLootModifiers.addAll(stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAll(<item:minecraft:iron_ingot>, <item:minecraft:iron_nugget> * 5);
```

| Parameter | Type                                          | Description       |
| --------- | --------------------------------------------- | ----------------- |
| stacks    | [IItemStack](/vanilla/api/items/IItemStack)[] | The stacks to add |


:::

:::group{name=addAllWithBinomialBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  The formula used is based on the `binomial_with_bonus_count` formula used by vanilla. In this case, the <br />  value of `extra` is added to the current tool's enchantment level; that determines the amount of times the <br />  randomness will roll. Every roll that is higher than `p` will add one element to the stack. This is the <br />  formula used by potatoes and carrots to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithBinomialBonus(enchantment as MCEnchantment, extra as int, p as float, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithBinomialBonus(<enchantment:minecraft:fortune>, 3, 0.5714286, <item:minecraft:wheat_seeds>, <item:minecraft:carrot> * 9);
```

| Parameter   | Type                                                    | Description                                                                         |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for.                                                       |
| extra       | int                                                     | An extra value that will be added to the tool's enchantment level.                  |
| p           | float                                                   | The probability of the binomial distribution, between 0.0 and 1.0 (both exclusive). |
| stacks      | [IItemStack](/vanilla/api/items/IItemStack)[]           | The stacks to add.                                                                  |


:::

:::group{name=addAllWithChance}

Adds the given [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)s to the drops, according to the specified chances. <br />  <br />  The chance will be computed on each modifier roll, and independently for each of the given stacks.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithChance(stacks as MCWeightedItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithChance(<item:minecraft:honey_bottle> % 50, <item:minecraft:dried_kelp> % 13);
```

| Parameter | Type                                                            | Description        |
| --------- | --------------------------------------------------------------- | ------------------ |
| stacks    | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)[] | The stacks to add. |


:::

:::group{name=addAllWithOreDropsBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  The formula used is based on the `ore_drops` formula used by vanilla, which multiplies the stack's <br />  original count by a random number between 1 and the tool's enchantment level + 1. This is the formula used by <br />  all vanilla ores to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithOreDropsBonus(enchantment as MCEnchantment, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithOreDropsBonus(<enchantment:minecraft:fortune>, <item:minecraft:coal>, <item:minecraft:diamond>);
```

| Parameter   | Type                                                    | Description                   |
| ----------- | ------------------------------------------------------- | ----------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for. |
| stacks      | [IItemStack](/vanilla/api/items/IItemStack)[]           | The stacks to add.            |


:::

:::group{name=addAllWithUniformBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  The formula used is based on the `uniform_bonus_count` formula used by vanilla. In this case, the <br />  enchantment level is multiplied by `multiplier` and a random number is extracted between 0 and the result. <br />  This number is then added to the original's stack count. This is the formula used by redstone ore and glowstone <br />  to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithUniformBonus(enchantment as MCEnchantment, multiplier as int, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithUniformBonus(<enchantment:minecraft:fortune>, 1, <item:minecraft:glowstone_dust>, <item:minecraft:prismarine_crystals>);
```

| Parameter   | Type                                                    | Description                                                                 |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for.                                               |
| multiplier  | int                                                     | A multiplier that will be used in conjunction with the enchantment's level. |
| stacks      | [IItemStack](/vanilla/api/items/IItemStack)[]           | The stacks to add.                                                          |


:::

:::group{name=addWithBinomialBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops, modifying its count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `binomial_with_bonus_count` formula used by vanilla. In this case, the <br />  value of `extra` is added to the current tool's enchantment level; that determines the amount of times the <br />  randomness will roll. Every roll that is higher than `p` will add one element to the stack. This is the <br />  formula used by potatoes and carrots to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addWithBinomialBonus(enchantment as MCEnchantment, extra as int, p as float, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithBinomialBonus(<enchantment:minecraft:fortune>, 3, 0.5714286, <item:minecraft:wheat_seeds>);
```

| Parameter   | Type                                                    | Description                                                                         |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for.                                                       |
| extra       | int                                                     | An extra value that will be added to the tool's enchantment level.                  |
| p           | float                                                   | The probability of the binomial distribution, between 0.0 and 1.0 (both exclusive). |
| stack       | [IItemStack](/vanilla/api/items/IItemStack)             | The stack to add.                                                                   |


:::

:::group{name=addWithChance}

Adds the given [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) to the drops, according to the specified chances. <br />  <br />  The chance will be computed on each modifier roll.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addWithChance(stack as MCWeightedItemStack) as ILootModifier

CommonLootModifiers.addWithChance(<item:minecraft:gilded_blackstone> % 50);
```

| Parameter | Type                                                          | Description       |
| --------- | ------------------------------------------------------------- | ----------------- |
| stack     | [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack) | The stack to add. |


:::

:::group{name=addWithOreDropsBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops, modifying its count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `ore_drops` formula used by vanilla, which multiplies the stack's <br />  original count by a random number between 1 and the tool's enchantment level + 1. This is the formula used by <br />  all vanilla ores to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addWithOreDropsBonus(enchantment as MCEnchantment, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithOreDropsBonus(<enchantment:minecraft:fortune>, <item:minecraft:coal>);
```

| Parameter   | Type                                                    | Description                   |
| ----------- | ------------------------------------------------------- | ----------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for. |
| stack       | [IItemStack](/vanilla/api/items/IItemStack)             | The stack to add.             |


:::

:::group{name=addWithRandomAmount}

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops, with an amount chosen randomly between the given bounds. <br />  <br />  Any original stack size given to this method is ignored; if an addition behavior is desired (as in random <br />  chance <em>on top</em> of the original stack size), a combining loot modifier should be used instead.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addWithRandomAmount(stack as IItemStack, min as int, max as int) as ILootModifier

CommonLootModifiers.addWithRandomAmount(<item:minecraft:conduit>, 2, 9);
```

| Parameter | Type                                        | Description                                |
| --------- | ------------------------------------------- | ------------------------------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to add.                          |
| min       | int                                         | The minimum amount that this stack can be. |
| max       | int                                         | The maximum amount that this stack can be. |


:::

:::group{name=addWithUniformBonus}

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the drops, modifying its count based on the level of the given <br />  [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `uniform_bonus_count` formula used by vanilla. In this case, the <br />  enchantment level is multiplied by `multiplier` and a random number is extracted between 0 and the result. <br />  This number is then added to the original's stack count. This is the formula used by redstone ore and glowstone <br />  to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.addWithUniformBonus(enchantment as MCEnchantment, multiplier as int, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithUniformBonus(<enchantment:minecraft:fortune>, 1, <item:minecraft:glowstone_dust>);
```

| Parameter   | Type                                                    | Description                                                                 |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check for.                                               |
| multiplier  | int                                                     | A multiplier that will be used in conjunction with the enchantment's level. |
| stack       | [IItemStack](/vanilla/api/items/IItemStack)             | The stack to add.                                                           |


:::

:::group{name=chaining}

Chains the given list of [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)s to be executed one after the other.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.chaining(modifiers as ILootModifier[]) as ILootModifier

CommonLootModifiers.chaining(CommonLootModifiers.clearLoot(), CommonLootModifiers.add(<item:minecraft:warped_hyphae>));
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

:::group{name=clearing}

Chains the given list of [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)s together after having cleaned the original loot.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.clearing(modifiers as ILootModifier[]) as ILootModifier

CommonLootModifiers.clearing(CommonLootModifiers.add(<item:minecraft:warped_hyphae>));
```

| Parameter | Type                                                         | Description        |
| --------- | ------------------------------------------------------------ | ------------------ |
| modifiers | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)[] | The modifier list. |


:::

:::group{name=remove}

Removes every instance of the targeted [IIngredient](/vanilla/api/items/IIngredient) from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
// CommonLootModifiers.remove(target as IIngredient) as ILootModifier

CommonLootModifiers.remove(<tag:items:minecraft:creeper_drop_music_discs>);
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
// CommonLootModifiers.removeAll(targets as IIngredient[]) as ILootModifier

CommonLootModifiers.removeAll(<item:minecraft:bell>, <tag:items:minecraft:rails>);
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
// CommonLootModifiers.replaceAllStacksWith(replacementMap as IItemStack[IItemStack]) as ILootModifier

CommonLootModifiers.replaceAllStacksWith({ <item:minecraft:carrots> * 2 : <item:minecraft:potatoes> });
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
// CommonLootModifiers.replaceAllWith(replacementMap as IItemStack[IIngredient]) as ILootModifier

CommonLootModifiers.replaceAllWith({ <tag:items:forge:gems/emerald> : <item:minecraft:emerald> });
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
// CommonLootModifiers.replaceStackWith(target as IItemStack, replacement as IItemStack) as ILootModifier

CommonLootModifiers.replaceStackWith(<item:minecraft:carrots> * 2, <item:minecraft:potatoes>);
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
// CommonLootModifiers.replaceWith(target as IIngredient, replacement as IItemStack) as ILootModifier

CommonLootModifiers.replaceWith(<tag:items:forge:ingots/iron>, <item:minecraft:iron_ingot>);
```

| Parameter   | Type                                          | Description             |
| ----------- | --------------------------------------------- | ----------------------- |
| target      | [IIngredient](/vanilla/api/items/IIngredient) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/items/IItemStack)   | The replacement to use. |


:::

