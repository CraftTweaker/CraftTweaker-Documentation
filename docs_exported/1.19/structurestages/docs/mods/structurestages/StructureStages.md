# StructureStages

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.structurestages.StructureStages;
```


## Static Methods

:::group{name=addStructureStage}



```zenscript
StructureStages.addStructureStage(stage as string, dungeon as ResourceLocation)
```

| Parameter |                            Type                            |                   Description                    |
|-----------|------------------------------------------------------------|--------------------------------------------------|
| stage     | string                                                     | The stage that blocks the spawn of the structure |
| dungeon   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The structure that will be blocked               |


:::

:::group{name=getStructuresTemplates}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// StructureStages.getStructuresTemplates() as stdlib.List<ResourceLocation>

StructureStages.getStructuresTemplates();
```

:::

