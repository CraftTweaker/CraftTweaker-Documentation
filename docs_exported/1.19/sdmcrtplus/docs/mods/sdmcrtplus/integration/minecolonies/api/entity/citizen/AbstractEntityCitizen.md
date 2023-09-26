# AbstractEntityCitizen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.AbstractEntityCitizen;
```


## Extending AbstractCivilianEntity

AbstractEntityCitizen extends [AbstractCivilianEntity](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractCivilianEntity). That means all methods available in [AbstractCivilianEntity](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractCivilianEntity) are also available in AbstractEntityCitizen

## Methods

:::group{name=canBeLeashed}

Return Type: boolean

```zenscript
AbstractEntityCitizen.canBeLeashed(player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=canBeStuck}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.canBeStuck() as boolean

myAbstractEntityCitizen.canBeStuck();
```

:::

:::group{name=checkCanDropLoot}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.checkCanDropLoot() as boolean

myAbstractEntityCitizen.checkCanDropLoot();
```

:::

:::group{name=getCitizenChatHandler}

Return Type: [ICitizenChatHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenChatHandler)

```zenscript
// AbstractEntityCitizen.getCitizenChatHandler() as ICitizenChatHandler

myAbstractEntityCitizen.getCitizenChatHandler();
```

:::

:::group{name=getCitizenColonyHandler}

Return Type: [ICitizenColonyHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenColonyHandler)

```zenscript
// AbstractEntityCitizen.getCitizenColonyHandler() as ICitizenColonyHandler

myAbstractEntityCitizen.getCitizenColonyHandler();
```

:::

:::group{name=getCitizenData}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
// AbstractEntityCitizen.getCitizenData() as ICitizenData

myAbstractEntityCitizen.getCitizenData();
```

:::

:::group{name=getCitizenDataView}

Return Type: [ICitizenDataView](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenDataView)

```zenscript
// AbstractEntityCitizen.getCitizenDataView() as ICitizenDataView

myAbstractEntityCitizen.getCitizenDataView();
```

:::

:::group{name=getCitizenDiseaseHandler}

Return Type: [ICitizenDiseaseHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenDiseaseHandler)

```zenscript
// AbstractEntityCitizen.getCitizenDiseaseHandler() as ICitizenDiseaseHandler

myAbstractEntityCitizen.getCitizenDiseaseHandler();
```

:::

:::group{name=getCitizenExperienceHandler}

Return Type: [ICitizenExperienceHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenExperienceHandler)

```zenscript
// AbstractEntityCitizen.getCitizenExperienceHandler() as ICitizenExperienceHandler

myAbstractEntityCitizen.getCitizenExperienceHandler();
```

:::

:::group{name=getCitizenInventoryHandler}

Return Type: [ICitizenInventoryHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenInventoryHandler)

```zenscript
// AbstractEntityCitizen.getCitizenInventoryHandler() as ICitizenInventoryHandler

myAbstractEntityCitizen.getCitizenInventoryHandler();
```

:::

:::group{name=getCitizenItemHandler}

Return Type: [ICitizenItemHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenItemHandler)

```zenscript
// AbstractEntityCitizen.getCitizenItemHandler() as ICitizenItemHandler

myAbstractEntityCitizen.getCitizenItemHandler();
```

:::

:::group{name=getCitizenJobHandler}

Return Type: [ICitizenJobHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenJobHandler)

```zenscript
// AbstractEntityCitizen.getCitizenJobHandler() as ICitizenJobHandler

myAbstractEntityCitizen.getCitizenJobHandler();
```

:::

:::group{name=getCitizenSleepHandler}

Return Type: [ICitizenSleepHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenSleepHandler)

```zenscript
// AbstractEntityCitizen.getCitizenSleepHandler() as ICitizenSleepHandler

myAbstractEntityCitizen.getCitizenSleepHandler();
```

:::

:::group{name=getCivilianData}

Return Type: [ICivilianData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICivilianData)

```zenscript
// AbstractEntityCitizen.getCivilianData() as ICivilianData

myAbstractEntityCitizen.getCivilianData();
```

:::

:::group{name=getCivilianID}

Return Type: int

```zenscript
// AbstractEntityCitizen.getCivilianID() as int

myAbstractEntityCitizen.getCivilianID();
```

:::

:::group{name=getInventoryCitizen}

Return Type: [InventoryCitizen](/mods/sdmcrtplus/integration/minecolonies/api/inventory/InventoryCitizen)

```zenscript
// AbstractEntityCitizen.getInventoryCitizen() as InventoryCitizen

myAbstractEntityCitizen.getInventoryCitizen();
```

:::

:::group{name=getLocation}

Return Type: [ILocation](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/location/ILocation)

```zenscript
// AbstractEntityCitizen.getLocation() as ILocation

myAbstractEntityCitizen.getLocation();
```

:::

:::group{name=getNavigation}

Return Type: **invalid**

```zenscript
// AbstractEntityCitizen.getNavigation() as invalid

myAbstractEntityCitizen.getNavigation();
```

:::

:::group{name=getOffsetTicks}

Return Type: int

```zenscript
// AbstractEntityCitizen.getOffsetTicks() as int

myAbstractEntityCitizen.getOffsetTicks();
```

:::

:::group{name=getRandom}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
// AbstractEntityCitizen.getRandom() as RandomSource

myAbstractEntityCitizen.getRandom();
```

:::

:::group{name=getRecentlyHit}

Return Type: int

```zenscript
// AbstractEntityCitizen.getRecentlyHit() as int

myAbstractEntityCitizen.getRecentlyHit();
```

:::

:::group{name=getSoundManager}

Return Type: [SoundManager](/mods/sdmcrtplus/integration/minecolonies/api/sounds/SoundManager)

```zenscript
// AbstractEntityCitizen.getSoundManager() as SoundManager

myAbstractEntityCitizen.getSoundManager();
```

:::

:::group{name=getTasks}

Return Type: **invalid**

```zenscript
// AbstractEntityCitizen.getTasks() as invalid

myAbstractEntityCitizen.getTasks();
```

:::

:::group{name=isBlocking}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.isBlocking() as boolean

myAbstractEntityCitizen.isBlocking();
```

:::

:::group{name=isDead}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.isDead() as boolean

myAbstractEntityCitizen.isDead();
```

:::

:::group{name=isFemale}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.isFemale() as boolean

myAbstractEntityCitizen.isFemale();
```

:::

:::group{name=isPushable}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.isPushable() as boolean

myAbstractEntityCitizen.isPushable();
```

:::

:::group{name=isPushedByFluid}

Return Type: boolean

```zenscript
// AbstractEntityCitizen.isPushedByFluid() as boolean

myAbstractEntityCitizen.isPushedByFluid();
```

:::

:::group{name=isWorkerAtSiteWithMove}

Return Type: boolean

```zenscript
AbstractEntityCitizen.isWorkerAtSiteWithMove(var1 as BlockPos, var2 as int) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| var2      | int                                         |


:::

:::group{name=setCanBeStuck}

```zenscript
AbstractEntityCitizen.setCanBeStuck(var as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var       | boolean |


:::

:::group{name=setCitizenId}

```zenscript
AbstractEntityCitizen.setCitizenId(id as int)
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=setCivilianData}

```zenscript
AbstractEntityCitizen.setCivilianData(iCivilianData as ICivilianData)
```

|   Parameter   |                                        Type                                         |
|---------------|-------------------------------------------------------------------------------------|
| iCivilianData | [ICivilianData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICivilianData) |


:::


