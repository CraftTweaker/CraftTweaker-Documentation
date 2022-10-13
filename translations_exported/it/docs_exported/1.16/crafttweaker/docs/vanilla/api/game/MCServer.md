# MCServer



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.MCServer;
```


## Interfacce Implementate
MCServer implements the following interfaces. That means all methods defined in these interfaces are also available in MCServer

- AutoCloseable

## Metodi

:::group{name=executeCommand}

Runs a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.

 Note: Some commands' success value is 0

Return Type: int

```zenscript
// MCServer.executeCommand(command as string, silent as boolean) as int

world.asServerWorld().server.executeCommand("time set day", true);
```

| Parametro | Tipo    | Descrizione             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| command   | string  | No Description Provided | no       |              |
| silent    | boolean | No Description Provided | sì       | no           |


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

| Parametro | Tipo                                                 | Descrizione             | Optional | DefaultValue |
| --------- | ---------------------------------------------------- | ----------------------- | -------- | ------------ |
| command   | string                                               | No Description Provided | no       |              |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided | no       |              |
| silent    | boolean                                              | No Description Provided | sì       | no           |


:::

:::group{name=getWorld}

Get a server world instance based on resource location Throws an exception if the world location is unknown

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
// MCServer.getWorld(location as MCResourceLocation) as MCServerWorld

world.asServerWorld().server.getWorld(<resource:minecraft:the_end>);
```

| Parametro | Tipo                                                       | Descrizione             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| posizione | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::


## Proprietà

| Nome   | Tipo                                                                            | Ha Getter | Ha Setter | Descrizione             |
| ------ | ------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| worlds | Collection&lt;[MCServerWorld](/vanilla/api/world/MCServerWorld)&gt; | sì        | no        | No Description Provided |

