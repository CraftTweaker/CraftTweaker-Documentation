# LocalPlayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.entity.client.LocalPlayer;
```


## Methods

:::group{name=getClientPlayer}

Return Type: [Player](/mods/sixikutils/utils/entity/type/player/Player)

```zenscript
// LocalPlayer.getClientPlayer() as Player

myLocalPlayer.getClientPlayer();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// LocalPlayer.getLevel() as Level

myLocalPlayer.getLevel();
```

:::

:::group{name=getServer}

Return Type: [ServerLevel](/mods/sixikutils/utils/world/ServerLevel)

```zenscript
// LocalPlayer.getServer() as ServerLevel

myLocalPlayer.getServer();
```

:::

:::group{name=getUUID}

Return Type: string

```zenscript
// LocalPlayer.getUUID() as string

myLocalPlayer.getUUID();
```

:::


## Properties

|  Name  |                            Type                            | Has Getter | Has Setter |
|--------|------------------------------------------------------------|------------|------------|
| level  | [Level](/vanilla/api/world/Level)                          | true       | false      |
| player | [Player](/mods/sixikutils/utils/entity/type/player/Player) | true       | false      |
| server | [ServerLevel](/mods/sixikutils/utils/world/ServerLevel)    | true       | false      |
| uuid   | string                                                     | true       | false      |

