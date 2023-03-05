# MaterialColorReference

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.vanilla.MaterialColorReference;
```


## Extending Reference&lt;MaterialColor&gt;

MaterialColorReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;[MaterialColor](/vanilla/api/block/material/MaterialColor)&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;[MaterialColor](/vanilla/api/block/material/MaterialColor)&gt; are also available in MaterialColorReference

## Static Methods

:::group{name=of}

Return Type: [MaterialColorReference](/mods/contenttweaker/object/vanilla/MaterialColorReference)

```zenscript
MaterialColorReference.of(id as ResourceLocation) as MaterialColorReference
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| id        | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

## Properties

|    Name     |                                Type                                 | Has Getter | Has Setter |
|-------------|---------------------------------------------------------------------|------------|------------|
| color       | [Color](/mods/contenttweaker/util/Color)                            | true       | false      |
| id          | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |
| numericalId | int                                                                 | true       | false      |
| registryId  | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)? | true       | false      |
| typeId      | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |

