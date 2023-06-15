# Server

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.Server;
```


## Implemented Interfaces
Server implements the following interfaces. That means all methods defined in these interfaces are also available in Server

- [CommandSource](/vanilla/api/command/CommandSource)
- AutoCloseable

## Methods

:::group{name=getOwnerPlayer}

Return Type: [Player](/mods/sixikutils/utils/entity/type/player/Player)

```zenscript
// Server.getOwnerPlayer() as Player

myServer.getOwnerPlayer();
```

:::


## Properties

|    Name     |                            Type                            | Has Getter | Has Setter |
|-------------|------------------------------------------------------------|------------|------------|
| ownerPlayer | [Player](/mods/sixikutils/utils/entity/type/player/Player) | true       | false      |

