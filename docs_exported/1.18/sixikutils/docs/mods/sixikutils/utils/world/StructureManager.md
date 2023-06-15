# StructureManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.misc.world.StructureManager;
```


## Methods

:::group{name=getLanguageKey}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureManager.getLanguageKey() as stdlib.List<string>

myStructureManager.getLanguageKey();
```

:::

:::group{name=getNamespace}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureManager.getNamespace() as stdlib.List<string>

myStructureManager.getNamespace();
```

:::

:::group{name=getPath}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureManager.getPath() as stdlib.List<string>

myStructureManager.getPath();
```

:::

:::group{name=getShortLanguageKey}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// StructureManager.getShortLanguageKey() as stdlib.List<string>

myStructureManager.getShortLanguageKey();
```

:::

:::group{name=placeInWorld}

Return Type: boolean

```zenscript
StructureManager.placeInWorld(res as ResourceLocation, serverLevel as ServerLevel, pos as BlockPos, pos2 as BlockPos, type as int) as boolean
```

|  Parameter  |                            Type                            |
|-------------|------------------------------------------------------------|
| res         | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| serverLevel | [ServerLevel](/mods/sixikutils/utils/world/ServerLevel)    |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)                |
| pos2        | [BlockPos](/vanilla/api/util/math/BlockPos)                |
| type        | int                                                        |


:::


