# RandomSource

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.RandomSource;
```


## Методы

:::group{name=nextBoolean}

Return Type: boolean

```zenscript
// RandomSource.nextBoolean() as boolean

myRandomSource.nextBoolean();
```

:::

:::group{name=nextDouble}

Return Type: double

```zenscript
// RandomSource.nextDouble() as double

myRandomSource.nextDouble();
```

:::

:::group{name=nextFloat}

Return Type: float

```zenscript
// RandomSource.nextFloat() as float

myRandomSource.nextFloat();
```

:::

:::group{name=nextGaussian}

Return Type: double

```zenscript
// RandomSource.nextGaussian() as double

myRandomSource.nextGaussian();
```

:::

:::group{name=nextInt}

Return Type: int

```zenscript
// RandomSource.nextInt() as int

myRandomSource.nextInt();
```

:::

:::group{name=nextInt}

Return Type: int

```zenscript
RandomSource.nextInt(bound as int) as int
```

| Параметр | Тип |
| -------- | --- |
| bound    | int |


:::

:::group{name=nextInt}

Return Type: int

```zenscript
RandomSource.nextInt(bound as int, origin as int) as int
```

| Параметр | Тип |
| -------- | --- |
| bound    | int |
| origin   | int |


:::

:::group{name=nextIntBetweenInclusive}

Return Type: int

```zenscript
RandomSource.nextIntBetweenInclusive(origin as int, bound as int) as int
```

| Параметр | Тип |
| -------- | --- |
| origin   | int |
| bound    | int |


:::

:::group{name=nextLong}

Return Type: long

```zenscript
// RandomSource.nextLong() as long

myRandomSource.nextLong();
```

:::


