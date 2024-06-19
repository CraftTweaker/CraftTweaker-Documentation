# ResourceLocation

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.resource.ResourceLocation;
```


## Implemented Interfaces
ResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceLocation

- stdlib.Comparable&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

## Static Methods

:::group{name=fromNamespaceAndPath}

Creates a new ResourceLocation from the given namespace and path

Returns: A new ResourceLocation from the given values.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ResourceLocation.fromNamespaceAndPath(namespace as string, path as string) as ResourceLocation

ResourceLocation.fromNamespaceAndPath("crafttweaker", "some-path/to.1");
```

| Parameter |  Type  |                                          Description                                           |
|-----------|--------|------------------------------------------------------------------------------------------------|
| namespace | string | The namespace of the resource, usually a modid                                                 |
| path      | string | The path of the resource, May only contain lower-cased alphanumeric values, as well as / and _ |


:::

:::group{name=parse}

Creates a new ResourceLocation from the given string.

Returns: A new ResourceLocation from the given id  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ResourceLocation.parse(id as string) as ResourceLocation

ResourceLocation.parse("crafttweaker:some-path/to.1");
```

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| id        | string | The ResourceLocation to parse. |


:::

## Casters

|           Result Type            | Is Implicit |
|----------------------------------|-------------|
| [IData](/vanilla/api/data/IData) | true        |
| string                           | true        |

## Methods

:::group{name=asData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ResourceLocation.asData() as IData

myResourceLocation.asData();
```

:::

:::group{name=compareTo}

Return Type: int

```zenscript
ResourceLocation.compareTo(other as ResourceLocation) as int
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| other     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
ResourceLocation.equals(other as Object) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| other     | Object |


:::

:::group{name=getNamespace}

Return Type: string

```zenscript
// ResourceLocation.getNamespace() as string

myResourceLocation.getNamespace();
```

:::

:::group{name=getPath}

Return Type: string

```zenscript
// ResourceLocation.getPath() as string

myResourceLocation.getPath();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// ResourceLocation.hashCode() as int

myResourceLocation.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// ResourceLocation.toString() as string

myResourceLocation.toString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |
| namespace     | string | true       | false      |
| path          | string | true       | false      |

