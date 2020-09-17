# MCResource-Standort

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Implementierte Schnittstellen
MCResourceLocation implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Konstrukteure
```zenscript
neue crafttweaker.api.util.MCResourceLocation(Namensraum als String, Pfad als String);
```
| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| namespace | String | Keine Beschreibung angegeben |
| pfad      | String | Keine Beschreibung angegeben |



## Methoden
### vergleichen

Rückgabetyp: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ als crafttweaker.api.util.MCResourceLocation);
```

| Parameter            | Type                                                                             | Beschreibung                 |
| -------------------- | -------------------------------------------------------------------------------- | ---------------------------- |
| p_vergleiche zu_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Keine Beschreibung angegeben |


### gleich

Rückgabetyp: boolesch

```zenscript
myMCResourceLocation.equals(andere als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| andere    | Objekt | Keine Beschreibung angegeben |


### getNamespace

Rückgabetyp: String

```zenscript
myMCResourceLocation.getNamespace();
```

### getPfad

Rückgabetyp: String

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Rückgabetyp: String

```zenscript
myMCResourceLocation.toString();
```


## Eigenschaften

| Name          | Type   | Hat Getter | Hat Setter |
| ------------- | ------ | ---------- | ---------- |
| Kommandozeile | String | true       | false      |
| namespace     | String | true       | false      |
| pfad          | String | true       | false      |

