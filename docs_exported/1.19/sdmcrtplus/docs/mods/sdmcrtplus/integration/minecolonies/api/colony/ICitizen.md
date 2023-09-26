# ICitizen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.ICitizen;
```


## Methods

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// ICitizen.getColony() as IColony

myICitizen.getColony();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// ICitizen.getId() as int

myICitizen.getId();
```

:::

:::group{name=getInventory}

Return Type: [InventoryCitizen](/mods/sdmcrtplus/integration/minecolonies/api/inventory/InventoryCitizen)

```zenscript
// ICitizen.getInventory() as InventoryCitizen

myICitizen.getInventory();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// ICitizen.getName() as string

myICitizen.getName();
```

:::

:::group{name=getSaturation}

Return Type: double

```zenscript
// ICitizen.getSaturation() as double

myICitizen.getSaturation();
```

:::

:::group{name=isChild}

Return Type: boolean

```zenscript
// ICitizen.isChild() as boolean

myICitizen.isChild();
```

:::

:::group{name=isFemale}

Return Type: boolean

```zenscript
// ICitizen.isFemale() as boolean

myICitizen.isFemale();
```

:::

:::group{name=isPaused}

Return Type: boolean

```zenscript
// ICitizen.isPaused() as boolean

myICitizen.isPaused();
```

:::

:::group{name=setPaused}

```zenscript
ICitizen.setPaused(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::


