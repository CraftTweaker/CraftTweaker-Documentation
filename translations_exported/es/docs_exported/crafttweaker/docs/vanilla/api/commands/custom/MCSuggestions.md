# MCSuggouts

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCSuggouts
```

## Métodos
### crear

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(command as String, suggestions as Collection<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parámetro   | Tipo                                                                                                                    | Descripción                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| comando     | Cadena                                                                                                                  | No se proporcionó descripción |
| sugerencias | Colección&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No se proporcionó descripción |


### vacío

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### igual a

Tipo de retorno: booleano

```zenscript
myMCSuggestions.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### getList

Tipo de retorno: Lista&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Tipo de retorno: booleano

```zenscript
myMCSuggestions.isEmpty();
```

### fusión

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(comando como String, entrada como Colección<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parámetro | Tipo                                                                                                                     | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | Cadena                                                                                                                   | No se proporcionó descripción |
| input     | Colección&lt;[crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)&gt; | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCSuggestions.toString();
```


## Operadores
### IGUALES

```zenscript
myMCSuggeries, == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

