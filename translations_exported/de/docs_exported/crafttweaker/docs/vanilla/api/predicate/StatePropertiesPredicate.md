# StatePropertiesPredicate

Represents a predicate for a [MCBlock](/vanilla/api/block/MCBlock) or [MCFluid](/vanilla/api/fluid/MCFluid) state properties.

 This predicate can check an arbitrary amount of properties either for an exact match or a value that is within the range of allowed values. The predicate is <strong>not</strong> able to check for the absence of a state property, and requires all specified properties to be present on the targeted state.

 By default, no properties are checked, effectively allowing any block or fluid state.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.StatePropertiesPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

StatePropertiesPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in StatePropertiesPredicate

## Methoden

:::group{name=withExactProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with a boolean value that should be matched exactly.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing an integer with a boolean is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withExactProperty(name as string, value as boolean) as StatePropertiesPredicate
```

| Parameter | Type    | Beschreibung                              |
| --------- | ------- | ----------------------------------------- |
| name      | string  | The name of the property to check.        |
| value     | boolean | The boolean value the property must have. |


:::

:::group{name=withExactProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with an integer value that should be matched exactly.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing a string with an integer is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withExactProperty(name as string, value as int) as StatePropertiesPredicate
```

| Parameter | Type   | Beschreibung                              |
| --------- | ------ | ----------------------------------------- |
| name      | string | The name of the property to check.        |
| value     | int    | The integer value the property must have. |


:::

:::group{name=withExactProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with a string value that should be matched exactly.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing an integer with a string is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withExactProperty(name as string, value as string) as StatePropertiesPredicate
```

| Parameter | Type   | Beschreibung                             |
| --------- | ------ | ---------------------------------------- |
| name      | string | The name of the property to check.       |
| value     | string | The string value the property must have. |


:::

:::group{name=withLowerBoundedProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with a lower limit on the integer values the property can assume, set to <code>min</code>.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing a string with an integer is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withLowerBoundedProperty(name as string, min as int) as StatePropertiesPredicate
```

| Parameter | Type   | Beschreibung                                      |
| --------- | ------ | ------------------------------------------------- |
| name      | string | The name of the property to check.                |
| min       | int    | The minimum integer value the property must have. |


:::

:::group{name=withRangedProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with a range that goes from <code>min</code> to <code>max</code> in which the integer value should be.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing a string with an integer is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withRangedProperty(name as string, min as int, max as int) as StatePropertiesPredicate
```

| Parameter | Type   | Beschreibung                                      |
| --------- | ------ | ------------------------------------------------- |
| name      | string | The name of the property to check.                |
| min       | int    | The minimum integer value the property must have. |
| max       | int    | The maximum integer value the property must have. |


:::

:::group{name=withRangedProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with a range that goes from <code>min</code> to <code>max</code> in which the string value should be.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing an integer with a string is allowed).

 A null value in either <code>min</code> or <code>max</code> is considered as an unbounded limit, effectively making the interval open on one side.

 A null value in both <code>min</code> and <code>max</code> is treated as a simple presence check, without caring about the actual value of the property.

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withRangedProperty(name as string, min as string?, max as string?) as StatePropertiesPredicate
```

| Parameter | Type    | Beschreibung                                                                           |
| --------- | ------- | -------------------------------------------------------------------------------------- |
| name      | string  | The name of the property to check.                                                     |
| min       | string? | The minimum string value the property must have, or null to indicate no minimum value. |
| max       | string? | The maximum string value the property must have, or null to indicate no maximum value. |


:::

:::group{name=withUpperBoundedProperty}

Adds the property <code>name</code> to the list of properties that should be matched, along with an upper limit on the integer values the property can assume, set to <code>max</code>.

 If the same property had already been specified, then the previous value is replaced, no matter the resulting type (i.e. replacing a string with an integer is allowed).

Returns: This predicate for chaining.  
Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
StatePropertiesPredicate.withUpperBoundedProperty(name as string, max as int) as StatePropertiesPredicate
```

| Parameter | Type   | Beschreibung                                      |
| --------- | ------ | ------------------------------------------------- |
| name      | string | The name of the property to check.                |
| max       | int    | The maximum integer value the property must have. |


:::


