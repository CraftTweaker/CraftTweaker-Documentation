# IGuardBuilding

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IGuardBuilding;
```


## Implemented Interfaces
IGuardBuilding implements the following interfaces. That means all methods defined in these interfaces are also available in IGuardBuilding

- [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

## Methods

:::group{name=addPatrolTargets}

```zenscript
IGuardBuilding.addPatrolTargets(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=arrivedAtPatrolPoint}

```zenscript
IGuardBuilding.arrivedAtPatrolPoint(var1 as AbstractEntityCitizen)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen) |


:::

:::group{name=calculateMobs}

```zenscript
// IGuardBuilding.calculateMobs()

myIGuardBuilding.calculateMobs();
```

:::

:::group{name=getBonusVision}

Return Type: int

```zenscript
// IGuardBuilding.getBonusVision() as int

myIGuardBuilding.getBonusVision();
```

:::

:::group{name=getGuardPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IGuardBuilding.getGuardPos() as BlockPos

myIGuardBuilding.getGuardPos();
```

:::

:::group{name=getMinePos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IGuardBuilding.getMinePos() as BlockPos

myIGuardBuilding.getMinePos();
```

:::

:::group{name=getNextPatrolTarget}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
IGuardBuilding.getNextPatrolTarget(var1 as boolean) as BlockPos?
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=getPatrolDistance}

Return Type: int

```zenscript
// IGuardBuilding.getPatrolDistance() as int

myIGuardBuilding.getPatrolDistance();
```

:::

:::group{name=getPlayerToFollowOrRally}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// IGuardBuilding.getPlayerToFollowOrRally() as Player

myIGuardBuilding.getPlayerToFollowOrRally();
```

:::

:::group{name=getPositionToFollow}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IGuardBuilding.getPositionToFollow() as BlockPos

myIGuardBuilding.getPositionToFollow();
```

:::

:::group{name=getRallyLocation}

Return Type: [ILocation](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/location/ILocation)

```zenscript
// IGuardBuilding.getRallyLocation() as ILocation

myIGuardBuilding.getRallyLocation();
```

:::

:::group{name=getTask}

Return Type: string

```zenscript
// IGuardBuilding.getTask() as string

myIGuardBuilding.getTask();
```

:::

:::group{name=isTightGrouping}

Return Type: boolean

```zenscript
// IGuardBuilding.isTightGrouping() as boolean

myIGuardBuilding.isTightGrouping();
```

:::

:::group{name=requiresManualTarget}

Return Type: boolean

```zenscript
// IGuardBuilding.requiresManualTarget() as boolean

myIGuardBuilding.requiresManualTarget();
```

:::

:::group{name=resetPatrolTargets}

```zenscript
// IGuardBuilding.resetPatrolTargets()

myIGuardBuilding.resetPatrolTargets();
```

:::

:::group{name=setGuardPos}

```zenscript
IGuardBuilding.setGuardPos(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setPlayerToFollow}

```zenscript
IGuardBuilding.setPlayerToFollow(var1 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=setRallyLocation}

```zenscript
IGuardBuilding.setRallyLocation(var1 as ILocation)
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| var1      | [ILocation](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/location/ILocation) |


:::

:::group{name=setTempNextPatrolPoint}

```zenscript
IGuardBuilding.setTempNextPatrolPoint(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=shallPatrolManually}

Return Type: boolean

```zenscript
// IGuardBuilding.shallPatrolManually() as boolean

myIGuardBuilding.shallPatrolManually();
```

:::

:::group{name=shallRetrieveOnLowHealth}

Return Type: boolean

```zenscript
// IGuardBuilding.shallRetrieveOnLowHealth() as boolean

myIGuardBuilding.shallRetrieveOnLowHealth();
```

:::


