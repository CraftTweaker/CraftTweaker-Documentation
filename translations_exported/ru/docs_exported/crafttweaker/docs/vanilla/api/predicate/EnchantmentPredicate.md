# EnchantmentPredicate

Represents the predicate for an [MCEnchantment](/vanilla/api/enchantment/MCEnchantment).

 The predicate can be used to check various properties of a specific enchantment, such as its level.

 This predicate must specify an enchantment to apply to. By default, the enchantment check will pass irregardless of the enchantment's level.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EnchantmentPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EnchantmentPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EnchantmentPredicate

## Methods

### withEnchantment

Sets the enchantment that needs to be present, and whose data needs to be checked.

 This parameter is <strong>required</strong>.

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.withEnchantment(enchantment as MCEnchantment) as EnchantmentPredicate
```

| Параметр    | Тип                                                     | Description                               |
| ----------- | ------------------------------------------------------- | ----------------------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment that needs to be present. |


### withExactLevel

Sets the level to exactly match the given <code>value</code>.

 If the level had already some bounds specified, then they will be overwritten with the new value.

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.withExactLevel(value as int) as EnchantmentPredicate
```

| Параметр | Тип | Description                          |
| -------- | --- | ------------------------------------ |
| value    | int | The exact value the level should be. |


### withMaximumLevel

Sets the maximum value the level should be to <code>max</code>.

 If the level had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the level didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.withMaximumLevel(max as int) as EnchantmentPredicate
```

| Параметр | Тип | Description                            |
| -------- | --- | -------------------------------------- |
| max      | int | The maximum value the level should be. |


### withMinimumLevel

Sets the minimum value the level should be to <code>min</code>.

 If the level had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the level didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.withMinimumLevel(min as int) as EnchantmentPredicate
```

| Параметр | Тип | Description                            |
| -------- | --- | -------------------------------------- |
| min      | int | The minimum value the level should be. |


### withRangedLevel

Sets both the minimum and maximum value the level should be to <code>min</code> and <code>max</code>
 respectively.

 If the level had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.withRangedLevel(min as int, max as int) as EnchantmentPredicate
```

| Параметр | Тип | Description                            |
| -------- | --- | -------------------------------------- |
| min      | int | The minimum value the level should be. |
| max      | int | The maximum value the level should be. |



