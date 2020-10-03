# MCStringRange

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Methoden
### am

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| pos       | int  | No description provided |


### zwischen

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(Start als int, Ende als int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| anfangen  | int  | No description provided |
| ende      | int  | No description provided |


### umfasste

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing((als crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### equals

Return type: boolean

```zenscript
myMCStringRange.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### get

Return type: String

```zenscript
myMCStringRange.get(string as String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| string    | String | No description provided |



Return type: String

```zenscript
myMCStringRange.get(Leser als crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parameter | Type                                                                                                             | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| leser     | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No description provided |


### getEnd

Return type: int

```zenscript
myMCStringRange.getEnd();
```

### getLänge

Return type: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Return type: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Return type: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCStringRange.isEmpty();
```

### toString

Return type: String

```zenscript
myMCStringRange.toString();
```


