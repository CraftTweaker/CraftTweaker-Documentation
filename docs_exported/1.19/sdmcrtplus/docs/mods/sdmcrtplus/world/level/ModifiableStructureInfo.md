# ModifiableStructureInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.ModifiableStructureInfo;
```


## Methods

:::group{name=applyStructureModifiers}

```zenscript
ModifiableStructureInfo.applyStructureModifiers(structure as Holder<Structure>, structureModifiers as stdlib.List)
```

|     Parameter      |                                                            Type                                                            |
|--------------------|----------------------------------------------------------------------------------------------------------------------------|
| structure          | [Holder](/mods/sdmcrtplus/utils/core/Holder)&lt;[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)&gt; |
| structureModifiers | stdlib.List                                                                                                                |


:::

:::group{name=getModifiedStructureInfo}

Return Type: [StructureInfo](/mods/sdmcrtplus/world/level/StructureInfo)

```zenscript
// ModifiableStructureInfo.getModifiedStructureInfo() as StructureInfo

myModifiableStructureInfo.getModifiedStructureInfo();
```

:::

:::group{name=getOriginalStructureInfo}

Return Type: [StructureInfo](/mods/sdmcrtplus/world/level/StructureInfo)

```zenscript
// ModifiableStructureInfo.getOriginalStructureInfo() as StructureInfo

myModifiableStructureInfo.getOriginalStructureInfo();
```

:::

:::group{name=getStructureInfo}

Return Type: [StructureInfo](/mods/sdmcrtplus/world/level/StructureInfo)

```zenscript
// ModifiableStructureInfo.getStructureInfo() as StructureInfo

myModifiableStructureInfo.getStructureInfo();
```

:::


