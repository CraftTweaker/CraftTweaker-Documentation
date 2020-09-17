# MCCommand

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructores
```zenscript
nuevo crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Parámetro | Tipo                                                                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| diversión | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | No se proporcionó descripción |



## Métodos
### igual a

Tipo de retorno: booleano

```zenscript
myMCCommand.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### hashCode

Tipo de retorno: int

```zenscript
myMCCommand.hashCode();
```

### correr

Tipo de retorno: int

```zenscript
myMCCommand.run(contexto como crafttweaker.api.commands.custom.MCCommandContext);
```

| Parámetro | Tipo                                                                                               | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| contexto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCCommand.toString();
```


## Operadores
### IGUALES

```zenscript
myMCCommand == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

