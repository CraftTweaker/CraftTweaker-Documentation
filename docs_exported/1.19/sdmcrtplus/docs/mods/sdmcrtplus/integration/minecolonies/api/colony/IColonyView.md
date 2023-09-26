# IColonyView

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IColonyView;
```


## Implemented Interfaces
IColonyView implements the following interfaces. That means all methods defined in these interfaces are also available in IColonyView

- [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

## Methods

:::group{name=addFreeBlock}

```zenscript
IColonyView.addFreeBlock(var1 as Block)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=addFreePosition}

```zenscript
IColonyView.addFreePosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=addPlayer}

```zenscript
IColonyView.addPlayer(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=addVisitingPlayer}

```zenscript
IColonyView.addVisitingPlayer(var1 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=areSpiesEnabled}

Return Type: boolean

```zenscript
// IColonyView.areSpiesEnabled() as boolean

myIColonyView.areSpiesEnabled();
```

:::

:::group{name=canBeAutoDeleted}

Return Type: boolean

```zenscript
// IColonyView.canBeAutoDeleted() as boolean

myIColonyView.canBeAutoDeleted();
```

:::

:::group{name=canMoveIn}

Return Type: boolean

```zenscript
// IColonyView.canMoveIn() as boolean

myIColonyView.canMoveIn();
```

:::

:::group{name=getAllies}

Return Type: stdlib.List

```zenscript
// IColonyView.getAllies() as stdlib.List

myIColonyView.getAllies();
```

:::

:::group{name=getBuilding}

Return Type: [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

```zenscript
IColonyView.getBuilding(var1 as BlockPos) as IBuildingView
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBuilding}

Return Type: [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

```zenscript
IColonyView.getBuilding(var1 as int, var2 as int, var3 as int) as IBuildingView
```

| Parameter | Type |
|-----------|------|
| var1      | int  |
| var2      | int  |
| var3      | int  |


:::

:::group{name=getBuildings}

Return Type: stdlib.List&lt;[IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)&gt;

```zenscript
// IColonyView.getBuildings() as stdlib.List<IBuildingView>

myIColonyView.getBuildings();
```

:::

:::group{name=getCenter}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IColonyView.getCenter() as BlockPos

myIColonyView.getCenter();
```

:::

:::group{name=getCitizen}

Return Type: [ICitizenDataView](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenDataView)

```zenscript
IColonyView.getCitizen(var1 as int) as ICitizenDataView
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getCitizenCount}

Return Type: int

```zenscript
// IColonyView.getCitizenCount() as int

myIColonyView.getCitizenCount();
```

:::

:::group{name=getCitizenCountLimit}

Return Type: int

```zenscript
// IColonyView.getCitizenCountLimit() as int

myIColonyView.getCitizenCountLimit();
```

:::

:::group{name=getCitizens}

Return Type: [ICitizenDataView](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenDataView)[int?]

```zenscript
// IColonyView.getCitizens() as ICitizenDataView[int?]

myIColonyView.getCitizens();
```

:::

:::group{name=getDimension}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt;

```zenscript
// IColonyView.getDimension() as ResourceKey<Level>

myIColonyView.getDimension();
```

:::

:::group{name=getDistanceSquared}

Return Type: long

```zenscript
IColonyView.getDistanceSquared(var1 as BlockPos) as long
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getFeuds}

Return Type: stdlib.List

```zenscript
// IColonyView.getFeuds() as stdlib.List

myIColonyView.getFeuds();
```

:::

:::group{name=getFreeBlocks}

Return Type: stdlib.List&lt;[Block](/vanilla/api/block/Block)&gt;

```zenscript
// IColonyView.getFreeBlocks() as stdlib.List<Block>

myIColonyView.getFreeBlocks();
```

:::

:::group{name=getFreePositions}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IColonyView.getFreePositions() as stdlib.List<BlockPos>

myIColonyView.getFreePositions();
```

:::

:::group{name=getID}

Return Type: int

```zenscript
// IColonyView.getID() as int

myIColonyView.getID();
```

:::

:::group{name=getLastContactInHours}

Return Type: int

```zenscript
// IColonyView.getLastContactInHours() as int

myIColonyView.getLastContactInHours();
```

:::

:::group{name=getLastSpawnPoints}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IColonyView.getLastSpawnPoints() as stdlib.List<BlockPos>

myIColonyView.getLastSpawnPoints();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// IColonyView.getName() as string

