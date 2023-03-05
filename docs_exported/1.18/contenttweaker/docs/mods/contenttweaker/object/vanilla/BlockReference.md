# BlockReference

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.vanilla.BlockReference;
```


## Extending Reference&lt;Block&gt;

BlockReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;[Block](/vanilla/api/block/Block)&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;[Block](/vanilla/api/block/Block)&gt; are also available in BlockReference

## Static Methods

:::group{name=of}

Return Type: [BlockReference](/mods/contenttweaker/object/vanilla/BlockReference)

```zenscript
BlockReference.of(id as ResourceLocation) as BlockReference
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| id        | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

## Methods

:::group{name=findProperties}

Return Type: T

```zenscript
BlockReference.findProperties<T : BlockProperties>() as T
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| T         | [BlockProperties](/mods/contenttweaker/object/vanilla/property/BlockProperties) |


:::


## Properties

|    Name    |                                              Type                                               | Has Getter | Has Setter |
|------------|-------------------------------------------------------------------------------------------------|------------|------------|
| id         | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)                              | true       | false      |
| properties | [StandardBlockProperties](/mods/contenttweaker/object/vanilla/property/StandardBlockProperties) | true       | false      |
| registryId | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)?                             | true       | false      |
| typeId     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)                              | true       | false      |

