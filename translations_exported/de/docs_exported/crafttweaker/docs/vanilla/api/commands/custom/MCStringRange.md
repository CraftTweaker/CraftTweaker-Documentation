# MCStringRange

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Methoden
### am

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| posten    | int  | Keine Beschreibung angegeben |


### zwischen

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(Start als int, Ende als int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| anfangen  | int  | Keine Beschreibung angegeben |
| ende      | int  | Keine Beschreibung angegeben |


### umfasste

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing((als crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Keine Beschreibung angegeben |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Keine Beschreibung angegeben |


### gleich

Rückgabetyp: boolesch

```zenscript
myMCStringRange.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### holen

Rückgabetyp: String

```zenscript
myMCStringRange.get(string as String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| string    | String | Keine Beschreibung angegeben |



Rückgabetyp: String

```zenscript
myMCStringRange.get(Leser als crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parameter | Type                                                                                                             | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| leser     | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Keine Beschreibung angegeben |


### getEnd

Rückgabetyp: int

```zenscript
myMCStringRange.getEnd();
```

### getLänge

Rückgabetyp: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Rückgabetyp: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Rückgabetyp: boolesch

```zenscript
myMCStringRange.isEmpty();
```

### toString

Rückgabetyp: String

```zenscript
myMCStringRange.toString();
```


