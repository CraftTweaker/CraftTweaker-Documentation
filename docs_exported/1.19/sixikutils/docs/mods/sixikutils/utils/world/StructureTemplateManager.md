# StructureTemplateManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.StructureTemplateManager;
```


## Methods

:::group{name=getLanguageKey}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureTemplateManager.getLanguageKey() as stdlib.List<string>

myStructureTemplateManager.getLanguageKey();
```

:::

:::group{name=getNamespace}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureTemplateManager.getNamespace() as stdlib.List<string>

myStructureTemplateManager.getNamespace();
```

:::

:::group{name=getPath}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureTemplateManager.getPath() as stdlib.List<string>

myStructureTemplateManager.getPath();
```

:::

:::group{name=getShortLanguageKey}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureTemplateManager.getShortLanguageKey() as stdlib.List<string>

myStructureTemplateManager.getShortLanguageKey();
```

:::

:::group{name=placeInWorld}

Return Type: boolean

```zenscript
StructureTemplateManager.placeInWorld(res as ResourceLocation, serverLevel as ServerLevel, pos as BlockPos, pos2 as BlockPos, type as int) as boolean
```

|  Parameter  |                            Type                            |
|-------------|------------------------------------------------------------|
| res         | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| serverLevel | [ServerLevel](/vanilla/api/world/ServerLevel)              |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)                |
| pos2        | [BlockPos](/vanilla/api/util/math/BlockPos)                |
| type        | int                                                        |


:::


