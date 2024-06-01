# DataComponentMap

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.DataComponentMap;
```


## Implemented Interfaces
DataComponentMap implements the following interfaces. That means all methods defined in these interfaces are also available in DataComponentMap

- stdlib.Iterable&lt;[TypedDataComponent](/vanilla/api/component/TypedDataComponent)&gt;

## Static Methods

:::group{name=builder}

Return Type: [DataComponentMapBuilder](/vanilla/api/component/DataComponentMapBuilder)

```zenscript
// DataComponentMap.builder() as DataComponentMapBuilder

DataComponentMap.builder();
```

:::

:::group{name=composite}

Return Type: [DataComponentMap](/vanilla/api/component/DataComponentMap)

```zenscript
DataComponentMap.composite(a as DataComponentMap, b as DataComponentMap) as DataComponentMap
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| a         | [DataComponentMap](/vanilla/api/component/DataComponentMap) |
| b         | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

## Methods

:::group{name=getComponent}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
DataComponentMap.getComponent<T : Object>(type as DataComponentType<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=getOrDefault}

Return Type: T

```zenscript
DataComponentMap.getOrDefault<T : Object>(type as DataComponentType<T>, defaultValue as T) as T
```

|  Parameter   |                                  Type                                  |
|--------------|------------------------------------------------------------------------|
| type         | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| defaultValue | T                                                                      |
| T            | Object                                                                 |


:::

:::group{name=getTyped}

Return Type: [TypedDataComponent](/vanilla/api/component/TypedDataComponent)&lt;T&gt;?

```zenscript
DataComponentMap.getTyped<T : Object>(type as DataComponentType<T>) as TypedDataComponent<T>?
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=has}

Return Type: boolean

```zenscript
DataComponentMap.has(type as DataComponentType) as boolean
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |


:::


## Properties

|  Name   |                                        Type                                        | Has Getter | Has Setter |
|---------|------------------------------------------------------------------------------------|------------|------------|
| isEmpty | boolean                                                                            | true       | false      |
| keySet  | Set&lt;[DataComponentType](/vanilla/api/component/DataComponentType)&gt;           | true       | false      |
| list    | stdlib.List&lt;[TypedDataComponent](/vanilla/api/component/TypedDataComponent)&gt; | true       | false      |
| size    | int                                                                                | true       | false      |

