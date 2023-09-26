# Waystone

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.Waystone;
```


## Implemented Interfaces
Waystone implements the following interfaces. That means all methods defined in these interfaces are also available in Waystone

- [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)

## Methods

:::group{name=getDimension}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt;

```zenscript
// Waystone.getDimension() as ResourceKey<Level>

myWaystone.getDimension();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// Waystone.getName() as string

myWaystone.getName();
```

:::

:::group{name=getOwnerUid}

Return Type: string

```zenscript
// Waystone.getOwnerUid() as string

myWaystone.getOwnerUid();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Waystone.getPos() as BlockPos

myWaystone.getPos();
```

:::

:::group{name=getWaystoneType}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Waystone.getWaystoneType() as ResourceLocation

myWaystone.getWaystoneType();
```

:::

:::group{name=getWaystoneUid}

Return Type: string

```zenscript
// Waystone.getWaystoneUid() as string

myWaystone.getWaystoneUid();
```

:::


