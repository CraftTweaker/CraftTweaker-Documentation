# FloatingLong

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.FloatingLong;
```

## Static Methods

:::group{name=create}

Creates a [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the given double.

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.create(value as double) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | double | Double to convert |

:::

:::group{name=create}

Creates a [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the given long.

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.create(value as long) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | long | Long to convert |

:::

:::group{name=create}

Creates a [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the given string
representation.

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.create(value as string) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | string | String to parse |

:::

:::group{name=createFromUnsigned}

Creates a [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the given unsigned long.

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.createFromUnsigned(value as long) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | long | Unsigned long to convert |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |

## Methods

:::group{name=add}

Adds the given [FloatingLong](/mods/Mekanism/api/FloatingLong) to
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. 

This
gets clamped at the upper bound of `18,446,744,073,709,551,615.9999` instead of overflowing.

Returns: The [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the value of adding the
given [FloatingLong](/mods/Mekanism/api/FloatingLong) to
this [FloatingLong](/mods/Mekanism/api/FloatingLong).  

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.add(toAdd as FloatingLong) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toAdd | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to add. |

:::

:::group{name=asString}

Converts this floating long to a string

Return Type: string

```zenscript
// FloatingLong.asString() as string

myFloatingLong.asString();
```

:::

:::group{name=compareTo}

Compares this [FloatingLong](/mods/Mekanism/api/FloatingLong) to the
given [FloatingLong](/mods/Mekanism/api/FloatingLong).

Returns: `0` if equal to toCompare

An integer`< 0` if smaller than toCompare
An integer `> 0` if bigger than toCompare  

Return Type: int

```zenscript
FloatingLong.compareTo(toCompare as FloatingLong) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toCompare | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to compare to. |

:::

:::group{name=divide}

Divides this [FloatingLong](/mods/Mekanism/api/FloatingLong) by the
given [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This
gets clamped at the upper bound of `18,446,744,073,709,551,615.9999` instead of overflowing.

Returns: The [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the value of dividing
this [FloatingLong](/mods/Mekanism/api/FloatingLong) by the
given [FloatingLong](/mods/Mekanism/api/FloatingLong).  

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.divide(toDivide as FloatingLong) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toDivide | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to divide by. |

:::

:::group{name=isEqual}

Checks if this [FloatingLong](/mods/Mekanism/api/FloatingLong) is equal to the
given [FloatingLong](/mods/Mekanism/api/FloatingLong).

Returns: `true` if this [FloatingLong](/mods/Mekanism/api/FloatingLong) is equal to the
given [FloatingLong](/mods/Mekanism/api/FloatingLong), `false` otherwise.

Return Type: boolean

```zenscript
FloatingLong.isEqual(toCompare as FloatingLong) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toCompare | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to compare to. |

:::

:::group{name=multiply}

Multiplies the given [FloatingLong](/mods/Mekanism/api/FloatingLong) with
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This
gets clamped at the upper bound of `18,446,744,073,709,551,615.9999` instead of overflowing.

Returns: The [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the value of multiplying
the given [FloatingLong](/mods/Mekanism/api/FloatingLong) with
this [FloatingLong](/mods/Mekanism/api/FloatingLong).  

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.multiply(toMultiply as FloatingLong) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toMultiply | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to multiply by. |

:::

:::group{name=subtract}

Subtracts the given [FloatingLong](/mods/Mekanism/api/FloatingLong) from
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This gets clamped at the lower bound of 0 rather than becoming negative.

Returns: The [FloatingLong](/mods/Mekanism/api/FloatingLong) representing the value of subtracting
the given [FloatingLong](/mods/Mekanism/api/FloatingLong) from
this [FloatingLong](/mods/Mekanism/api/FloatingLong).  

Return Type: [FloatingLong](/mods/Mekanism/api/FloatingLong)

```zenscript
FloatingLong.subtract(toSubtract as FloatingLong) as FloatingLong
```

| Parameter | Type | Description |
|-----------|------|-------------|
| toSubtract | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The [FloatingLong](/mods/Mekanism/api/FloatingLong) to subtract. |

:::

## Operators

:::group{name=SUB}

Subtracts the given [FloatingLong](/mods/Mekanism/api/FloatingLong) from
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This gets clamped at the lower bound of 0 rather than becoming negative.

```zenscript
floatingLongOne - floatingLongTwo
```

:::

:::group{name=ADD}

Adds the given [FloatingLong](/mods/Mekanism/api/FloatingLong) to
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. 

```zenscript
floatingLongOne + floatingLongTwo
```
:::

:::group{name=MUL}

Multiplies the given [FloatingLong](/mods/Mekanism/api/FloatingLong) with
this [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This
gets clamped at the upper bound of `18,446,744,073,709,551,615.9999` instead of overflowing.

```zenscript
floatingLongOne * floatingLongTwo
```

:::

:::group{name=divide}

Divides this [FloatingLong](/mods/Mekanism/api/FloatingLong) by the
given [FloatingLong](/mods/Mekanism/api/FloatingLong) and returns the result in a new object. This
gets clamped at the upper bound of `18,446,744,073,709,551,615.9999` instead of overflowing.

```zenscript
floatingLongOne / floatingLongTwo
```

:::

:::group{name=isEqual}

Checks if this [FloatingLong](/mods/Mekanism/api/FloatingLong) is equal to the
given [FloatingLong](/mods/Mekanism/api/FloatingLong).

```zenscript
floatingLongOne == floatingLongTwo
```

:::

:::group{name=COMPARE}

Compares this [FloatingLong](/mods/Mekanism/api/FloatingLong) to the
given [FloatingLong](/mods/Mekanism/api/FloatingLong).

:::



