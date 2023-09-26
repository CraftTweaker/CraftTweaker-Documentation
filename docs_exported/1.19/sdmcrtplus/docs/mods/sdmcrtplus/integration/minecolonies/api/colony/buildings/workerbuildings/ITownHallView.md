# ITownHallView

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.workerbuildings.ITownHallView;
```


## Implemented Interfaces
ITownHallView implements the following interfaces. That means all methods defined in these interfaces are also available in ITownHallView

- [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

## Methods

:::group{name=canPlayerUseTP}

Return Type: boolean

```zenscript
// ITownHallView.canPlayerUseTP() as boolean

myITownHallView.canPlayerUseTP();
```

:::

:::group{name=getColonyEvents}

Return Type: stdlib.List&lt;[IColonyEventDescription](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/descriptions/IColonyEventDescription)&gt;

```zenscript
// ITownHallView.getColonyEvents() as stdlib.List<IColonyEventDescription>

myITownHallView.getColonyEvents();
```

:::

:::group{name=getPermissionEvents}

Return Type: stdlib.List

```zenscript
// ITownHallView.getPermissionEvents() as stdlib.List

myITownHallView.getPermissionEvents();
```

:::


