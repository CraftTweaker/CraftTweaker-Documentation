# DirectionAxis

Represents a direction axis (X, Y, Z)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Paramètre | Type de texte | Libellé                   |
| --------- | ------------- | ------------------------- |
| x         | Indice        | x value of the coordinate |
| y         | Indice        | y value of the coordinate |
| Z         | Indice        | z value of the coordinate |



## Propriétés

| Nom                | Type de texte        | Has Getter | Has Setter |
| ------------------ | -------------------- | ---------- | ---------- |
| Chaîne de commande | Chaîne de caractères | vrai       | Faux       |
| horizontal         | boolean              | vrai       | Faux       |
| Nom                | Chaîne de caractères | vrai       | Faux       |
| ordinal            | Indice               | vrai       | Faux       |
| vertical           | boolean              | vrai       | Faux       |

