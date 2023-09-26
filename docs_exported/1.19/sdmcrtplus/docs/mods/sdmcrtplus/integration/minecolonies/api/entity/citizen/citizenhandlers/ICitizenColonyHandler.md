# ICitizenColonyHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenColonyHandler;
```


## Methods

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
// ICitizenColonyHandler.getColony() as IColony?

myICitizenColonyHandler.getColony();
```

:::

:::group{name=getColonyId}

Return Type: int

```zenscript
// ICitizenColonyHandler.getColonyId() as int

myICitizenColonyHandler.getColonyId();
```

:::

:::group{name=getHomeBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)?

```zenscript
// ICitizenColonyHandler.getHomeBuilding() as IBuilding?

myICitizenColonyHandler.getHomeBuilding();
```

:::

:::group{name=getPerBuildingFoodCost}

Return Type: double

```zenscript
// ICitizenColonyHandler.getPerBuildingFoodCost() as double

myICitizenColonyHandler.getPerBuildingFoodCost();
```

:::

:::group{name=getWorkBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)?

```zenscript
// ICitizenColonyHandler.getWorkBuilding() as IBuilding?

myICitizenColonyHandler.getWorkBuilding();
```

:::

:::group{name=onCitizenRemoved}

```zenscript
// ICitizenColonyHandler.onCitizenRemoved()

myICitizenColonyHandler.onCitizenRemoved();
```

:::

:::group{name=registerWithColony}

```zenscript
ICitizenColonyHandler.registerWithColony(var1 as int, var2 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |
| var2      | int  |


:::

:::group{name=setColonyId}

```zenscript
ICitizenColonyHandler.setColonyId(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=updateColonyClient}

```zenscript
// ICitizenColonyHandler.updateColonyClient()

myICitizenColonyHandler.updateColonyClient();
```

:::


