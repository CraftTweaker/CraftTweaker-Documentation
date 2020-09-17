# MCPotion

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotion
```

## Interfaces implementadas
MCPotion implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getNamePrefixed

Devuelve Cadena

```zenscript
myMCPotion.getNamePrefixed(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |



## Propiedades

| Nombre           | Tipo                                                                                                  | Tiene Obtén | Tiene Setter |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| commandString    | Cadena                                                                                                | verdad      | falso        |
| efectos          | Lista <[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | verdad      | falso        |
| hasInstantEffect | boolean                                                                                               | verdad      | falso        |

