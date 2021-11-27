# MCServer



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.MCServer;
```


## Implemented Interfaces
MCServer implements the following interfaces. That means all methods defined in these interfaces are also available in MCServer

- AutoCloseable

## Methods

:::group{name=executeCommand}

Runs a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.
 
 Note: Some commands' success value is 0

Return Type: int

```zenscript
// MCServer.executeCommand(command as string, silent as boolean) as int

world.asServerWorld().server.executeCommand("time set day", true);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| command | string | No Description Provided | false |  |
| silent | boolean | No Description Provided | true | false |


:::

:::group{name=executeCommand}

let a player send a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.
 
 Note: Some commands' success value is 0

Return Type: int

```zenscript
// MCServer.executeCommand(command as string, player as MCPlayerEntity, silent as boolean) as int

world.asServerWorld().server.executeCommand("time set day", player, true);
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| command | string | No Description Provided | false |  |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided | false |  |
| silent | boolean | No Description Provided | true | false |


:::

:::group{name=getWorld}

Get a server world instance based on resource location
 Throws an exception if the world location is unknown

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
// MCServer.getWorld(location as MCResourceLocation) as MCServerWorld

world.asServerWorld().server.getWorld(<resource:minecraft:the_end>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| worlds | Collection&lt;[MCServerWorld](/vanilla/api/world/MCServerWorld)&gt; | true | false | No Description Provided |

