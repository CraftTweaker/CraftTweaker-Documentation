# DirectionAxis

Represents a direction axis (X, Y, Z)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parametr | Typ    | Opis                      |
| -------- | ------ | ------------------------- |
| x        | odcień | x value of the coordinate |
| y        | odcień | y value of the coordinate |
| z        | odcień | z value of the coordinate |



## Właściwości

| Nazwisko   | Typ         | Has Getter | Has Setter |
| ---------- | ----------- | ---------- | ---------- |
| polecenie  | Ciąg znaków | prawda     | fałszywy   |
| horizontal | boolean     | prawda     | fałszywy   |
| Nazwa      | Ciąg znaków | prawda     | fałszywy   |
| ordinal    | odcień      | prawda     | fałszywy   |
| vertical   | boolean     | prawda     | fałszywy   |

