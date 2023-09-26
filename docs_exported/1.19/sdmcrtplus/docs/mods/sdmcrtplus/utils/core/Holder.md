# Holder&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.Holder;
```


## Implemented Interfaces
Holder implements the following interfaces. That means all methods defined in these interfaces are also available in Holder

- [Supplier](/mods/sdmcrtplus/utils/Supplier)&lt;T&gt;

## Methods

:::group{name=contain}

Return Type: boolean

```zenscript
Holder.contain<T : Object>(resourceLocation as ResourceLocation) as boolean
```

|    Parameter     |                            Type                            |
|------------------|------------------------------------------------------------|
| resourceLocation | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| T                | Object                                                     |


:::

:::group{name=isBound}

Return Type: boolean

```zenscript
Holder.isBound<T : Object>() as boolean
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=kind}

Return Type: [Kind](/mods/sdmcrtplus/utils/core/Kind)

```zenscript
Holder.kind<T : Object>() as Kind
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=tags}

Return Type: **invalid**

```zenscript
Holder.tags<T : Object>() as invalid
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=unwrap}

Return Type: [Either](/mods/sdmcrtplus/utils/core/Either)

```zenscript
Holder.unwrap<T : Object>() as Either
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=unwrapKey}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)

```zenscript
Holder.unwrapKey<T : Object>() as Optional
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=value}

Return Type: T

```zenscript
Holder.value<T : Object>() as T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


## Properties

|   Name    |                       Type                       | Has Getter | Has Setter |
|-----------|--------------------------------------------------|------------|------------|
| isBound   | boolean                                          | true       | false      |
| kind      | [Kind](/mods/sdmcrtplus/utils/core/Kind)         | true       | false      |
| tags      | **invalid**                                      | true       | false      |
| unwrap    | [Either](/mods/sdmcrtplus/utils/core/Either)     | true       | false      |
| unwrapKey | [Optional](/mods/sdmcrtplus/utils/core/Optional) | true       | false      |
| value     | T                                                | true       | false      |

