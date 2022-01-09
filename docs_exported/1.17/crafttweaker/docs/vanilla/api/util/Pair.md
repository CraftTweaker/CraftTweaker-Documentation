# Pair

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Pair;
```


## Static Methods

:::group{name=of}

Return Type: [Pair](/vanilla/api/util/Pair)&lt;F,S&gt;

```zenscript
Pair.of<F : Object, S : Object>(first as F, second as S) as Pair<F,S>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| first | F | No Description Provided |
| second | S | No Description Provided |
| F | Object | No Description Provided |
| S | Object | No Description Provided |


:::

## Methods

:::group{name=getFirst}

Return Type: F

```zenscript
Pair.getFirst<F : Object, S : Object>() as F
```

| Parameter | Type | Description |
|-----------|------|-------------|
| F | Object | No Description Provided |
| S | Object | No Description Provided |


:::

:::group{name=getSecond}

Return Type: S

```zenscript
Pair.getSecond<F : Object, S : Object>() as S
```

| Parameter | Type | Description |
|-----------|------|-------------|
| F | Object | No Description Provided |
| S | Object | No Description Provided |


:::

:::group{name=mapFirst}

Return Type: [Pair](/vanilla/api/util/Pair)&lt;F2,S&gt;

```zenscript
Pair.mapFirst<F : Object, S : Object, F2 : Object>(function as Function<F,F2>) as Pair<F2,S>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| function | Function&lt;F,F2&gt; | No Description Provided |
| F | Object | No Description Provided |
| S | Object | No Description Provided |
| F2 | Object | No Description Provided |


:::

:::group{name=mapSecond}

Return Type: [Pair](/vanilla/api/util/Pair)&lt;F,S2&gt;

```zenscript
Pair.mapSecond<F : Object, S : Object, S2 : Object>(function as Function<S,S2>) as Pair<F,S2>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| function | Function&lt;S,S2&gt; | No Description Provided |
| F | Object | No Description Provided |
| S | Object | No Description Provided |
| S2 | Object | No Description Provided |


:::

:::group{name=swap}

Return Type: [Pair](/vanilla/api/util/Pair)&lt;S,F&gt;

```zenscript
Pair.swap<F : Object, S : Object>() as Pair<S,F>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| F | Object | No Description Provided |
| S | Object | No Description Provided |


:::


