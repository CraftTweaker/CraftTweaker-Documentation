# ItemReference

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.vanilla.ItemReference;
```


## Extending Reference&lt;ItemDefinition&gt;

ItemReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; are also available in ItemReference

## Static Methods

:::group{name=of}

Return Type: [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference)

```zenscript
ItemReference.of(id as ResourceLocation) as ItemReference
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| id        | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

## Methods

:::group{name=findProperties}

Return Type: T

```zenscript
ItemReference.findProperties<T : ItemProperties>() as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| T         | [ItemProperties](/mods/contenttweaker/object/vanilla/property/ItemProperties) |


:::


## Properties

|    Name    |                                             Type                                              | Has Getter | Has Setter |
|------------|-----------------------------------------------------------------------------------------------|------------|------------|
| id         | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)                            | true       | false      |
| properties | [StandardItemProperties](/mods/contenttweaker/object/vanilla/property/StandardItemProperties) | true       | false      |
| registryId | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)?                           | true       | false      |
| typeId     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)                            | true       | false      |

