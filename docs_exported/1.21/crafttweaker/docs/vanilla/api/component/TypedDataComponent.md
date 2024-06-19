# TypedDataComponent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.TypedDataComponent;
```


## Extending Record

TypedDataComponent extends Record. That means all methods available in Record are also available in TypedDataComponent

## Static Methods

:::group{name=of}

Return Type: [TypedDataComponent](/vanilla/api/component/TypedDataComponent)&lt;T&gt;

```zenscript
TypedDataComponent.of<T : Object>(type as DataComponentType<T>, value as T) as TypedDataComponent<T>
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value     | T                                                                      |
| T         | Object                                                                 |


:::

## Casters

|           Result Type            | Is Implicit |
|----------------------------------|-------------|
| [IData](/vanilla/api/data/IData) | true        |

## Methods

:::group{name=applyTo}

```zenscript
TypedDataComponent.applyTo<T : Object>(patchedMap as invalid)
```

| Parameter  |    Type     |
|------------|-------------|
| patchedMap | **invalid** |
| T          | Object      |


:::

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// TypedDataComponent.asIData() as IData

myTypedDataComponent.asIData();
```

:::

:::group{name=type}

Return Type: [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt;

```zenscript
TypedDataComponent.type<T : Object>() as DataComponentType<T>
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=value}

Return Type: T

```zenscript
TypedDataComponent.value<T : Object>() as T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


## Properties

|     Name     |                            Type                            | Has Getter | Has Setter |
|--------------|------------------------------------------------------------|------------|------------|
| registryName | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

