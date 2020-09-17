# MCSingleRedirectModifier

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Constructores
```zenscript
nuevo crafttweaker.api.commands.custom.MCSingleRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Parámetro | Tipo                                                                                                                                                                                                                                      | Descripción                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| diversión | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No se proporcionó descripción |



## Métodos
### aplicar

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parámetro | Tipo                                                                                               | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| contexto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCSingleRedirectModifier.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### hashCode

Tipo de retorno: int

```zenscript
myMCSingleRedirectModifier.hashCode();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCSingleRedirectModifier.toString();
```


## Operadores
### IGUALES

```zenscript
myMCSingleRedirectModifier == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

