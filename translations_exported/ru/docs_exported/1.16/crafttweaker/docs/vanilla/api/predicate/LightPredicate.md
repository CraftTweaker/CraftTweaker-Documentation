# LightPredicate

Represents a predicate for the light level in an area.

 In the base game, the light level in an area can only go from 0 (inclusive) to 16 (exclusive), and is a whole number. Nevertheless, the predicate does not perform any validity checks. Values that go outside these bounds will automatically be clamped to the two limits.

 By default, any light level passes this check.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LightPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

LightPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in LightPredicate

## Методы

:::group{name=withBoundedLightLevel}

Sets both the minimum and maximum value the light level should be to <code>min</code> and <code>max</code>
 respectively.

 If the light level had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LightPredicate](/vanilla/api/predicate/LightPredicate)

```zenscript
LightPredicate.withBoundedLightLevel(min as int, max as int) as LightPredicate
```

| Параметр | Тип | Описание                                     |
| -------- | --- | -------------------------------------------- |
| min      | int | The minimum value the light level should be. |
| max      | int | The maximum value the light level should be. |


:::

:::group{name=withMaximumLightLevel}

Sets the maximum value the light level should be to <code>max</code>.

 If the light level had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the light level didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LightPredicate](/vanilla/api/predicate/LightPredicate)

```zenscript
LightPredicate.withMaximumLightLevel(max as int) as LightPredicate
```

| Параметр | Тип | Описание                                     |
| -------- | --- | -------------------------------------------- |
| max      | int | The maximum value the light level should be. |


:::

:::group{name=withMinimumLightLevel}

Sets the minimum value the light level should be to <code>min</code>.

 If the light level had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the light level didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LightPredicate](/vanilla/api/predicate/LightPredicate)

```zenscript
LightPredicate.withMinimumLightLevel(min as int) as LightPredicate
```

| Параметр | Тип | Описание                                     |
| -------- | --- | -------------------------------------------- |
| min      | int | The minimum value the light level should be. |


:::


