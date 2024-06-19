# ResourceKey

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.resource.ResourceKey;
```


## Implemented Interfaces
ResourceKey implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceKey

- stdlib.Comparable&lt;[ResourceKey](/vanilla/api/resource/ResourceKey)&gt;

## Static Methods

:::group{name=create}

Return Type: [ResourceKey](/vanilla/api/resource/ResourceKey)

```zenscript
ResourceKey.create(base as ResourceKey, location as ResourceLocation) as ResourceKey
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| base      | [ResourceKey](/vanilla/api/resource/ResourceKey)           |
| location  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=createRegistryKey}

Return Type: [ResourceKey](/vanilla/api/resource/ResourceKey)

```zenscript
ResourceKey.createRegistryKey(location as ResourceLocation) as ResourceKey
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| location  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=location}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ResourceKey.location() as ResourceLocation

myResourceKey.location();
```

:::

:::group{name=registry}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ResourceKey.registry() as ResourceLocation

myResourceKey.registry();
```

:::


