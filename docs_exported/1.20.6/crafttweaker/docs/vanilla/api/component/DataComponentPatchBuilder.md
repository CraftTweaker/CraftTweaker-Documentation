# DataComponentPatchBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.DataComponentPatchBuilder;
```


## Methods

:::group{name=build}

Return Type: [DataComponentPatch](/vanilla/api/component/DataComponentPatch)

```zenscript
// DataComponentPatchBuilder.build() as DataComponentPatch

myDataComponentPatchBuilder.build();
```

:::

:::group{name=remove}

Return Type: [DataComponentPatchBuilder](/vanilla/api/component/DataComponentPatchBuilder)

```zenscript
DataComponentPatchBuilder.remove<T : Object>(type as DataComponentType<T>) as DataComponentPatchBuilder
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=setComponent}

Return Type: [DataComponentPatchBuilder](/vanilla/api/component/DataComponentPatchBuilder)

```zenscript
DataComponentPatchBuilder.setComponent<T : Object>(type as TypedDataComponent<T>) as DataComponentPatchBuilder
```

| Parameter |                                   Type                                   |
|-----------|--------------------------------------------------------------------------|
| type      | [TypedDataComponent](/vanilla/api/component/TypedDataComponent)&lt;T&gt; |
| T         | Object                                                                   |


:::

:::group{name=setComponent}

Return Type: [DataComponentPatchBuilder](/vanilla/api/component/DataComponentPatchBuilder)

```zenscript
DataComponentPatchBuilder.setComponent<T : Object>(type as DataComponentType<T>, value as T) as DataComponentPatchBuilder
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value     | T                                                                      |
| T         | Object                                                                 |


:::


