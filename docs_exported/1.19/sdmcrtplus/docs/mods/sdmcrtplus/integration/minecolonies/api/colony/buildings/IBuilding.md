# IBuilding

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IBuilding;
```


## Implemented Interfaces
IBuilding implements the following interfaces. That means all methods defined in these interfaces are also available in IBuilding

- [IBuildingContainer](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuildingContainer)
- [IRequester](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/requester/IRequester)
- [ISchematicProvider](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/ISchematicProvider)

## Methods

:::group{name=buildingRequiresCertainAmountOfItem}

Return Type: int

```zenscript
IBuilding.buildingRequiresCertainAmountOfItem(stack as ItemStack, localAlreadyKept as stdlib.List<ItemStorage>, inventory as boolean) as int
```

|    Parameter     |                                                 Type                                                 |
|------------------|------------------------------------------------------------------------------------------------------|
| stack            | [ItemStack](/vanilla/api/item/ItemStack)                                                             |
| localAlreadyKept | stdlib.List&lt;[ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage)&gt; |
| inventory        | boolean                                                                                              |


:::

:::group{name=buildingRequiresCertainAmountOfItem}

Return Type: int

```zenscript
IBuilding.buildingRequiresCertainAmountOfItem(var1 as ItemStack, var2 as stdlib.List<ItemStorage>, var3 as boolean, var4 as JobEntry?) as int
```

| Parameter |                                                 Type                                                 |
|-----------|------------------------------------------------------------------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack)                                                             |
| var2      | stdlib.List&lt;[ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage)&gt; |
| var3      | boolean                                                                                              |
| var4      | [JobEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/JobEntry)?                      |


:::

:::group{name=calculateCorners}

```zenscript
// IBuilding.calculateCorners()

myIBuilding.calculateCorners();
```

:::

:::group{name=canBeBuiltByBuilder}

Return Type: boolean

```zenscript
IBuilding.canBeBuiltByBuilder(var1 as int) as boolean
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=canBeGathered}

Return Type: boolean

```zenscript
// IBuilding.canBeGathered() as boolean

myIBuilding.canBeGathered();
```

:::

:::group{name=canEat}

Return Type: boolean

```zenscript
IBuilding.canEat(var1 as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=cancelAllRequestsOfCitizen}

```zenscript
IBuilding.cancelAllRequestsOfCitizen(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=createPickupRequest}

Return Type: boolean

```zenscript
IBuilding.createPickupRequest(var1 as int) as boolean
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=createResolvers}

Return Type: stdlib.List&lt;[IRequestResolver](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/resolver/IRequestResolver)&gt;

```zenscript
// IBuilding.createResolvers() as stdlib.List<IRequestResolver>

myIBuilding.createResolvers();
```

:::

:::group{name=deconstruct}

```zenscript
// IBuilding.deconstruct()

myIBuilding.deconstruct();
```

:::

:::group{name=destroy}

```zenscript
// IBuilding.destroy()

myIBuilding.destroy();
```

:::

:::group{name=forceTransferStack}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)?

```zenscript
IBuilding.forceTransferStack(var1 as ItemStack, var2 as Level) as ItemStack?
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |
| var2      | [Level](/vanilla/api/world/Level)        |


:::

:::group{name=getAllAssignedCitizen}

Return Type: Set&lt;[ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)&gt;

```zenscript
// IBuilding.getAllAssignedCitizen() as Set<ICitizenData>

myIBuilding.getAllAssignedCitizen();
```

:::

:::group{name=getBuildingDisplayName}

Return Type: string

```zenscript
// IBuilding.getBuildingDisplayName() as string

myIBuilding.getBuildingDisplayName();
```

:::

:::group{name=getBuildingType}

Return Type: [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry)

```zenscript
// IBuilding.getBuildingType() as BuildingEntry

myIBuilding.getBuildingType();
```

:::

