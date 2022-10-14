# ResourceLocation

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.resource.ResourceLocation;
```


## Implemented Interfaces
ResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceLocation

- Comparable&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

## Constructors


```zenscript
new ResourceLocation(namespace as string, path as string) as ResourceLocation
```
| Parameter | Type   | Description                                                          |
| --------- | ------ | -------------------------------------------------------------------- |
| namespace | string | Usually a ModId                                                      |
| path      | string | May only contain lower-cased alphanumeric values, as well as / and _ |



## Casters

| 반환 자료형                           | 암묵적  |
| -------------------------------- | ---- |
| [IData](/vanilla/api/data/IData) | true |
| string                           | true |

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

| Parameter | Type                                                       | Description             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| other     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
ResourceLocation.equals(other as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| other     | Object | No Description Provided |


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

| 이름            | Type   | Has Getter | Has Setter | Description             |
| ------------- | ------ | ---------- | ---------- | ----------------------- |
| commandString | string | true       | false      | No Description Provided |
| namespace     | string | true       | false      | No Description Provided |
| path          | string | true       | false      | No Description Provided |

