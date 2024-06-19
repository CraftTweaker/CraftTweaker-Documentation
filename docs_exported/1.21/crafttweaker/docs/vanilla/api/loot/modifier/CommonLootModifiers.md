# CommonLootModifiers

Holds a set of implementations of [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) of common usage.

 These can be used freely instead of rewriting the same code more than once. They are also guaranteed to behave
 correctly.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifier.CommonLootModifiers;
```


## Static Methods

:::group{name=add}

Adds the given [IItemStack](/vanilla/api/item/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.add(stack as IItemStack) as ILootModifier

CommonLootModifiers.add(<item:minecraft:cobblestone>);
```

| Parameter |                    Type                    |   Description    |
|-----------|--------------------------------------------|------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to add |


:::

:::group{name=addAll}

Adds all the given [IItemStack](/vanilla/api/item/IItemStack) to the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addAll(stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAll(<item:minecraft:iron_ingot>, <item:minecraft:iron_nugget> * 5);
```

| Parameter |                     Type                     |    Description    |
|-----------|----------------------------------------------|-------------------|
| stacks    | [IItemStack](/vanilla/api/item/IItemStack)[] | The stacks to add |


:::

:::group{name=addAllWithBinomialBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/item/IItemStack). <br />  <br />  The formula used is based on the `binomial_with_bonus_count` formula used by vanilla. In this case, the <br />  value of `extra` is added to the current tool's enchantment level; that determines the amount of times the <br />  randomness will roll. Every roll that is higher than `p` will add one element to the stack. This is the <br />  formula used by potatoes and carrots to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithBinomialBonus(enchantment as Enchantment, extra as int, p as float, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithBinomialBonus(<enchantment:minecraft:fortune>, 3, 0.5714286, <item:minecraft:wheat_seeds>, <item:minecraft:carrot> * 9);
```

|  Parameter  |                           Type                           |                                     Description                                     |
|-------------|----------------------------------------------------------|-------------------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for.                                                       |
| extra       | int                                                      | An extra value that will be added to the tool's enchantment level.                  |
| p           | float                                                    | The probability of the binomial distribution, between 0.0 and 1.0 (both exclusive). |
| stacks      | [IItemStack](/vanilla/api/item/IItemStack)[]             | The stacks to add.                                                                  |


:::

:::group{name=addAllWithChance}

Adds the given [Percentaged](/vanilla/api/util/random/Percentaged)&lt;T&gt; [IItemStack](/vanilla/api/item/IItemStack)s to the drops, according to the specified chances. <br />  <br />  The chance will be computed on each modifier roll, and independently for each of the given stacks.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithChance(stacks as Percentaged<IItemStack>[]) as ILootModifier

CommonLootModifiers.addAllWithChance(<item:minecraft:honey_bottle> % 50, <item:minecraft:dried_kelp> % 13);
```

| Parameter |                                                  Type                                                   |    Description     |
|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| stacks    | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The stacks to add. |


:::

:::group{name=addAllWithOreDropsBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/item/IItemStack). <br />  <br />  The formula used is based on the `ore_drops` formula used by vanilla, which multiplies the stack's <br />  original count by a random number between 1 and the tool's enchantment level + 1. This is the formula used by <br />  all vanilla ores to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithOreDropsBonus(enchantment as Enchantment, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithOreDropsBonus(<enchantment:minecraft:fortune>, <item:minecraft:coal>, <item:minecraft:diamond>);
```

|  Parameter  |                           Type                           |          Description          |
|-------------|----------------------------------------------------------|-------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for. |
| stacks      | [IItemStack](/vanilla/api/item/IItemStack)[]             | The stacks to add.            |


:::

:::group{name=addAllWithUniformBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack)s to the drops, modifying their count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#addAll(IItemStack...). <br />  <br />  The fortune modifier is applied separately for each [IItemStack](/vanilla/api/item/IItemStack). <br />  <br />  The formula used is based on the `uniform_bonus_count` formula used by vanilla. In this case, the <br />  enchantment level is multiplied by `multiplier` and a random number is extracted between 0 and the result. <br />  This number is then added to the original's stack count. This is the formula used by redstone ore and glowstone <br />  to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addAllWithUniformBonus(enchantment as Enchantment, multiplier as int, stacks as IItemStack[]) as ILootModifier

CommonLootModifiers.addAllWithUniformBonus(<enchantment:minecraft:fortune>, 1, <item:minecraft:glowstone_dust>, <item:minecraft:prismarine_crystals>);
```

|  Parameter  |                           Type                           |                                 Description                                 |
|-------------|----------------------------------------------------------|-----------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for.                                               |
| multiplier  | int                                                      | A multiplier that will be used in conjunction with the enchantment's level. |
| stacks      | [IItemStack](/vanilla/api/item/IItemStack)[]             | The stacks to add.                                                          |


:::

:::group{name=addWithBinomialBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack) to the drops, modifying its count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `binomial_with_bonus_count` formula used by vanilla. In this case, the <br />  value of `extra` is added to the current tool's enchantment level; that determines the amount of times the <br />  randomness will roll. Every roll that is higher than `p` will add one element to the stack. This is the <br />  formula used by potatoes and carrots to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addWithBinomialBonus(enchantment as Enchantment, extra as int, p as float, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithBinomialBonus(<enchantment:minecraft:fortune>, 3, 0.5714286, <item:minecraft:wheat_seeds>);
```

|  Parameter  |                           Type                           |                                     Description                                     |
|-------------|----------------------------------------------------------|-------------------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for.                                                       |
| extra       | int                                                      | An extra value that will be added to the tool's enchantment level.                  |
| p           | float                                                    | The probability of the binomial distribution, between 0.0 and 1.0 (both exclusive). |
| stack       | [IItemStack](/vanilla/api/item/IItemStack)               | The stack to add.                                                                   |


:::

:::group{name=addWithChance}

Adds the given [Percentaged](/vanilla/api/util/random/Percentaged)&lt;T&gt; [IItemStack](/vanilla/api/item/IItemStack) to the drops, according to the specified chances. <br />  <br />  The chance will be computed on each modifier roll.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addWithChance(stack as Percentaged<IItemStack>) as ILootModifier

CommonLootModifiers.addWithChance(<item:minecraft:gilded_blackstone> % 50);
```

| Parameter |                                                 Type                                                  |    Description    |
|-----------|-------------------------------------------------------------------------------------------------------|-------------------|
| stack     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The stack to add. |


:::

:::group{name=addWithOreDropsBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack) to the drops, modifying its count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `ore_drops` formula used by vanilla, which multiplies the stack's <br />  original count by a random number between 1 and the tool's enchantment level + 1. This is the formula used by <br />  all vanilla ores to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addWithOreDropsBonus(enchantment as Enchantment, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithOreDropsBonus(<enchantment:minecraft:fortune>, <item:minecraft:coal>);
```

|  Parameter  |                           Type                           |          Description          |
|-------------|----------------------------------------------------------|-------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for. |
| stack       | [IItemStack](/vanilla/api/item/IItemStack)               | The stack to add.             |


:::

:::group{name=addWithRandomAmount}

Adds the given [IItemStack](/vanilla/api/item/IItemStack) to the drops, with an amount chosen randomly between the given bounds. <br />  <br />  Any original stack size given to this method is ignored; if an addition behavior is desired (as in random <br />  chance <em>on top</em> of the original stack size), a combining loot modifier should be used instead.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addWithRandomAmount(stack as IItemStack, min as int, max as int) as ILootModifier

CommonLootModifiers.addWithRandomAmount(<item:minecraft:conduit>, 2, 9);
```

| Parameter |                    Type                    |                Description                 |
|-----------|--------------------------------------------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to add.                          |
| min       | int                                        | The minimum amount that this stack can be. |
| max       | int                                        | The maximum amount that this stack can be. |


:::

:::group{name=addWithUniformBonus}

Adds the given [IItemStack](/vanilla/api/item/IItemStack) to the drops, modifying its count based on the level of the given <br />  [Enchantment](/vanilla/api/item/enchantment/Enchantment) on the tool used, if available. <br />  <br />  In case no tool is used to obtain the stack, then this loot modifier behaves exactly like <br />  [this](.)#add(IItemStack). <br />  <br />  The formula used is based on the `uniform_bonus_count` formula used by vanilla. In this case, the <br />  enchantment level is multiplied by `multiplier` and a random number is extracted between 0 and the result. <br />  This number is then added to the original's stack count. This is the formula used by redstone ore and glowstone <br />  to determine their drop count.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.addWithUniformBonus(enchantment as Enchantment, multiplier as int, stack as IItemStack) as ILootModifier

CommonLootModifiers.addWithUniformBonus(<enchantment:minecraft:fortune>, 1, <item:minecraft:glowstone_dust>);
```

|  Parameter  |                           Type                           |                                 Description                                 |
|-------------|----------------------------------------------------------|-----------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to check for.                                               |
| multiplier  | int                                                      | A multiplier that will be used in conjunction with the enchantment's level. |
| stack       | [IItemStack](/vanilla/api/item/IItemStack)               | The stack to add.                                                           |


:::

:::group{name=chaining}

Chains the given list of [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)s to be executed one after the other.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.chaining(modifiers as ILootModifier[]) as ILootModifier

CommonLootModifiers.chaining(CommonLootModifiers.clearLoot(), CommonLootModifiers.add(<item:minecraft:warped_hyphae>));
```

| Parameter |                            Type                             |    Description     |
|-----------|-------------------------------------------------------------|--------------------|
| modifiers | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)[] | The modifier list. |


:::

:::group{name=clearLoot}

Clears the entire drop list.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.clearLoot() as ILootModifier

CommonLootModifiers.clearLoot();
```

:::

:::group{name=clearing}

Chains the given list of [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)s together after having cleaned the original loot.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.clearing(modifiers as ILootModifier[]) as ILootModifier

CommonLootModifiers.clearing(CommonLootModifiers.add(<item:minecraft:warped_hyphae>));
```

| Parameter |                            Type                             |    Description     |
|-----------|-------------------------------------------------------------|--------------------|
| modifiers | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)[] | The modifier list. |


:::

:::group{name=remove}

Removes every instance of the targeted [IIngredient](/vanilla/api/ingredient/IIngredient) from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.remove(target as IIngredient) as ILootModifier

CommonLootModifiers.remove(<tag:item:minecraft:creeper_drop_music_discs>);
```

| Parameter |                        Type                        |                            Description                            |
|-----------|----------------------------------------------------|-------------------------------------------------------------------|
| target    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The [IIngredient](/vanilla/api/ingredient/IIngredient) to remove. |


:::

:::group{name=removeAll}

Removes every instance of all the targeted [IIngredient](/vanilla/api/ingredient/IIngredient)s from the drops.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.removeAll(targets as IIngredient[]) as ILootModifier

CommonLootModifiers.removeAll(<item:minecraft:bell>, <tag:item:minecraft:rails>);
```

| Parameter |                         Type                         |                            Description                             |
|-----------|------------------------------------------------------|--------------------------------------------------------------------|
| targets   | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | The [IIngredient](/vanilla/api/ingredient/IIngredient)s to remove. |


:::

:::group{name=removeExactly}

Removes every instance of the targeted [IIngredient](/vanilla/api/ingredient/IIngredient) from the drops, until the maximum amount of removals <br />  is reached. <br />  <br />  For example, assume the loot drops 2 carrots, 3 potatoes, and 1 iron ingot and that this loot modifier has <br />  been asked to remove 4 edible items. The result of applying the loot modifier will be to remove the 2 carrots and <br />  2 out of the 3 potatoes, resulting in a final drop list of 1 iron ingot and 1 potato.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.removeExactly(target as IIngredientWithAmount) as ILootModifier

CommonLootModifiers.removeExactly(<tag:item:minecraft:wooden_planks> * 2);
```

| Parameter |                                  Type                                  |                                        Description                                        |
|-----------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| target    | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The [IIngredient](/vanilla/api/ingredient/IIngredient) to remove along with its quantity. |


:::

:::group{name=removeExactlyAll}

Removes every instance of the targeted [IIngredient](/vanilla/api/ingredient/IIngredient)s from the drops, until the maximum amount of removals <br />  is reached. <br />  <br />  For example, assume the loot drops 2 carrots, 3 potatoes, and 1 iron ingot and that this loot modifier has <br />  been asked to remove 4 edible items. The result of applying the loot modifier will be to remove the 2 carrots and <br />  2 out of the 3 potatoes, resulting in a final drop list of 1 iron ingot and 1 potato.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
CommonLootModifiers.removeExactlyAll(targets as IIngredientWithAmount[]) as ILootModifier
```

| Parameter |                                   Type                                   |                                         Description                                          |
|-----------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| targets   | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The [IIngredient](/vanilla/api/ingredient/IIngredient)s to remove along with their quantity. |


:::

:::group{name=replaceAllStacksWith}

Replaces every instance of the targeted [IItemStack](/vanilla/api/item/IItemStack)s with the replacement [IItemStack](/vanilla/api/item/IItemStack)s, <br />  proportionally. <br />  <br />  As an example, if the loot drops 5 carrots and this loot modifier runs with 2 carrots as the key of a pair and 1 <br />  potato as the corresponding value, the loot will be modified to 2 potatoes and 1 carrot. This happens because <br />  every 2-carrot stack will be actively replaced by a 1-potato stack, without exceptions. <br />  <br />  This loot modifier acts differently than [this](.)#replaceAllWith(Map), where a simpler approach is used.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.replaceAllStacksWith(replacementMap as IItemStack[IIngredientWithAmount]) as ILootModifier

CommonLootModifiers.replaceAllStacksWith({ <item:minecraft:carrots> * 2 : <item:minecraft:potatoes> });
```

|   Parameter    |                                                        Type                                                        |                                      Description                                       |
|----------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| replacementMap | [IItemStack](/vanilla/api/item/IItemStack)[[IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)] | A map of key-value pairs dictating the target to replace along with their replacement. |


:::

:::group{name=replaceAllWith}

Replaces every instance of the targeted [IIngredient](/vanilla/api/ingredient/IIngredient)s with their corresponding replacement <br />  [IItemStack](/vanilla/api/item/IItemStack). <br />  <br />  In this case, a simple matching procedure is used, where every stack that matches the key of the pair is replaced <br />  by the corresponding value, without considering stack size. If stack size is to be preserved, refer to <br />  [this](.)#replaceAllStacksWith(Map).

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.replaceAllWith(replacementMap as IItemStack[IIngredient]) as ILootModifier

CommonLootModifiers.replaceAllWith({ <tag:item:forge:gems/emerald> : <item:minecraft:emerald> });
```

|   Parameter    |                                              Type                                              |                                      Description                                       |
|----------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| replacementMap | [IItemStack](/vanilla/api/item/IItemStack)[[IIngredient](/vanilla/api/ingredient/IIngredient)] | A map of key-value pairs dictating the target to replace along with their replacement. |


:::

:::group{name=replaceStackWith}

Replaces every instance of the targeted [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) with the replacement [IItemStack](/vanilla/api/item/IItemStack), <br />  proportionally. <br />  <br />  As an example, if the loot drops 5 carrots and this loot modifier runs with 2 carrots as the `target` <br />  and 1 potato as the `replacement`, the loot will be modified to 2 potatoes and 1 carrot. This happens <br />  because every 2-carrot stack will be actively replaced by a 1-potato stack, without exceptions. <br />  <br />  This loot modifier acts differently than [this](.)#replaceWith(IIngredient, IItemStack), where a simpler approach <br />  is used.

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.replaceStackWith(target as IIngredientWithAmount, replacement as IItemStack) as ILootModifier

CommonLootModifiers.replaceStackWith(<item:minecraft:carrots> * 2, <item:minecraft:potatoes>);
```

|  Parameter  |                                  Type                                  |       Description       |
|-------------|------------------------------------------------------------------------|-------------------------|
| target      | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/item/IItemStack)                             | The replacement to use. |


:::

:::group{name=replaceWith}

Replaces every instance of the targeted [IIngredient](/vanilla/api/ingredient/IIngredient) with the replacement [IItemStack](/vanilla/api/item/IItemStack). <br />  <br />  In this case, a simple matching procedure is used, where every stack that matches the given `target` <br />  is replaced by the `replacement` without considering stack size. If stack size is to be preserved, <br />  refer to [this](.)#replaceStackWith(IIngredientWithAmount, IItemStack).

Returns: An [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) that carries out the operation.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
// CommonLootModifiers.replaceWith(target as IIngredient, replacement as IItemStack) as ILootModifier

CommonLootModifiers.replaceWith(<tag:item:forge:ingots/iron>, <item:minecraft:iron_ingot>);
```

|  Parameter  |                        Type                        |       Description       |
|-------------|----------------------------------------------------|-------------------------|
| target      | [IIngredient](/vanilla/api/ingredient/IIngredient) | The target to replace.  |
| replacement | [IItemStack](/vanilla/api/item/IItemStack)         | The replacement to use. |


:::