:::group{name=getCitizenForRequest}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
IBuilding.getCitizenForRequest(var1 as IToken) as ICitizenData
```

| Parameter |                                           Type                                            |
|-----------|-------------------------------------------------------------------------------------------|
| var1      | [IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken) |


:::

:::group{name=getClaimRadius}

Return Type: int

```zenscript
IBuilding.getClaimRadius(var1 as int) as int
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// IBuilding.getColony() as IColony

myIBuilding.getColony();
```

:::

:::group{name=getCompletedRequests}

Return Type: Collection&lt;[IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)&gt;

```zenscript
IBuilding.getCompletedRequests(var1 as ICitizenData) as Collection<IRequest>
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getCustomName}

Return Type: string

```zenscript
// IBuilding.getCustomName() as string

myIBuilding.getCustomName();
```

:::

:::group{name=getHandlers}

Return Type: stdlib.List&lt;[IItemHandler](/forge/api/capability/IItemHandler)&gt;

```zenscript
// IBuilding.getHandlers() as stdlib.List<IItemHandler>

myIBuilding.getHandlers();
```

:::

:::group{name=getMaxToolLevel}

Return Type: int

```zenscript
// IBuilding.getMaxToolLevel() as int

myIBuilding.getMaxToolLevel();
```

:::

:::group{name=getOpenRequests}

Return Type: Collection&lt;[IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)&gt;

```zenscript
IBuilding.getOpenRequests(var1 as int) as Collection<IRequest>
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getOpenRequestsByRequestableType}

Return Type: Collection&lt;[IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken)&gt;[[TypeToken](/mods/sdmcrtplus/utils/core/TypeToken)]

```zenscript
// IBuilding.getOpenRequestsByRequestableType() as Collection<IToken>[TypeToken]

myIBuilding.getOpenRequestsByRequestableType();
```

:::

:::group{name=getRequester}

Return Type: [IRequester](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/requester/IRequester)

```zenscript
// IBuilding.getRequester() as IRequester

myIBuilding.getRequester();
```

:::

:::group{name=getRequiredItemsAndAmount}

Return Type: [Tuple](/mods/sdmcrtplus/utils/core/Tuple)&lt;int?,bool?&gt;[[Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;]

```zenscript
// IBuilding.getRequiredItemsAndAmount() as Tuple<int?,bool?>[Predicate<ItemStack>]

myIBuilding.getRequiredItemsAndAmount();
```

:::

:::group{name=getResolvers}

Return Type: stdlib.List&lt;[IRequestResolver](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/resolver/IRequestResolver)&gt;

```zenscript
// IBuilding.getResolvers() as stdlib.List<IRequestResolver>

myIBuilding.getResolvers();
```

:::

:::group{name=hasCitizenCompletedRequests}

Return Type: boolean

```zenscript
IBuilding.hasCitizenCompletedRequests(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=hasCitizenCompletedRequestsToPickup}

Return Type: boolean

```zenscript
IBuilding.hasCitizenCompletedRequestsToPickup(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=hasOpenSyncRequest}

Return Type: boolean

```zenscript
IBuilding.hasOpenSyncRequest(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=hasWorkOrder}

Return Type: boolean

```zenscript
// IBuilding.hasWorkOrder() as boolean

myIBuilding.hasWorkOrder();
```

:::

:::group{name=hasWorkerOpenRequests}

Return Type: boolean

```zenscript
IBuilding.hasWorkerOpenRequests(var1 as int) as boolean
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=hasWorkerOpenRequestsFiltered}

Return Type: boolean

```zenscript
IBuilding.hasWorkerOpenRequestsFiltered(var1 as int, var2 as Predicate<IRequest>) as boolean
```

| Parameter |                                                                           Type                                                                            |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| var1      | int                                                                                                                                                       |
| var2      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)&gt; |


:::

:::group{name=isBuilt}

Return Type: boolean

```zenscript
// IBuilding.isBuilt() as boolean

myIBuilding.isBuilt();
```

:::

:::group{name=isGuardBuildingNear}

Return Type: boolean

```zenscript
// IBuilding.isGuardBuildingNear() as boolean

