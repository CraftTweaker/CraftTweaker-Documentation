# IServer

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.server.IServer;`

## Extendiendo ICommandSender

IServer extiende [ICommandSender](/Vanilla/Commands/ICommandSender), por lo que todos los métodos disponibles para un objeto [ICommandSender](/Vanilla/Commands/ICommandSender) también están disponibles para un objeto IServer.

## Acceder al gestor del servidor

Puede acceder al Handler del Servidor usando la palabra clave `servidor` [global](/Vanilla/Global_Functions/).  
También puedes obtener el servidor de cualquier [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Comprueba si un jugador [](/Vanilla/Players/IPlayer/) es OP

Puedes usar esto para comprobar si un [IPlayer](/Vanilla/Players/IPlayer/) tiene el permiso OP:

```zenscript
servidor.isOP(jugador);
```

## Obtener el gestor de comandos

Puedes usar esto para obtener el [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager;
```