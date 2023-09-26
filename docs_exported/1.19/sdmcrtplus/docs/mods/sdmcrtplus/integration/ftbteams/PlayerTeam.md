# PlayerTeam

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.PlayerTeam;
```


## Extending Team

PlayerTeam extends [Team](/mods/sdmcrtplus/integration/ftbteams/Team). That means all methods available in [Team](/mods/sdmcrtplus/integration/ftbteams/Team) are also available in PlayerTeam

## Methods

:::group{name=getActualTeam}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)

```zenscript
// PlayerTeam.getActualTeam() as Team

myPlayerTeam.getActualTeam();
```

:::

:::group{name=getPlayerName}

Return Type: string

```zenscript
// PlayerTeam.getPlayerName() as string

myPlayerTeam.getPlayerName();
```

:::

:::group{name=isOnline}

Return Type: boolean

```zenscript
// PlayerTeam.isOnline() as boolean

myPlayerTeam.isOnline();
```

:::


