# StructureTemplateManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.levelgen.structure.templatesystem.StructureTemplateManager;
```


## Methods

:::group{name=getOrCreate}

Return Type: [StructureTemplate](/mods/sdmcrtplus/world/level/levelgen/structure/templatesystem/StructureTemplate)

```zenscript
StructureTemplateManager.getOrCreate(location as ResourceLocation) as StructureTemplate
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| location  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=listTemplates}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// StructureTemplateManager.listTemplates() as stdlib.List<ResourceLocation>

myStructureTemplateManager.listTemplates();
```

:::

:::group{name=listTemplates}

Return Type: [StructureTemplate](/mods/sdmcrtplus/world/level/levelgen/structure/templatesystem/StructureTemplate)

```zenscript
StructureTemplateManager.listTemplates(location as ResourceLocation) as StructureTemplate
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| location  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


