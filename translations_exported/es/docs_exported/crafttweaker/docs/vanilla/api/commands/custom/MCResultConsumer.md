# Consumidor MCResultado

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Interfaz funcional

Esta clase es una interfaz funcional. Esto significa que puede usar la notación lambda para crear una instancia de ella. La noción de lambda se ve así:
```zenscript
(commandContext, successs, resultado) =>{}
```
## Métodos
### onCommandComplete

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, success as boolean, result as int);
```

| Parámetro       | Tipo                                                                                               | Descripción                   |
| --------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| comandoContexto | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No se proporcionó descripción |
| éxito           | boolean                                                                                            | No se proporcionó descripción |
| resultado       | int                                                                                                | No se proporcionó descripción |



