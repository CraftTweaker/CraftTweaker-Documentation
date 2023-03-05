# CreativeTabReference

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.vanilla.CreativeTabReference;
```


## Extending Reference&lt;CreativeModeTab&gt;

CreativeTabReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;[CreativeModeTab](/vanilla/api/item/CreativeModeTab)&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;[CreativeModeTab](/vanilla/api/item/CreativeModeTab)&gt; are also available in CreativeTabReference

## Static Methods

:::group{name=of}

Return Type: [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference)

```zenscript
CreativeTabReference.of(id as string) as CreativeTabReference
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

## Properties

|    Name    |                                Type                                 | Has Getter | Has Setter |
|------------|---------------------------------------------------------------------|------------|------------|
| id         | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |
| registryId | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)? | true       | false      |
| tabId      | string                                                              | true       | false      |
| typeId     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |

