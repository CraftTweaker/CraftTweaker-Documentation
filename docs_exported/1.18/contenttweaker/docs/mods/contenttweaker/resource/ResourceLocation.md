# ResourceLocation

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.resource.ResourceLocation;
```


## Implemented Interfaces
ResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceLocation

- Comparable&lt;[ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)&gt;

## Static Methods

:::group{name=of}

Return Type: [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)

```zenscript
ResourceLocation.of(namespace as string, path as string) as ResourceLocation
```

| Parameter |  Type  |
|-----------|--------|
| namespace | string |
| path      | string |


:::

## Casters

| Result Type | Is Implicit |
|-------------|-------------|
| string      | true        |

## Properties

|   Name    |  Type  | Has Getter | Has Setter |
|-----------|--------|------------|------------|
| namespace | string | true       | false      |
| path      | string | true       | false      |

