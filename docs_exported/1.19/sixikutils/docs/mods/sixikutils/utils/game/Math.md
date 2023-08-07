# Math

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.misc.Math;
```


## Static Methods

:::group{name=getPercentageRatio}

Return Type: double

```zenscript
Math.getPercentageRatio(num1 as double, num2 as double, rounding as boolean) as double
```

| Parameter |  Type   |
|-----------|---------|
| num1      | double  |
| num2      | double  |
| rounding  | boolean |


:::

## Methods

:::group{name=getPercent}



Return Type: double

```zenscript
Math.getPercent(num as double, percent as int, type as int) as double
```

| Parameter |  Type  |               Description               |
|-----------|--------|-----------------------------------------|
| num       | double |                                         |
| percent   | int    |                                         |
| type      | int    | from 1 to 3. Different execution logic. |


:::


