# EffectData

Holds the data an [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) should have to pass a parent predicate check.

 This predicate can check various properties of the effect, such as its duration or amplifier value. It is also able to verify whether the effect has been applied by the ambient or by a potion and whether the effect has visible particles or not.

 By default, no restrictions are placed on the effect's data.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EffectData;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EffectData extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EffectData

## 使用方式

:::group{name=withAmbient}

Indicates that the effect must be environmental.

 An example of such effect is the one applied by a beacon.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
// EffectData.withAmbient() as EffectData

myEffectData.withAmbient();
```

:::

:::group{name=withBoundedAmplifier}

Sets both the minimum and maximum value the amplifier should be to <code>min</code> and <code>max</code>
 respectively.

 If the amplifier had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withBoundedAmplifier(min as int, max as int) as EffectData
```

| 参数  | 类型  | 描述                                         |
| --- | --- | ------------------------------------------ |
| min | int | The minimum value the amplifier should be. |
| max | int | The maximum value the amplifier should be. |


:::

:::group{name=withBoundedDuration}

Sets both the minimum and maximum value the duration should be to <code>min</code> and <code>max</code>
 respectively.

 If the duration had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withBoundedDuration(min as int, max as int) as EffectData
```

| 参数  | 类型  | 描述                                        |
| --- | --- | ----------------------------------------- |
| min | int | The minimum value the duration should be. |
| max | int | The maximum value the duration should be. |


:::

:::group{name=withExactAmplifier}

Sets the amplifier to exactly match the given <code>value</code>.

 If the amplifier had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withExactAmplifier(value as int) as EffectData
```

| 参数    | 类型  | 描述                                       |
| ----- | --- | ---------------------------------------- |
| value | int | The exact value the amplifier should be. |


:::

:::group{name=withExactDuration}

Sets the duration to exactly match the given <code>value</code>.

 If the duration had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withExactDuration(value as int) as EffectData
```

| 参数    | 类型  | 描述                                      |
| ----- | --- | --------------------------------------- |
| value | int | The exact value the duration should be. |


:::

:::group{name=withInvisibility}

Indicates that the effect's particles must be invisible.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
// EffectData.withInvisibility() as EffectData

myEffectData.withInvisibility();
```

:::

:::group{name=withMaximumAmplifier}

Sets the maximum value the amplifier should be to <code>max</code>.

 If the amplifier had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the amplifier didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withMaximumAmplifier(max as int) as EffectData
```

| 参数  | 类型  | 描述                                         |
| --- | --- | ------------------------------------------ |
| max | int | The maximum value the amplifier should be. |


:::

:::group{name=withMaximumDuration}

Sets the maximum value the duration should be to <code>max</code>.

 If the duration had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the duration didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withMaximumDuration(max as int) as EffectData
```

| 参数  | 类型  | 描述                                        |
| --- | --- | ----------------------------------------- |
| max | int | The maximum value the duration should be. |


:::

:::group{name=withMinimumAmplifier}

Sets the minimum value the amplifier should be to <code>min</code>.

 If the amplifier had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the amplifier didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withMinimumAmplifier(min as int) as EffectData
```

| 参数  | 类型  | 描述                                         |
| --- | --- | ------------------------------------------ |
| min | int | The minimum value the amplifier should be. |


:::

:::group{name=withMinimumDuration}

Sets the minimum value the duration should be to <code>min</code>.

 If the duration had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the duration didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
EffectData.withMinimumDuration(min as int) as EffectData
```

| 参数  | 类型  | 描述                                        |
| --- | --- | ----------------------------------------- |
| min | int | The minimum value the duration should be. |


:::

:::group{name=withVisibility}

Indicates that the effect's particles must be visible.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
// EffectData.withVisibility() as EffectData

myEffectData.withVisibility();
```

:::

:::group{name=withoutAmbient}

Indicates that the effect must not be environmental.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EffectData](/vanilla/api/predicate/EffectData)

```zenscript
// EffectData.withoutAmbient() as EffectData

myEffectData.withoutAmbient();
```

:::


