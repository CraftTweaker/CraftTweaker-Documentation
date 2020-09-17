# Nodo de Comandos

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Interfaces implementadas
MCLiteralCommandNode implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Métodos
### createBuilder

Tipo de retorno: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### igual a

Tipo de retorno: booleano

```zenscript
myMCLiteralCommandNode.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### getLiteral

Tipo de retorno: Cadena

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Tipo de retorno: booleano

```zenscript
myMCLiteralCommandNode.isValidInput(entrada como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| input     | Cadena | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCLiteralCommandNode.toString();
```


## Operadores
### IGUALES

```zenscript
myMCLiteralCommandNode == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

