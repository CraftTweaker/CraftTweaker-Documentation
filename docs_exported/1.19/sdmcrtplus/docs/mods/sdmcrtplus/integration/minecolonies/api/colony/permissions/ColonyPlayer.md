# ColonyPlayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.permissions.ColonyPlayer;
```


## Methods

:::group{name=getID}

Return Type: string

```zenscript
// ColonyPlayer.getID() as string

myColonyPlayer.getID();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// ColonyPlayer.getName() as string

myColonyPlayer.getName();
```

:::

:::group{name=getRank}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// ColonyPlayer.getRank() as Rank

myColonyPlayer.getRank();
```

:::

:::group{name=setRank}

```zenscript
ColonyPlayer.setRank(rank as Rank)
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| rank      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::