myIBuilding.isGuardBuildingNear();
```

:::

:::group{name=isInBuilding}

Return Type: boolean

```zenscript
IBuilding.isInBuilding(var1 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=isItemStackInRequest}

Return Type: boolean

```zenscript
IBuilding.isItemStackInRequest(var1 as ItemStack?) as boolean
```

| Parameter |                   Type                    |
|-----------|-------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack)? |


:::

:::group{name=isMatchingBlock}

Return Type: boolean

```zenscript
IBuilding.isMatchingBlock(var1 as Block) as boolean
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=markDirty}

```zenscript
// IBuilding.markDirty()

myIBuilding.markDirty();
```

:::

:::group{name=markRequestAsAccepted}

```zenscript
IBuilding.markRequestAsAccepted(var1 as ICitizenData, var2 as IToken)
```

| Parameter |                                           Type                                            |
|-----------|-------------------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)         |
| var2      | [IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken) |


:::

:::group{name=onCleanUp}

```zenscript
IBuilding.onCleanUp(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=onColonyTick}

```zenscript
IBuilding.onColonyTick(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=onDestroyed}

```zenscript
// IBuilding.onDestroyed()

myIBuilding.onDestroyed();
```

:::

:::group{name=onPlacement}

```zenscript
// IBuilding.onPlacement()

myIBuilding.onPlacement();
```

:::

:::group{name=onPlayerEnterBuilding}

```zenscript
IBuilding.onPlayerEnterBuilding(player as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=onPlayerEnterNearby}

```zenscript
IBuilding.onPlayerEnterNearby(player as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=onRestart}

```zenscript
IBuilding.onRestart(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=onUpgradeComplete}

```zenscript
IBuilding.onUpgradeComplete(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=onWakeUp}

```zenscript
// IBuilding.onWakeUp()

myIBuilding.onWakeUp();
```

:::

:::group{name=overruleNextOpenRequestOfCitizenWithStack}

Return Type: boolean

```zenscript
IBuilding.overruleNextOpenRequestOfCitizenWithStack(var1 as ICitizenData, var2 as ItemStack) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |
| var2      | [ItemStack](/vanilla/api/item/ItemStack)                                          |


:::

:::group{name=overruleNextOpenRequestWithStack}

```zenscript
IBuilding.overruleNextOpenRequestWithStack(var1 as ItemStack)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=pickUp}

```zenscript
IBuilding.pickUp(var1 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=processOfflineTime}

```zenscript
IBuilding.processOfflineTime(var1 as long)
```

| Parameter | Type |
|-----------|------|
| var1      | long |


:::

:::group{name=removeWorkOrder}

```zenscript
// IBuilding.removeWorkOrder()

myIBuilding.removeWorkOrder();
```

:::

:::group{name=requestRemoval}

```zenscript
IBuilding.requestRemoval(var1 as Player, var2 as BlockPos)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)      |


:::

:::group{name=requestRepair}

```zenscript
IBuilding.requestRepair(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=requestUpgrade}

```zenscript
IBuilding.requestUpgrade(var1 as Player, var2 as BlockPos)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)      |


:::

:::group{name=reservedStacksExcluding}

Return Type: int?[[ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage)]

```zenscript
IBuilding.reservedStacksExcluding(var1 as IRequest) as int?[ItemStorage]
```

| Parameter |                                              Type                                               |
|-----------|-------------------------------------------------------------------------------------------------|
| var1      | [IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest) |


:::

:::group{name=resetGuardBuildingNear}

```zenscript
// IBuilding.resetGuardBuildingNear()

myIBuilding.resetGuardBuildingNear();
```

:::

:::group{name=setBuildingType}

```zenscript
IBuilding.setBuildingType(var1 as BuildingEntry)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry) |


:::

:::group{name=setCustomBuildingName}

```zenscript
IBuilding.setCustomBuildingName(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=upgradeBuildingLevelToSchematicData}

```zenscript
// IBuilding.upgradeBuildingLevelToSchematicData()

myIBuilding.upgradeBuildingLevelToSchematicData();
```

:::


