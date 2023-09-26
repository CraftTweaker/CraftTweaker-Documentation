# Either&LT;L : Object, R : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.Either;
```


## Implemented Interfaces
Either implements the following interfaces. That means all methods defined in these interfaces are also available in Either

- [App](/mods/sdmcrtplus/utils/core/kinds/App)&lt;[EitherMu](/mods/sdmcrtplus/utils/core/EitherMu)&lt;R&gt;,L&gt;

## Methods

:::group{name=left}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;L&gt;

```zenscript
Either.left<L : Object, R : Object>() as Optional<L>
```

| Parameter |  Type  |
|-----------|--------|
| L         | Object |
| R         | Object |


:::

:::group{name=right}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;R&gt;

```zenscript
Either.right<L : Object, R : Object>() as Optional<R>
```

| Parameter |  Type  |
|-----------|--------|
| L         | Object |
| R         | Object |


:::

:::group{name=swap}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)&lt;R,L&gt;

```zenscript
Either.swap<L : Object, R : Object>() as Either<R,L>
```

| Parameter |  Type  |
|-----------|--------|
| L         | Object |
| R         | Object |


:::


