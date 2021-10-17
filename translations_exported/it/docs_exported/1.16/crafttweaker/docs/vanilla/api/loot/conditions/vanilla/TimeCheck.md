# TimeCheck

Builder for the 'TimeCheck' loot condition.

 This condition checks the current game time, counted from day 0, making sure that it fits within some defined boundaries. The checked time may undergo a modulo operation if desired, to ensure that the time period doesn't increase infinitely or to restrict the game time to a specific portion of the world time.

 A 'TimeCheck' condition requires at least a minimum or a maximum bound for the world time. Moreover, the time period must not be negative, if such a value gets specified.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.TimeCheck;
```


## Interfacce Implementate
TimeCheck implements the following interfaces. That means all methods defined in these interfaces are also available in TimeCheck

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Metodi

:::group{name=withExactValue}

Sets the game time to exactly match the given <code>value</code>.

 If the game time had already some bounds specified, then the bounds will get overwritten.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [TimeCheck](/vanilla/api/loot/conditions/vanilla/TimeCheck)

```zenscript
TimeCheck.withExactValue(value as int) as TimeCheck
```

| Parametro | Tipo | Descrizione                               |
| --------- | ---- | ----------------------------------------- |
| valore    | int  | The exact value the world time must have. |


:::

:::group{name=withMaximumValue}

Sets the maximum value of the game time to <code>max</code>.

 If the game time had already some bounds specified, then the maximum value of the bound will be overwritten with the new value specified in <code>min</code>. On the other hand, if the game time didn't have any specified bounds, the maximum value is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [TimeCheck](/vanilla/api/loot/conditions/vanilla/TimeCheck)

```zenscript
TimeCheck.withMaximumValue(max as int) as TimeCheck
```

| Parametro | Tipo | Descrizione                               |
| --------- | ---- | ----------------------------------------- |
| max       | int  | The maximum value the game time can have. |


:::

:::group{name=withMinimumValue}

Sets the minimum value of the game time to <code>min</code>.

 If the game time had already some bounds specified, then the minimum value of the bound will be overwritten with the new value specified in <code>min</code>. On the other hand, if the game time didn't have any specified bounds, the minimum value is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [TimeCheck](/vanilla/api/loot/conditions/vanilla/TimeCheck)

```zenscript
TimeCheck.withMinimumValue(min as int) as TimeCheck
```

| Parametro | Tipo | Descrizione                               |
| --------- | ---- | ----------------------------------------- |
| min       | int  | The minimum value the game time can have. |


:::

:::group{name=withRangedValue}

Sets both the minimum and maximum values of the game time respectively to <code>min</code> and <code>max</code>.

 If the game time had already some bounds specified, then the bounds will get completely overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [TimeCheck](/vanilla/api/loot/conditions/vanilla/TimeCheck)

```zenscript
TimeCheck.withRangedValue(min as int, max as int) as TimeCheck
```

| Parametro | Tipo | Descrizione                               |
| --------- | ---- | ----------------------------------------- |
| min       | int  | The minimum value the game time can have. |
| max       | int  | The maximum value the game time can have. |


:::

:::group{name=withTimePeriod}

Sets the time period to use for the modulo operation.

 This effectively restricts the value of the time to check between 0 (inclusive) and <code>period</code>
 (exclusive), making it particularly useful to track elements such as days or weeks. As an example, the value to give <code>period</code> to track day time is 24000.

 A value of 0 disables the operation from being carried out. On the other hand a negative value is forbidden.

Returns: This builder for chaining.  
Return Type: [TimeCheck](/vanilla/api/loot/conditions/vanilla/TimeCheck)

```zenscript
TimeCheck.withTimePeriod(period as int) as TimeCheck
```

| Parametro | Tipo | Descrizione                                      |
| --------- | ---- | ------------------------------------------------ |
| period    | int  | The time period to use for the modulo operation. |


:::


