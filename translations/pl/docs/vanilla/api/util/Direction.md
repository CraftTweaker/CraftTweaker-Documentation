# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.Direction
```

## Metody
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parametr | Typ                                                                    | Opis                      |
| -------- | ---------------------------------------------------------------------- | ------------------------- |
| axis     | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Właściwości

| Nazwisko        | Typ                                                                    | Has Getter | Has Setter |
| --------------- | ---------------------------------------------------------------------- | ---------- | ---------- |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | prawda     | fałszywy   |
| axisOffset      | odcień                                                                 | prawda     | fałszywy   |
| horizontalAngle | zmiennoprzecinkowe                                                     | prawda     | fałszywy   |
| horizontalIndex | odcień                                                                 | prawda     | fałszywy   |
| indeks          | odcień                                                                 | prawda     | fałszywy   |
| Nazwa           | Ciąg znaków                                                            | prawda     | fałszywy   |
| przeciwnie      | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | prawda     | fałszywy   |
| xOffset         | odcień                                                                 | prawda     | fałszywy   |
| yOffset         | odcień                                                                 | prawda     | fałszywy   |
| zOffset         | odcień                                                                 | prawda     | fałszywy   |

