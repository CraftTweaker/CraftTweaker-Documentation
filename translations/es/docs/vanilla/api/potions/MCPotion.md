# MCPotion

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotion
```

## Implemented Interfaces
MCPotion implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getNamePrefixed

Returns String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| nombre    | Cadena | No description provided |



## Propiedades

| Nombre           | Tipo                                                                                                | Has Getter | Has Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| commandString    | Cadena                                                                                              | verdad     | falso      |
| effects          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | verdad     | falso      |
| hasInstantEffect | boolean                                                                                             | verdad     | falso      |

