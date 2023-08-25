# GlobalUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.GlobalUtils;
```


## Static Methods

:::group{name=getServer}

Allows you to get the Server from anywhere in the script.

Return Type: [Server](/vanilla/api/game/Server)

```zenscript
// GlobalUtils.getServer() as Server

GlobalUtils.getServer();
```

:::

:::group{name=getStructures}

Return Type: stdlib.List&lt;[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)&gt;

```zenscript
// GlobalUtils.getStructures() as stdlib.List<Structure>

GlobalUtils.getStructures();
```

:::

:::group{name=getStructuresName}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// GlobalUtils.getStructuresName() as stdlib.List<ResourceLocation>

GlobalUtils.getStructuresName();
```

:::