myIColonyView.getName();
```

:::

:::group{name=getNameFileIds}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// IColonyView.getNameFileIds() as stdlib.List<string>

myIColonyView.getNameFileIds();
```

:::

:::group{name=getOverallHappiness}

Return Type: double

```zenscript
// IColonyView.getOverallHappiness() as double

myIColonyView.getOverallHappiness();
```

:::

:::group{name=getPermissions}

Return Type: [IPermissions](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/IPermissions)

```zenscript
// IColonyView.getPermissions() as IPermissions

myIColonyView.getPermissions();
```

:::

:::group{name=getPlayers}

Return Type: [ColonyPlayer](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/ColonyPlayer)[string]

```zenscript
// IColonyView.getPlayers() as ColonyPlayer[string]

myIColonyView.getPlayers();
```

:::

:::group{name=getRequestManager}

Return Type: [IRequestManager](/mods/sdmcrtplus/integration/minecolonies/api/colony/managers/interfaces/IRequestManager)

```zenscript
// IColonyView.getRequestManager() as IRequestManager

myIColonyView.getRequestManager();
```

:::

:::group{name=getRequesterBuildingForPosition}

Return Type: [IRequester](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/requester/IRequester)?

```zenscript
IColonyView.getRequesterBuildingForPosition(var1 as BlockPos) as IRequester?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getStructurePack}

Return Type: string

```zenscript
// IColonyView.getStructurePack() as string

myIColonyView.getStructurePack();
```

:::

:::group{name=getTeam}

Return Type: [PlayerTeam](/mods/sdmcrtplus/world/scores/PlayerTeam)

```zenscript
// IColonyView.getTeam() as PlayerTeam

myIColonyView.getTeam();
```

:::

:::group{name=getTownHall}

Return Type: [ITownHallView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/ITownHallView)?

```zenscript
// IColonyView.getTownHall() as ITownHallView?

myIColonyView.getTownHall();
```

:::

:::group{name=getVisitor}

Return Type: [ICitizenDataView](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenDataView)

```zenscript
IColonyView.getVisitor(var1 as int) as ICitizenDataView
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getWorkOrders}

Return Type: Collection

```zenscript
// IColonyView.getWorkOrders() as Collection

myIColonyView.getWorkOrders();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// IColonyView.getWorld() as Level

myIColonyView.getWorld();
```

:::

:::group{name=hasTownHall}

Return Type: boolean

```zenscript
// IColonyView.hasTownHall() as boolean

myIColonyView.hasTownHall();
```

:::

:::group{name=hasWarehouse}

Return Type: boolean

```zenscript
// IColonyView.hasWarehouse() as boolean

myIColonyView.hasWarehouse();
```

:::

:::group{name=isCoordInColony}

Return Type: boolean

```zenscript
IColonyView.isCoordInColony(var1 as Level, var2 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=isManualHiring}

Return Type: boolean

```zenscript
// IColonyView.isManualHiring() as boolean

myIColonyView.isManualHiring();
```

:::

:::group{name=isManualHousing}

Return Type: boolean

```zenscript
// IColonyView.isManualHousing() as boolean

myIColonyView.isManualHousing();
```

:::

:::group{name=isPrintingProgress}

Return Type: boolean

```zenscript
// IColonyView.isPrintingProgress() as boolean

myIColonyView.isPrintingProgress();
```

:::

:::group{name=isRaiding}

Return Type: boolean

```zenscript
// IColonyView.isRaiding() as boolean

myIColonyView.isRaiding();
```

:::

:::group{name=isRemote}

Return Type: boolean

```zenscript
// IColonyView.isRemote() as boolean

myIColonyView.isRemote();
```

:::

:::group{name=markDirty}

```zenscript
// IColonyView.markDirty()

myIColonyView.markDirty();
```

:::

:::group{name=removeFreeBlock}

```zenscript
IColonyView.removeFreeBlock(var1 as Block)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=removeFreePosition}

```zenscript
IColonyView.removeFreePosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=removePlayer}

```zenscript
IColonyView.removePlayer(uuid as string)
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=removeVisitingPlayer}

```zenscript
IColonyView.removeVisitingPlayer(var1 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=setManualHiring}

```zenscript
IColonyView.setManualHiring(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setManualHousing}

```zenscript
IColonyView.setManualHousing(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setMoveIn}

```zenscript
IColonyView.setMoveIn(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setName}

```zenscript
IColonyView.setName(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::


