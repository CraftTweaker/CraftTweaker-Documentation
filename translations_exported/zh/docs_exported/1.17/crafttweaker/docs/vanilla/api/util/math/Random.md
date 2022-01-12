# Random

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Random;
```


## 使用方式

:::group{name=nextBoolean}

Return Type: boolean

```zenscript
// Random.nextBoolean() as boolean

myRandom.nextBoolean();
```

:::

:::group{name=nextDouble}

Returns the next pseudorandom, uniformly distributed double value between 0.0 and 1.0 from this random number generator's sequence.

Return Type: double

```zenscript
// Random.nextDouble() as double

myRandom.nextDouble();
```

:::

:::group{name=nextFloat}

Returns the next pseudorandom, uniformly distributed float value between 0.0f and 1.0f from this random number generator's sequence.

Return Type: float

```zenscript
// Random.nextFloat() as float

myRandom.nextFloat();
```

:::

:::group{name=nextInt}

Returns the next pseudorandom, uniformly distributed int value from this random number generator's sequence.

Return Type: int

```zenscript
// Random.nextInt() as int

myRandom.nextInt();
```

:::

:::group{name=nextInt}

Returns the next pseudorandom, uniformly distributed int value between zero (inclusive) and bound (exclusive) from this random number generator's sequence

Return Type: int

```zenscript
Random.nextInt(bound as int) as int
```

| 参数    | 类型  | 描述                                             |
| ----- | --- | ---------------------------------------------- |
| bound | int | the upper bound (exclusive). Must be positive. |


:::


