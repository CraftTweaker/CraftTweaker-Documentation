# IWaystone

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.IWaystone;
```


## Methods

:::group{name=getDimension}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt;

```zenscript
// IWaystone.getDimension() as ResourceKey<Level>

myIWaystone.getDimension();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// IWaystone.getName() as string

myIWaystone.getName();
```

:::

:::group{name=getOwnerUid}

Return Type: string?

```zenscript
// IWaystone.getOwnerUid() as string?

myIWaystone.getOwnerUid();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IWaystone.getPos() as BlockPos

myIWaystone.getPos();
```

:::

:::group{name=getWaystoneType}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// IWaystone.getWaystoneType() as ResourceLocation

myIWaystone.getWaystoneType();
```

:::

:::group{name=getWaystoneUid}

Return Type: string

```zenscript
// IWaystone.getWaystoneUid() as string

myIWaystone.getWaystoneUid();
```

:::

:::group{name=hasName}

Return Type: boolean

```zenscript
// IWaystone.hasName() as boolean

myIWaystone.hasName();
```

:::

:::group{name=hasOwner}

Return Type: boolean

```zenscript
// IWaystone.hasOwner() as boolean

myIWaystone.hasOwner();
```

:::

:::group{name=isGlobal}

Return Type: boolean

```zenscript
// IWaystone.isGlobal() as boolean

myIWaystone.isGlobal();
```

:::

:::group{name=isOwner}

Return Type: boolean

```zenscript
IWaystone.isOwner(var1 as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=isValid}

Return Type: boolean

```zenscript
// IWaystone.isValid() as boolean

myIWaystone.isValid();
```

:::

:::group{name=isValidInLevel}

Return Type: boolean

```zenscript
IWaystone.isValidInLevel(level as ServerLevel) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::

:::group{name=resolveDestination}

Return Type: [TeleportDestination](/mods/sdmcrtplus/integration/waystones/TeleportDestination)

```zenscript
IWaystone.resolveDestination(level as ServerLevel) as TeleportDestination
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::

:::group{name=wasGenerated}

Return Type: boolean

```zenscript
// IWaystone.wasGenerated() as boolean

myIWaystone.wasGenerated();
```

:::


