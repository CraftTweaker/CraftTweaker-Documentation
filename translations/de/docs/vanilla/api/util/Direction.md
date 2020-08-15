# Richtung

Stellt eine Kardinalrichtung (Norden, Süden, Osten, Westen) und (oben und unten).

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.Richtung
```

## Methoden
### drehen um Runde

Dreht diese Richtung um eine bestimmte Achse

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(Achse als crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parameter | Type                                                                   | Beschreibung                     |
| --------- | ---------------------------------------------------------------------- | -------------------------------- |
| achse     | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | die Achse, um die es drehen soll |


### rotateY

Dreht diese Richtung auf die Y-Achse

 Gibt `die Richtung zurück, die auf der Y-Achse dieser Richtung gedreht wurde`

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Dreht diese Richtung gegen die Uhr auf der Y-Achse

 Gibt `die Richtung zurück, die im Uhrzeigersinn auf der Y-Achse ist`

Gibt [craftweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Eigenschaften

| Name             | Type                                                                   | Hat Getter | Hat Setter |
| ---------------- | ---------------------------------------------------------------------- | ---------- | ---------- |
| achse            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true       | false      |
| axisOffset       | int                                                                    | true       | false      |
| horizontalwinkel | float                                                                  | true       | false      |
| horizontalIndex  | int                                                                    | true       | false      |
| indexieren       | int                                                                    | true       | false      |
| name             | String                                                                 | true       | false      |
| entgegengesetzt  | [crafttweaker.api.util.Richtung](/vanilla/api/util/Direction)          | true       | false      |
| xOffset          | int                                                                    | true       | false      |
| yOffset          | int                                                                    | true       | false      |
| zOffset          | int                                                                    | true       | false      |

