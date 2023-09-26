# WeightedRandomList&LT;E : WeightedEntry&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.random.WeightedRandomList;
```


## Methods

:::group{name=getRandom}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;E&gt;

```zenscript
WeightedRandomList.getRandom<E : WeightedEntry>(randomSource as RandomSource) as Optional<E>
```

|  Parameter   |                             Type                             |
|--------------|--------------------------------------------------------------|
| randomSource | [RandomSource](/vanilla/api/util/math/RandomSource)          |
| E            | [WeightedEntry](/mods/sdmcrtplus/utils/random/WeightedEntry) |


:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
WeightedRandomList.isEmpty<E : WeightedEntry>() as boolean
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| E         | [WeightedEntry](/mods/sdmcrtplus/utils/random/WeightedEntry) |


:::

:::group{name=unwrap}

Return Type: stdlib.List&lt;E&gt;

```zenscript
WeightedRandomList.unwrap<E : WeightedEntry>() as stdlib.List<E>
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| E         | [WeightedEntry](/mods/sdmcrtplus/utils/random/WeightedEntry) |


:::


