# PositionalRandomFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.PositionalRandomFactory;
```


## Methods

:::group{name=at}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
PositionalRandomFactory.at(pos as BlockPos) as RandomSource
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=fromHashOf}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
PositionalRandomFactory.fromHashOf(rs as ResourceLocation) as RandomSource
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| rs        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=fromHashOf}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
PositionalRandomFactory.fromHashOf(rs as string) as RandomSource
```

| Parameter |  Type  |
|-----------|--------|
| rs        | string |


:::

:::group{name=toString}

Return Type: string

```zenscript
// PositionalRandomFactory.toString() as string

myPositionalRandomFactory.toString();
```

:::


