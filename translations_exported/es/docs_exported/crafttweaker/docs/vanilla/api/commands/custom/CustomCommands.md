# Comandos personalizados

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.Comandos personalizados
```

## Métodos
### argumento

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument(nombre como String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### literal

Tipo de retorno: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(nombre como String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### registrarComando

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parámetro   | Tipo                                                                                                               | Descripción                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| constructor | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No se proporcionó descripción |



