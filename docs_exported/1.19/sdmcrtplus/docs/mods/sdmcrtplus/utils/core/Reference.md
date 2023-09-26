# Reference&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.core.Reference;
```


## Implemented Interfaces
Reference implements the following interfaces. That means all methods defined in these interfaces are also available in Reference

- [Holder](/mods/sdmcrtplus/utils/core/Holder)&lt;T&gt;

## Methods

:::group{name=getKey}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;T&gt;

```zenscript
Reference.getKey<T : Object>() as ResourceKey<T>
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getType}

Return Type: [ReferenceType](/mods/sdmcrtplus/utils/core/ReferenceType)

```zenscript
Reference.getType<T : Object>() as ReferenceType
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


## Properties

| Name |                             Type                              | Has Getter | Has Setter |
|------|---------------------------------------------------------------|------------|------------|
| key  | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;T&gt; | true       | false      |
| type | [ReferenceType](/mods/sdmcrtplus/utils/core/ReferenceType)    | true       | false      |

