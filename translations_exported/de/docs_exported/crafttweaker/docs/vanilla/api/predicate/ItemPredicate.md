# ItemPredicate

Represents the predicate for an [MCItemDefinition](/vanilla/api/item/MCItemDefinition).

 This predicate will match an item against either a specific [MCItemDefinition](/vanilla/api/item/MCItemDefinition) or item tag ([MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;), with the second taking precedence over the first. If this initial check succeeds, then the predicate may also verify additional item properties, such as its current amount, its damage, or internal NBT data via [NBTPredicate](/vanilla/api/predicate/NBTPredicate). The predicate can also check the enchantments that are currently either applied to or stored onto the item via [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)s, or the potion effect that is currently present on the item, if any.

 By default, any item will be able to pass the checks of this predicate.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.ItemPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

ItemPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in ItemPredicate

## Methoden

:::group{name=matching}

Sets this predicate to match the given [IItemStack](/vanilla/api/items/IItemStack) as closely as possible.

 Additional properties such as damage, count, or NBT data are ignored.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.matching(stack as IItemStack) as ItemPredicate
```

| Parameter | Type                                        | Beschreibung                      |
| --------- | ------------------------------------------- | --------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack that should be matched. |


:::

:::group{name=matching}

Sets this predicate to match the given [IItemStack](/vanilla/api/items/IItemStack) as closely as possible, optionally considering damage.

 Additional properties such as count or NBT data are ignored.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.matching(stack as IItemStack, matchDamage as boolean) as ItemPredicate
```

| Parameter   | Type                                        | Beschreibung                                               |
| ----------- | ------------------------------------------- | ---------------------------------------------------------- |
| stack       | [IItemStack](/vanilla/api/items/IItemStack) | The stack that should be matched.                          |
| matchDamage | boolean                                     | Whether to consider damage or not when matching the stack. |


:::

:::group{name=matching}

Sets this predicate to match the given [IItemStack](/vanilla/api/items/IItemStack) as closely as possible, optionally considering damage and count.

 Additional properties such as NBT data are ignored.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.matching(stack as IItemStack, matchDamage as boolean, matchCount as boolean) as ItemPredicate
```

| Parameter   | Type                                        | Beschreibung                                                   |
| ----------- | ------------------------------------------- | -------------------------------------------------------------- |
| stack       | [IItemStack](/vanilla/api/items/IItemStack) | The stack that should be matched.                              |
| matchDamage | boolean                                     | Whether to consider damage or not when matching the stack.     |
| matchCount  | boolean                                     | Whether to consider the amount or not when matching the stack. |


:::

:::group{name=matching}

Sets this predicate to match the given [IItemStack](/vanilla/api/items/IItemStack) as closely as possible, optionally considering damage, count, and NBT data.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.matching(stack as IItemStack, matchDamage as boolean, matchCount as boolean, matchNbt as boolean) as ItemPredicate
```

| Parameter   | Type                                        | Beschreibung                                                     |
| ----------- | ------------------------------------------- | ---------------------------------------------------------------- |
| stack       | [IItemStack](/vanilla/api/items/IItemStack) | The stack that should be matched.                                |
| matchDamage | boolean                                     | Whether to consider damage or not when matching the stack.       |
| matchCount  | boolean                                     | Whether to consider the amount or not when matching the stack.   |
| matchNbt    | boolean                                     | Whether to consider the NBT data or not when matching the stack. |


:::

:::group{name=withDataPredicate}

Creates and sets the [NBTPredicate](/vanilla/api/predicate/NBTPredicate) that will be matched against the item's NBT data.

 Any changes that have already been made to the NBT predicate will be overwritten, effectively replacing the previous one, if any.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withDataPredicate(builder as Consumer<NBTPredicate>) as ItemPredicate
```

| Parameter | Type                                                                            | Beschreibung                                                                                       |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| bauer     | Consumer&lt;[NBTPredicate](/vanilla/api/predicate/NBTPredicate)&gt; | A consumer that will be used to configure the [NBTPredicate](/vanilla/api/predicate/NBTPredicate). |


:::

:::group{name=withEnchantmentPredicate}

Creates and adds a new [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) to the list of predicates to match against the item's enchantments.

 The added predicate is simply added to the list. No validity checks are performed, meaning that there may be multiple predicates that target a single enchantment. In this case, they all need to match, thus they have to have compatible bounds.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withEnchantmentPredicate(builder as Consumer<EnchantmentPredicate>) as ItemPredicate
```

| Parameter | Type                                                                                            | Beschreibung                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| bauer     | Consumer&lt;[EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)&gt; | A consumer that will be used to configure the [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate). |


:::

:::group{name=withEnchantmentPredicate}

Creates and adds a new [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) for the given [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) to the list of predicates to match against the item's enchantments.

 The predicate that will be configured is already configured to target the specified enchantment.

 The added predicate is simply added to the list. No validity checks are performed, meaning that there may be multiple predicates that target a single enchantment. In this case, they all need to match, thus they have to have compatible bounds.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withEnchantmentPredicate(enchantment as MCEnchantment, builder as Consumer<EnchantmentPredicate>) as ItemPredicate
```

| Parameter   | Type                                                                                            | Beschreibung                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment)                                         | The enchantment that should be checked.                                                                            |
| bauer       | Consumer&lt;[EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)&gt; | A consumer that will be used to configure the [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate). |


:::

:::group{name=withExactAmount}

Sets the amount to exactly match the given <code>value</code>.

 If the amount had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withExactAmount(value as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                          |
| --------- | ---- | ------------------------------------- |
| value     | int  | The exact value the amount should be. |


:::

:::group{name=withExactDamage}

Sets the damage to exactly match the given <code>value</code>.

 If the damage had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withExactDamage(value as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                          |
| --------- | ---- | ------------------------------------- |
| value     | int  | The exact value the damage should be. |


:::

:::group{name=withItem}

Sets the [MCItemDefinition](/vanilla/api/item/MCItemDefinition) that this predicate should match.

 If a tag to match against has already been set, then the tag check will take precedence over this check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withItem(definition as MCItemDefinition) as ItemPredicate
```

| Parameter  | Type                                                   | Beschreibung                         |
| ---------- | ------------------------------------------------------ | ------------------------------------ |
| definition | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | The item the predicate should match. |


:::

:::group{name=withItem}

Sets the [MCItemDefinition](/vanilla/api/item/MCItemDefinition) that this predicate should match to the one contained in the given [IItemStack](/vanilla/api/items/IItemStack).

 If a tag to match against has already been set, then the tag check will take precedence over this check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withItem(itemStack as IItemStack) as ItemPredicate
```

| Parameter | Type                                        | Beschreibung                                                   |
| --------- | ------------------------------------------- | -------------------------------------------------------------- |
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | The stack containing the item that the predicate should match. |


:::

:::group{name=withMaximumAmount}

Sets the maximum amount of items to <code>max</code>.

 If the amount had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the amount didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withMaximumAmount(max as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| max       | int  | The maximum value the amount should be. |


:::

:::group{name=withMaximumDamage}

Sets the maximum damage of the item to <code>max</code>.

 If the damage had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the damage didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withMaximumDamage(max as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| max       | int  | The maximum value the damage should be. |


:::

:::group{name=withMinimumAmount}

Sets the minimum amount of items to <code>min</code>.

 If the amount had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the amount didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withMinimumAmount(min as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| min       | int  | The minimum value the amount should be. |


:::

:::group{name=withMinimumDamage}

Sets the minimum damage of the item to <code>min</code>.

 If the damage had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the damage didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withMinimumDamage(min as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| min       | int  | The minimum value the damage should be. |


:::

:::group{name=withPotion}

Sets the potion effect that should be present on the target item.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withPotion(potion as MCPotion) as ItemPredicate
```

| Parameter | Type                                      | Beschreibung       |
| --------- | ----------------------------------------- | ------------------ |
| potion    | [MCPotion](/vanilla/api/potions/MCPotion) | The potion effect. |


:::

:::group{name=withRangedAmount}

Sets both the minimum and maximum amount of items to <code>min</code> and <code>max</code> respectively.

 If the amount had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withRangedAmount(min as int, max as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| min       | int  | The minimum value the amount should be. |
| max       | int  | The maximum value the amount should be. |


:::

:::group{name=withRangedDamage}

Sets both the minimum and maximum damage of the item to <code>min</code> and <code>max</code> respectively.

 If the damage had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withRangedDamage(min as int, max as int) as ItemPredicate
```

| Parameter | Type | Beschreibung                            |
| --------- | ---- | --------------------------------------- |
| min       | int  | The minimum value the damage should be. |
| max       | int  | The maximum value the damage should be. |


:::

:::group{name=withStoredEnchantmentPredicate}

Creates and adds a new [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) to the list of predicates to match against the item's stored enchantments.

 The added predicate is simply added to the list. No validity checks are performed, meaning that there may be multiple predicates that target a single enchantment. In this case, they all need to match, thus they have to have compatible bounds.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withStoredEnchantmentPredicate(builder as Consumer<EnchantmentPredicate>) as ItemPredicate
```

| Parameter | Type                                                                                            | Beschreibung                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| bauer     | Consumer&lt;[EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)&gt; | A consumer that will be used to configure the [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate). |


:::

:::group{name=withStoredEnchantmentPredicate}

Creates and adds a new [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) for the given [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) to the list of predicates to match against the item's stored enchantments.

 The predicate that will be configured is already configured to target the specified enchantment.

 The added predicate is simply added to the list. No validity checks are performed, meaning that there may be multiple predicates that target a single enchantment. In this case, they all need to match, thus they have to have compatible bounds.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withStoredEnchantmentPredicate(enchantment as MCEnchantment, builder as Consumer<EnchantmentPredicate>) as ItemPredicate
```

| Parameter   | Type                                                                                            | Beschreibung                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment)                                         | The enchantment that should be checked.                                                                            |
| bauer       | Consumer&lt;[EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)&gt; | A consumer that will be used to configure the [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate). |


:::

:::group{name=withTag}

Sets the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; that this predicate should use for matching.

 The predicate will successfully match only if the supplied item is contained within the given tag.

 Specifying both a tag and an item to match against will make the tag take precedence over the item.

Returns: This predicate for chaining.  
Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
ItemPredicate.withTag(tag as MCTag<MCItemDefinition>) as ItemPredicate
```

| Parameter | Type                                                                                                       | Beschreibung                                   |
| --------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| tag       | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The tag the predicate should use for matching. |


:::


