# Random

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Random;
```


## Methods

:::group{name=getRandomUUID}

Return Type: string

```zenscript
// Random.getRandomUUID() as string

myRandom.getRandomUUID();
```

:::

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

:::group{name=nextDouble}

Returns the next pseudorandom double. Its range is [min, max]

Return Type: double

```zenscript
Random.nextDouble(min as double, max as double) as double
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| min       | double | No Description Provided |
| max       | double | No Description Provided |


:::

:::group{name=nextFloat}

Returns the next pseudorandom, uniformly distributed float value between 0.0f and 1.0f from this random number generator's sequence.

Return Type: float

```zenscript
// Random.nextFloat() as float

myRandom.nextFloat();
```

:::

:::group{name=nextFloat}

Returns the next pseudorandom float. Its range is [min, max]

Return Type: float

```zenscript
Random.nextFloat(min as float, max as float) as float
```

| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| min       | float | No Description Provided |
| max       | float | No Description Provided |


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

| Parameter | Type | Description                                    |
| --------- | ---- | ---------------------------------------------- |
| bound     | int  | the upper bound (exclusive). Must be positive. |


:::

:::group{name=nextInt}

Returns the next pseudorandom int. Its range is [min, max]

Return Type: int

```zenscript
Random.nextInt(min as int, max as int) as int
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| min       | int  | No Description Provided |
| max       | int  | No Description Provided |


:::


