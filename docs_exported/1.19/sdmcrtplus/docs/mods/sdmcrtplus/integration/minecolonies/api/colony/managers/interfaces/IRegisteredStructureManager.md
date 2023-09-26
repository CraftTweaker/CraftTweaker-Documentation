# IRegisteredStructureManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IRegisteredStructureManager;
```


## Methods

:::group{name=addField}

Return Type: boolean

```zenscript
IRegisteredStructureManager.addField(var1 as invalid) as boolean
```

| Parameter |    Type     |
|-----------|-------------|
| var1      | **invalid** |


:::

:::group{name=addLeisureSite}

```zenscript
IRegisteredStructureManager.addLeisureSite(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=addNewBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)?

```zenscript
IRegisteredStructureManager.addNewBuilding(var1 as AbstractTileEntityColonyBuilding, var2 as Level) as IBuilding?
```

| Parameter |                                                              Type                                                               |
|-----------|---------------------------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractTileEntityColonyBuilding](/mods/sdmcrtplus/integration/minecolonies/api/tileentities/AbstractTileEntityColonyBuilding) |
| var2      | [Level](/vanilla/api/world/Level)                                                                                               |


:::

:::group{name=canPlaceAt}

Return Type: boolean

```zenscript
IRegisteredStructureManager.canPlaceAt(var1 as Block, var2 as BlockPos, var3 as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Block](/vanilla/api/block/Block)                |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)      |
| var3      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=cleanUpBuildings}

```zenscript
IRegisteredStructureManager.cleanUpBuildings(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=clearDirty}

```zenscript
// IRegisteredStructureManager.clearDirty()

myIRegisteredStructureManager.clearDirty();
```

:::

:::group{name=getBestBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
IRegisteredStructureManager.getBestBuilding(var1 as AbstractEntityCitizen, var2 as Class) as BlockPos
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen) |
| var2      | Class                                                                                                       |


:::

:::group{name=getBestBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
IRegisteredStructureManager.getBestBuilding(var1 as BlockPos, var2 as Class) as BlockPos
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| var2      | Class                                       |


:::

:::group{name=getBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

```zenscript
IRegisteredStructureManager.getBuilding(var1 as BlockPos) as IBuilding
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBuilding}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable B

```zenscript
IRegisteredStructureManager.getBuilding<B : IBuilding>(var1 as BlockPos, var2 as Class<B>) as @org.openzen.zencode.java.ZenCodeType.Nullable B
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos)                                           |
| var2      | Class&lt;B&gt;                                                                        |
| B         | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |


:::

:::group{name=getBuildings}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)[[BlockPos](/vanilla/api/util/math/BlockPos)]

```zenscript
// IRegisteredStructureManager.getBuildings() as IBuilding[BlockPos]

myIRegisteredStructureManager.getBuildings();
```

:::

:::group{name=getClosestWarehouseInColony}

Return Type: [IWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/IWareHouse)?

```zenscript
IRegisteredStructureManager.getClosestWarehouseInColony(var1 as BlockPos) as IWareHouse?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getField}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)

```zenscript
IRegisteredStructureManager.getField(var1 as Predicate) as Optional
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate) |


:::

:::group{name=getFields}

Return Type: stdlib.List

```zenscript
IRegisteredStructureManager.getFields(var1 as Predicate) as stdlib.List
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate) |


:::

:::group{name=getFirstBuildingMatching}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
IRegisteredStructureManager.getFirstBuildingMatching(var1 as Predicate<IBuilding>) as BlockPos?
```

| Parameter |                                                                      Type                                                                       |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)&gt; |


:::

:::group{name=getHouseWithSpareBed}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

```zenscript
// IRegisteredStructureManager.getHouseWithSpareBed() as IBuilding

myIRegisteredStructureManager.getHouseWithSpareBed();
```

:::

:::group{name=getLeisureSites}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IRegisteredStructureManager.getLeisureSites() as stdlib.List<BlockPos>

myIRegisteredStructureManager.getLeisureSites();
```

:::

:::group{name=getMysticalSiteMaxBuildingLevel}

Return Type: int

```zenscript
// IRegisteredStructureManager.getMysticalSiteMaxBuildingLevel() as int

myIRegisteredStructureManager.getMysticalSiteMaxBuildingLevel();
```

:::

:::group{name=getMysticalSites}

Return Type: stdlib.List&lt;[IMysticalSite](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IMysticalSite)&gt;

```zenscript
// IRegisteredStructureManager.getMysticalSites() as stdlib.List<IMysticalSite>

myIRegisteredStructureManager.getMysticalSites();
```

:::

:::group{name=getRandomBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
IRegisteredStructureManager.getRandomBuilding(var1 as Predicate<IBuilding>) as BlockPos
```

