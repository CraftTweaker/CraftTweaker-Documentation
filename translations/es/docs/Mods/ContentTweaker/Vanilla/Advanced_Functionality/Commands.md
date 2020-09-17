# Comandos

Puedes usar esta clase para enviar un comando, ¡no puedes usar esta clase para crear nuevos comandos! Mira [CommandEvent](/Vanilla/Events/Events/CommandEvent/) para añadir nuevos comandos. También puede utilizar un [ICommandManager](/Vanilla/Commands/ICommandManager/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Commands;`

## Llamando a un comando

Esto es lo único que puede hacer con el paquete Commands.

```zenscript
call(String command, IPlayer player, IWorld world)
call(String command, IPlayer player, IWorld world, boolean logToChat, boolean overridePermiss)
```

Parámetros:

- Comando de cadena → El comando a ejecutar
- [IPlayer](/Vanilla/Players/IPlayer/) jugador → El jugador ejecutando el comando
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) mundo → El mundo en el que se ejecuta el comando
- boolean logToChat → ¿Debería la salida del comando aparecer en el chat MC?
- los permisos booleanos deben ser ejecutados independientemente del nivel de permisos requerido?

Los dos booleanos deben ser añadidos o omitidos. Si llama al comando sin ellos, serán ciertos.