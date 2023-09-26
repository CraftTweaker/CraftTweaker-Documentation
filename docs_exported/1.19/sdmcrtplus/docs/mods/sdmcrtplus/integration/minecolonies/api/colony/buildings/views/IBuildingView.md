# IBuildingView

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.views.IBuildingView;
```


## Implemented Interfaces
IBuildingView implements the following interfaces. That means all methods defined in these interfaces are also available in IBuildingView

- [IRequester](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/requester/IRequester)

## Methods

:::group{name=allowsAssignment}

Return Type: boolean

```zenscript
// IBuildingView.allowsAssignment() as boolean

myIBuildingView.allowsAssignment();
```

:::

:::group{name=getAllAssignedCitizens}

Return Type: Set&lt;int?&gt;

```zenscript
// IBuildingView.getAllAssignedCitizens() as Set<int?>

myIBuildingView.getAllAssignedCitizens();
```

:::

:::group{name=getAllModuleViews}

Return Type: stdlib.List&lt;[IBuildingModuleView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/IBuildingModuleView)&gt;

```zenscript
// IBuildingView.getAllModuleViews() as stdlib.List<IBuildingModuleView>

myIBuildingView.getAllModuleViews();
```

:::

:::group{name=getBuildingDmPrio}

Return Type: int

```zenscript
// IBuildingView.getBuildingDmPrio() as int

myIBuildingView.getBuildingDmPrio();
```

:::

:::group{name=getBuildingLevel}

Return Type: int

```zenscript
// IBuildingView.getBuildingLevel() as int

myIBuildingView.getBuildingLevel();
```

:::

:::group{name=getBuildingMaxLevel}

Return Type: int

```zenscript
// IBuildingView.getBuildingMaxLevel() as int

myIBuildingView.getBuildingMaxLevel();
```

:::

:::group{name=getBuildingType}

Return Type: [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry)

```zenscript
// IBuildingView.getBuildingType() as BuildingEntry

myIBuildingView.getBuildingType();
```

:::

:::group{name=getClaimRadius}

Return Type: int

```zenscript
// IBuildingView.getClaimRadius() as int

myIBuildingView.getClaimRadius();
```

:::

:::group{name=getColony}

Return Type: [IColonyView](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColonyView)

```zenscript
// IBuildingView.getColony() as IColonyView

myIBuildingView.getColony();
```

:::

:::group{name=getContainerList}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IBuildingView.getContainerList() as stdlib.List<BlockPos>

myIBuildingView.getContainerList();
```

:::

:::group{name=getCurrentWorkOrderLevel}

Return Type: int

```zenscript
// IBuildingView.getCurrentWorkOrderLevel() as int

myIBuildingView.getCurrentWorkOrderLevel();
```

:::

:::group{name=getCustomName}

Return Type: string

```zenscript
// IBuildingView.getCustomName() as string

myIBuildingView.getCustomName();
```

:::

:::group{name=getID}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IBuildingView.getID() as BlockPos

myIBuildingView.getID();
```

:::

:::group{name=getOpenRequests}

Return Type: stdlib.List&lt;[IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)&gt;

```zenscript
IBuildingView.getOpenRequests(var1 as ICitizenDataView) as stdlib.List<IRequest>
```

| Parameter |                                           Type                                            |
|-----------|-------------------------------------------------------------------------------------------|
| var1      | [ICitizenDataView](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenDataView) |


:::

:::group{name=getOpenRequestsByCitizen}

Return Type: Collection&lt;[IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken)&gt;[int?]

```zenscript
// IBuildingView.getOpenRequestsByCitizen() as Collection<IToken>[int?]

myIBuildingView.getOpenRequestsByCitizen();
```

:::

:::group{name=getOpenRequestsOfBuilding}

Return Type: stdlib.List&lt;[IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)&gt;

```zenscript
// IBuildingView.getOpenRequestsOfBuilding() as stdlib.List<IRequest>

myIBuildingView.getOpenRequestsOfBuilding();
```

:::

:::group{name=getParent}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IBuildingView.getParent() as BlockPos

myIBuildingView.getParent();
```

:::

:::group{name=getPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IBuildingView.getPosition() as BlockPos

myIBuildingView.getPosition();
```

:::

:::group{name=getResolverIds}

Return Type: stdlib.List&lt;[IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken)&gt;

```zenscript
// IBuildingView.getResolverIds() as stdlib.List<IToken>

myIBuildingView.getResolverIds();
```

:::

:::group{name=getRotation}

Return Type: int

```zenscript
// IBuildingView.getRotation() as int

myIBuildingView.getRotation();
```

:::

:::group{name=getStructurePack}

Return Type: string

```zenscript
// IBuildingView.getStructurePack() as string

myIBuildingView.getStructurePack();
```

:::

:::group{name=getStructurePath}

Return Type: string

```zenscript
// IBuildingView.getStructurePath() as string

myIBuildingView.getStructurePath();
```

:::

:::group{name=hasWorkOrder}

Return Type: boolean

```zenscript
// IBuildingView.hasWorkOrder() as boolean

myIBuildingView.hasWorkOrder();
```

:::

:::group{name=isBuilding}

Return Type: boolean

```zenscript
// IBuildingView.isBuilding() as boolean

myIBuildingView.isBuilding();
```

:::

:::group{name=isBuildingMaxLevel}

Return Type: boolean

```zenscript
// IBuildingView.isBuildingMaxLevel() as boolean

myIBuildingView.isBuildingMaxLevel();
```

:::

:::group{name=isDeconstructed}

Return Type: boolean

```zenscript
// IBuildingView.isDeconstructed() as boolean

myIBuildingView.isDeconstructed();
```

:::

:::group{name=isDeconstructing}

Return Type: boolean

```zenscript
// IBuildingView.isDeconstructing() as boolean

myIBuildingView.isDeconstructing();
```

:::

:::group{name=isMirrored}

Return Type: boolean

```zenscript
// IBuildingView.isMirrored() as boolean

myIBuildingView.isMirrored();
```

:::

:::group{name=isRepairing}

Return Type: boolean

```zenscript
// IBuildingView.isRepairing() as boolean

myIBuildingView.isRepairing();
```

:::

:::group{name=registerModule}

```zenscript
IBuildingView.registerModule(var1 as IBuildingModuleView)
```

| Parameter |                                                        Type                                                        |
|-----------|--------------------------------------------------------------------------------------------------------------------|
| var1      | [IBuildingModuleView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/IBuildingModuleView) |


:::

:::group{name=setBuildingType}

```zenscript
IBuildingView.setBuildingType(var1 as BuildingEntry)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry) |


:::

:::group{name=setCustomName}

```zenscript
IBuildingView.setCustomName(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::


