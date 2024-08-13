# DataComponentPatch

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.DataComponentPatch;
```


## Static Methods

:::group{name=builder}

Return Type: [DataComponentPatchBuilder](/vanilla/api/component/DataComponentPatchBuilder)

```zenscript
// DataComponentPatch.builder() as DataComponentPatchBuilder

DataComponentPatch.builder();
```

:::

## Methods

:::group{name=forget}

Return Type: [DataComponentPatch](/vanilla/api/component/DataComponentPatch)

```zenscript
DataComponentPatch.forget<T : Object>(component as DataComponentType<T>) as DataComponentPatch
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| component | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=getComponent}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
DataComponentPatch.getComponent<T : Object>(type as DataComponentType<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=split}

Return Type: [DataComponentPatchSplitResult](/vanilla/api/component/DataComponentPatchSplitResult)

```zenscript
// DataComponentPatch.split() as DataComponentPatchSplitResult

myDataComponentPatch.split();
```

:::


## Properties

|  Name   |  Type   | Has Getter | Has Setter |
|---------|---------|------------|------------|
| isEmpty | boolean | true       | false      |
| size    | int     | true       | false      |

