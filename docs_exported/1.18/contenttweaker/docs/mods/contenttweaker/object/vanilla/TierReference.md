# TierReference

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.vanilla.TierReference;
```


## Extending Reference&lt;Tier&gt;

TierReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;[Tier](/vanilla/api/item/type/tiered/Tier)&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;[Tier](/vanilla/api/item/type/tiered/Tier)&gt; are also available in TierReference

## Static Methods

:::group{name=of}

Return Type: [TierReference](/mods/contenttweaker/object/vanilla/TierReference)

```zenscript
TierReference.of(name as ResourceLocation) as TierReference
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| name      | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

## Properties

|    Name    |                                Type                                 | Has Getter | Has Setter |
|------------|---------------------------------------------------------------------|------------|------------|
| id         | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |
| registryId | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)? | true       | false      |
| typeId     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |

