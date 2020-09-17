# Richtachse

Stellt eine Richtungsachse dar (X, Y, Z)

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implementierte Schnittstellen
DirectionAxis implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### getKoordinate

Ruft die Koordinate dieser Achse basierend auf den angegebenen Werten ab wenn diese Achse "X" ist, dann gibt sie den Wert des "x" Parameters zurück

 Gibt `Wert der Koordinate zurück`

Rückgabetyp: Doppelt

```zenscript
<directionaxis:x>.getCoordinate(x Doppelt, y doppelt, z als Doppel);
<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| Parameter | Type   | Beschreibung          |
| --------- | ------ | --------------------- |
| x         | double | x-Wert der Koordinate |
| y         | double | y Wert der Koordinate |
| z         | double | z Wert der Koordinate |



Ruft die Koordinate dieser Achse basierend auf den angegebenen Werten ab wenn diese Achse "X" ist, dann gibt sie den Wert des "x" Parameters zurück

 Gibt `Wert der Koordinate zurück`

Rückgabetyp: int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parameter | Type | Beschreibung          |
| --------- | ---- | --------------------- |
| x         | int  | x-Wert der Koordinate |
| y         | int  | y Wert der Koordinate |
| z         | int  | z Wert der Koordinate |



## Eigenschaften

| Name          | Type    | Hat Getter | Hat Setter |
| ------------- | ------- | ---------- | ---------- |
| Kommandozeile | String  | true       | false      |
| horizontal    | boolean | true       | false      |
| name          | String  | true       | false      |
| normal        | int     | true       | false      |
| vertikal      | boolean | true       | false      |

