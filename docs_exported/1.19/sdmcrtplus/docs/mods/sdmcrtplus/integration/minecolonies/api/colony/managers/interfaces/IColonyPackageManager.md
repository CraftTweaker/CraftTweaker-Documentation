# IColonyPackageManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IColonyPackageManager;
```


## Methods

:::group{name=addCloseSubscriber}

```zenscript
IColonyPackageManager.addCloseSubscriber(var1 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=addImportantColonyPlayer}

```zenscript
IColonyPackageManager.addImportantColonyPlayer(var1 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=getCloseSubscribers}

Return Type: Set&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// IColonyPackageManager.getCloseSubscribers() as Set<ServerPlayer>

myIColonyPackageManager.getCloseSubscribers();
```

:::

:::group{name=getImportantColonyPlayers}

Return Type: Set&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// IColonyPackageManager.getImportantColonyPlayers() as Set<ServerPlayer>

myIColonyPackageManager.getImportantColonyPlayers();
```

:::

:::group{name=getLastContactInHours}

Return Type: int

```zenscript
// IColonyPackageManager.getLastContactInHours() as int

myIColonyPackageManager.getLastContactInHours();
```

:::

:::group{name=removeCloseSubscriber}

```zenscript
IColonyPackageManager.removeCloseSubscriber(var1 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=removeImportantColonyPlayer}

```zenscript
IColonyPackageManager.removeImportantColonyPlayer(var1 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=sendColonyViewPackets}

```zenscript
// IColonyPackageManager.sendColonyViewPackets()

myIColonyPackageManager.sendColonyViewPackets();
```

:::

:::group{name=sendPermissionsPackets}

```zenscript
// IColonyPackageManager.sendPermissionsPackets()

myIColonyPackageManager.sendPermissionsPackets();
```

:::

:::group{name=sendWorkOrderPackets}

```zenscript
// IColonyPackageManager.sendWorkOrderPackets()

myIColonyPackageManager.sendWorkOrderPackets();
```

:::

:::group{name=setDirty}

```zenscript
// IColonyPackageManager.setDirty()

myIColonyPackageManager.setDirty();
```

:::

:::group{name=setLastContactInHours}

```zenscript
IColonyPackageManager.setLastContactInHours(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=updateAwayTime}

```zenscript
// IColonyPackageManager.updateAwayTime()

myIColonyPackageManager.updateAwayTime();
```

:::

:::group{name=updateSubscribers}

```zenscript
// IColonyPackageManager.updateSubscribers()

myIColonyPackageManager.updateSubscribers();
```

:::