| Parameter |                                                                      Type                                                                       |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)&gt; |


:::

:::group{name=getRandomLeisureSite}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IRegisteredStructureManager.getRandomLeisureSite() as BlockPos

myIRegisteredStructureManager.getRandomLeisureSite();
```

:::

:::group{name=getTownHall}

Return Type: [ITownHall](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/ITownHall)

```zenscript
// IRegisteredStructureManager.getTownHall() as ITownHall

myIRegisteredStructureManager.getTownHall();
```

:::

:::group{name=getWareHouses}

Return Type: stdlib.List&lt;[IWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/IWareHouse)&gt;

```zenscript
// IRegisteredStructureManager.getWareHouses() as stdlib.List<IWareHouse>

myIRegisteredStructureManager.getWareHouses();
```

:::

:::group{name=guardBuildingChangedAt}

```zenscript
IRegisteredStructureManager.guardBuildingChangedAt(var1 as IBuilding, var2 as int)
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |
| var2      | int                                                                                   |


:::

:::group{name=hasGuardBuildingNear}

Return Type: boolean

```zenscript
IRegisteredStructureManager.hasGuardBuildingNear(var1 as IBuilding) as boolean
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |


:::

:::group{name=hasMysticalSite}

Return Type: boolean

```zenscript
// IRegisteredStructureManager.hasMysticalSite() as boolean

myIRegisteredStructureManager.hasMysticalSite();
```

:::

:::group{name=hasTownHall}

Return Type: boolean

```zenscript
// IRegisteredStructureManager.hasTownHall() as boolean

myIRegisteredStructureManager.hasTownHall();
```

:::

:::group{name=hasWarehouse}

Return Type: boolean

```zenscript
// IRegisteredStructureManager.hasWarehouse() as boolean

myIRegisteredStructureManager.hasWarehouse();
```

:::

:::group{name=isWithinBuildingZone}

Return Type: boolean

```zenscript
IRegisteredStructureManager.isWithinBuildingZone(var1 as LevelChunk) as boolean
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=markBuildingsDirty}

```zenscript
// IRegisteredStructureManager.markBuildingsDirty()

myIRegisteredStructureManager.markBuildingsDirty();
```

:::

:::group{name=markFieldsDirty}

```zenscript
// IRegisteredStructureManager.markFieldsDirty()

myIRegisteredStructureManager.markFieldsDirty();
```

:::

:::group{name=onBuildingUpgradeComplete}

```zenscript
IRegisteredStructureManager.onBuildingUpgradeComplete(var1 as IBuilding?, var2 as int)
```

| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)? |
| var2      | int                                                                                    |


:::

:::group{name=onColonyTick}

```zenscript
IRegisteredStructureManager.onColonyTick(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=read}

```zenscript
IRegisteredStructureManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=removeBuilding}

```zenscript
IRegisteredStructureManager.removeBuilding(var1 as IBuilding, var2 as Set<ServerPlayer>)
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |
| var2      | Set&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;               |


:::

:::group{name=removeField}

```zenscript
IRegisteredStructureManager.removeField(var1 as Predicate)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate) |


:::

:::group{name=removeLeisureSite}

```zenscript
IRegisteredStructureManager.removeLeisureSite(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=removeMysticalSite}

```zenscript
IRegisteredStructureManager.removeMysticalSite(var1 as IMysticalSite)
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | [IMysticalSite](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IMysticalSite) |


:::

:::group{name=removeWareHouse}

```zenscript
IRegisteredStructureManager.removeWareHouse(var1 as IWareHouse)
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| var1      | [IWareHouse](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/IWareHouse) |


:::

:::group{name=sendPackets}

```zenscript
IRegisteredStructureManager.sendPackets(var1 as Set<ServerPlayer>, var2 as Set<ServerPlayer>)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | Set&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt; |
| var2      | Set&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt; |


:::

:::group{name=setTownHall}

```zenscript
IRegisteredStructureManager.setTownHall(var1 as ITownHall?)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [ITownHall](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/workerbuildings/ITownHall)? |


:::

:::group{name=stopTrackingBuildingLevelUp}

```zenscript
IRegisteredStructureManager.stopTrackingBuildingLevelUp(var1 as BuildingEntry, var2 as IQuestInstance)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry) |
| var2      | [IQuestInstance](/mods/sdmcrtplus/integration/minecolonies/api/quests/IQuestInstance)                  |


:::

:::group{name=trackBuildingLevelUp}

```zenscript
IRegisteredStructureManager.trackBuildingLevelUp(var1 as BuildingEntry, var2 as IQuestInstance)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry) |
| var2      | [IQuestInstance](/mods/sdmcrtplus/integration/minecolonies/api/quests/IQuestInstance)                  |


:::

:::group{name=write}

```zenscript
IRegisteredStructureManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


