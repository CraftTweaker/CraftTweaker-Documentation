# IdMap&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.IdMap;
```


## Implemented Interfaces
IdMap implements the following interfaces. That means all methods defined in these interfaces are also available in IdMap

- stdlib.Iterable&lt;T&gt;

## Methods

:::group{name=byId}

Return Type: T

```zenscript
IdMap.byId<T : Object>(id as int) as T
```

| Parameter |  Type  |
|-----------|--------|
| id        | int    |
| T         | Object |


:::

:::group{name=byIdOrThrow}

Return Type: T

```zenscript
IdMap.byIdOrThrow<T : Object>(id as int) as T
```

| Parameter |  Type  |
|-----------|--------|
| id        | int    |
| T         | Object |


:::

:::group{name=getId}

Return Type: int

```zenscript
IdMap.getId<T : Object>(T as T) as int
```

| Parameter |  Type  |
|-----------|--------|
| T         | T      |
| T         | Object |


:::

:::group{name=size}

Return Type: int

```zenscript
IdMap.size<T : Object>() as int
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


