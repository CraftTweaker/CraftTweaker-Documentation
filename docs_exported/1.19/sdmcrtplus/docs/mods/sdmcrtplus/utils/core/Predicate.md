# Predicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.Predicate;
```


## Methods

:::group{name=and}

Return Type: [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt;

```zenscript
Predicate.and<T : Object>(predicate2 as Predicate<T>) as Predicate<T>
```

| Parameter  |                            Type                             |
|------------|-------------------------------------------------------------|
| predicate2 | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt; |
| T          | Object                                                      |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
Predicate.equals<T : Object>(T as Predicate<T>) as boolean
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| T         | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt; |
| T         | Object                                                      |


:::

:::group{name=negate}

Return Type: [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt;

```zenscript
Predicate.negate<T : Object>() as Predicate<T>
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=or}

Return Type: [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt;

```zenscript
Predicate.or<T : Object>(predicate2 as Predicate<T>) as Predicate<T>
```

| Parameter  |                            Type                             |
|------------|-------------------------------------------------------------|
| predicate2 | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;T&gt; |
| T          | Object                                                      |


:::

:::group{name=test}

Return Type: boolean

```zenscript
Predicate.test<T : Object>(T as T) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| T         | T      |
| T         | Object |


:::


