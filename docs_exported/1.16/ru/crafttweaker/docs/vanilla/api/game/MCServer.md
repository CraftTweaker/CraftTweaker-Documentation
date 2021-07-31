# MCServer

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.MCServer;
```


## Implemented Interfaces
MCServer implements the following interfaces. That means all methods defined in these interfaces are also available in MCServer

- AutoCloseable

## Methods

:::group{name=executeCommand}

Runs a command.

 Returns The success value of the command, or 0 if an exception occurred. <p> Note: Some commands' success value is 0

Return Type: int

```zenscript
MCServer.executeCommand(command as string) as int
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| command  | string | No Description Provided |


:::

:::group{name=executeCommand}

let a player send a command

 Returns The success value of the command, or 0 if an exception occurred. <p> Note: Some commands' success value is 0

Return Type: int

```zenscript
MCServer.executeCommand(command as string, player as MCPlayerEntity) as int
```

| Параметр | Тип                                                  | Description             |
| -------- | ---------------------------------------------------- | ----------------------- |
| command  | string                                               | No Description Provided |
| player   | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |


:::

:::group{name=getWorld}

Get a server world instance based on resource location Throws an exception if the world location is unknown

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
MCServer.getWorld(location as MCResourceLocation) as MCServerWorld
myMCServer.getWorld(<resource:minecraft:the_end>);
```

| Параметр       | Тип                                                                      | Description             |
| -------------- | ------------------------------------------------------------------------ | ----------------------- |
| местоположение | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::


## Свойства

| Название | Тип                                                                             | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------------------------------------------------- | ------------ | ------------ |
| worlds   | Collection&lt;[MCServerWorld](/vanilla/api/world/MCServerWorld)&gt; | true         | false        |

