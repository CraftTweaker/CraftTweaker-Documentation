# MCRedirectModifier

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Constructores
```zenscript
nuevo crafttweaker.api.commands.custom.MCRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| Parámetro | Tipo                                                                                                                                                                                                                                                                   | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| diversión | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Colección&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No se proporcionó descripción |



## Métodos
### aplicar

Tipo de retorno: Colección&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(contexto como crafttweaker.api.commands.custom.MCCommandContext);
```

| Parámetro | Tipo                                                                                               | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| contexto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCRedirectModifier.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### hashCode

Tipo de retorno: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCRedirectModifier.toString();
```


## Operadores
### IGUALES

```zenscript
myMCRedirectModifier == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

