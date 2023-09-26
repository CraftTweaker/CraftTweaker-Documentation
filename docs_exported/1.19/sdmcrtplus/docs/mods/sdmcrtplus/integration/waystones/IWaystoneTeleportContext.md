# IWaystoneTeleportContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.IWaystoneTeleportContext;
```


## Methods

:::group{name=addAdditionalEntity}

```zenscript
IWaystoneTeleportContext.addAdditionalEntity(var1 as Entity)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| var1      | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getAdditionalEntities}

Return Type: stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// IWaystoneTeleportContext.getAdditionalEntities() as stdlib.List<Entity>

myIWaystoneTeleportContext.getAdditionalEntities();
```

:::

:::group{name=getCooldown}

Return Type: int

```zenscript
// IWaystoneTeleportContext.getCooldown() as int

myIWaystoneTeleportContext.getCooldown();
```

:::

:::group{name=getDestination}

Return Type: [TeleportDestination](/mods/sdmcrtplus/integration/waystones/TeleportDestination)

```zenscript
// IWaystoneTeleportContext.getDestination() as TeleportDestination

myIWaystoneTeleportContext.getDestination();
```

:::

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// IWaystoneTeleportContext.getEntity() as Entity

myIWaystoneTeleportContext.getEntity();
```

:::

:::group{name=getFromWaystone}

Return Type: [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)?

```zenscript
// IWaystoneTeleportContext.getFromWaystone() as IWaystone?

myIWaystoneTeleportContext.getFromWaystone();
```

:::

:::group{name=getLeashedEntities}

Return Type: stdlib.List&lt;[Mob](/mods/sdmcrtplus/entity/Mob)&gt;

```zenscript
// IWaystoneTeleportContext.getLeashedEntities() as stdlib.List<Mob>

myIWaystoneTeleportContext.getLeashedEntities();
```

:::

:::group{name=getTargetWaystone}

Return Type: [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)

```zenscript
// IWaystoneTeleportContext.getTargetWaystone() as IWaystone

myIWaystoneTeleportContext.getTargetWaystone();
```

:::

:::group{name=getWarpItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IWaystoneTeleportContext.getWarpItem() as ItemStack

myIWaystoneTeleportContext.getWarpItem();
```

:::

:::group{name=getWarpMode}

Return Type: [WarpMode](/mods/sdmcrtplus/integration/waystones/WarpMode)

```zenscript
// IWaystoneTeleportContext.getWarpMode() as WarpMode

myIWaystoneTeleportContext.getWarpMode();
```

:::

:::group{name=getXpCost}

Return Type: int

```zenscript
// IWaystoneTeleportContext.getXpCost() as int

myIWaystoneTeleportContext.getXpCost();
```

:::

:::group{name=isDimensionalTeleport}

Return Type: boolean

```zenscript
// IWaystoneTeleportContext.isDimensionalTeleport() as boolean

myIWaystoneTeleportContext.isDimensionalTeleport();
```

:::

:::group{name=playsEffect}

Return Type: boolean

```zenscript
// IWaystoneTeleportContext.playsEffect() as boolean

myIWaystoneTeleportContext.playsEffect();
```

:::

:::group{name=playsSound}

Return Type: boolean

```zenscript
// IWaystoneTeleportContext.playsSound() as boolean

myIWaystoneTeleportContext.playsSound();
```

:::

:::group{name=setCooldown}

```zenscript
IWaystoneTeleportContext.setCooldown(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setDestination}

```zenscript
IWaystoneTeleportContext.setDestination(var1 as TeleportDestination)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [TeleportDestination](/mods/sdmcrtplus/integration/waystones/TeleportDestination) |


:::

:::group{name=setFromWaystone}

```zenscript
IWaystoneTeleportContext.setFromWaystone(var1 as IWaystone?)
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| var1      | [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)? |


:::

:::group{name=setPlaysEffect}

```zenscript
IWaystoneTeleportContext.setPlaysEffect(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setPlaysSound}

```zenscript
IWaystoneTeleportContext.setPlaysSound(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setWarpItem}

```zenscript
IWaystoneTeleportContext.setWarpItem(var1 as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| var1      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setWarpMode}

```zenscript
IWaystoneTeleportContext.setWarpMode(var1 as WarpMode)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | [WarpMode](/mods/sdmcrtplus/integration/waystones/WarpMode) |


:::

:::group{name=setXpCost}

```zenscript
IWaystoneTeleportContext.setXpCost(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::


