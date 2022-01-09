# DistancePredicate

Represents a predicate for distance.

 The predicate can effectively be used to check the distance between two coordinates in 3D-space. The distance will firstly be checked separately against the x, y, and z bounds that have been specified. If those checks succeed, then horizontal distance will be taken into consideration, measuring the distance between the two points only along the X and Z axis. Lastly, the absolute distance considering all axis will be checked.

 Any of the above checks will be skipped if no value has been specified for any of them. By default, the predicate will not add any restrictions on the distance between two points.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DistancePredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

DistancePredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in DistancePredicate

## Методы

:::group{name=withMaximumAbsoluteDistance}

Sets the maximum value the absolute distance should be to <code>max</code>.

 If the absolute distance had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the absolute distance didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMaximumAbsoluteDistance(max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                           |
| -------- | ----- | -------------------------------------------------- |
| max      | float | The maximum value the absolute distance should be. |


:::

:::group{name=withMaximumHorizontalDistance}

Sets the maximum value the horizontal distance should be to <code>max</code>.

 If the horizontal distance had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the horizontal distance didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMaximumHorizontalDistance(max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                             |
| -------- | ----- | ---------------------------------------------------- |
| max      | float | The maximum value the horizontal distance should be. |


:::

:::group{name=withMaximumX}

Sets the maximum value the distance along the X axis should be to <code>max</code>.

 If the distance had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the distance didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMaximumX(max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| max      | float | The maximum value the distance along the X axis should be. |


:::

:::group{name=withMaximumY}

Sets the maximum value the distance along the Y axis should be to <code>max</code>.

 If the distance had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the distance didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMaximumY(max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| max      | float | The maximum value the distance along the Y axis should be. |


:::

:::group{name=withMaximumZ}

Sets the maximum value the distance along the Z axis should be to <code>max</code>.

 If the distance had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the distance didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMaximumZ(max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| max      | float | The maximum value the distance along the Z axis should be. |


:::

:::group{name=withMinimumAbsoluteDistance}

Sets the minimum value the absolute distance should be to <code>min</code>.

 If the absolute distance had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the absolute distance didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMinimumAbsoluteDistance(min as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                           |
| -------- | ----- | -------------------------------------------------- |
| min      | float | The minimum value the absolute distance should be. |


:::

:::group{name=withMinimumHorizontalDistance}

Sets the minimum value the horizontal distance should be to <code>min</code>.

 If the horizontal distance had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the horizontal distance didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMinimumHorizontalDistance(min as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                             |
| -------- | ----- | ---------------------------------------------------- |
| min      | float | The minimum value the horizontal distance should be. |


:::

:::group{name=withMinimumX}

Sets the minimum value the distance along the X axis should be to <code>min</code>.

 If the distance had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the distance didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMinimumX(min as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the X axis should be. |


:::

:::group{name=withMinimumY}

Sets the minimum value the distance along the Y axis should be to <code>min</code>.

 If the distance had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the distance didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMinimumY(min as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the Y axis should be. |


:::

:::group{name=withMinimumZ}

Sets the minimum value the distance along the Z axis should be to <code>min</code>.

 If the distance had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the distance didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withMinimumZ(min as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the Z axis should be. |


:::

:::group{name=withRangedAbsoluteDistance}

Sets both the minimum and maximum value the absolute distance should be to <code>min</code> and <code>max</code>
 respectively.

 If the absolute distance had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withRangedAbsoluteDistance(min as float, max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                           |
| -------- | ----- | -------------------------------------------------- |
| min      | float | The minimum value the absolute distance should be. |
| max      | float | The maximum value the absolute distance should be. |


:::

:::group{name=withRangedHorizontalDistance}

Sets both the minimum and maximum value the horizontal distance should be to <code>min</code> and
 <code>max</code> respectively.

 If the horizontal distance had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withRangedHorizontalDistance(min as float, max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                             |
| -------- | ----- | ---------------------------------------------------- |
| min      | float | The minimum value the horizontal distance should be. |
| max      | float | The maximum value the horizontal distance should be. |


:::

:::group{name=withRangedX}

Sets both the minimum and maximum value the distance along the X axis should be to <code>min</code> and
 <code>max</code> respectively.

 If the distance had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withRangedX(min as float, max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the X axis should be. |
| max      | float | The maximum value the distance along the X axis should be. |


:::

:::group{name=withRangedY}

Sets both the minimum and maximum value the distance along the Y axis should be to <code>min</code> and
 <code>max</code> respectively.

 If the distance had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withRangedY(min as float, max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the Y axis should be. |
| max      | float | The maximum value the distance along the Y axis should be. |


:::

:::group{name=withRangedZ}

Sets both the minimum and maximum value the distance along the Z axis should be to <code>min</code> and
 <code>max</code> respectively.

 If the distance had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.withRangedZ(min as float, max as float) as DistancePredicate
```

| Параметр | Тип   | Описание                                                   |
| -------- | ----- | ---------------------------------------------------------- |
| min      | float | The minimum value the distance along the Z axis should be. |
| max      | float | The maximum value the distance along the Z axis should be. |


:::


