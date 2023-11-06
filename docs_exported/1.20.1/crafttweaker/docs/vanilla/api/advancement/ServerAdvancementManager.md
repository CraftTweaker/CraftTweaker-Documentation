# ServerAdvancementManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.ServerAdvancementManager;
```


## Methods

:::group{name=getAdvancement}

Return Type: [Advancement](/vanilla/api/advancement/Advancement)?

```zenscript
ServerAdvancementManager.getAdvancement(id as ResourceLocation) as Advancement?
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


## Properties

|      Name       |                                                       Type                                                       | Has Getter | Has Setter |
|-----------------|------------------------------------------------------------------------------------------------------------------|------------|------------|
| allAdvancements | [Collection](/vanilla/api/util/collection/Collection)&lt;[Advancement](/vanilla/api/advancement/Advancement)&gt; | true       | false      |

