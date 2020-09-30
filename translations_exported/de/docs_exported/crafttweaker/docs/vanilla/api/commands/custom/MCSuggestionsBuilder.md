# MCSuggestions-Builder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methoden
### add

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(andere als crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### build

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### erstelle Versatz

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(Start als int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| anfangen  | int  | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Verbleibend

Return type: String

```zenscript
myMCSuggestionsBuilder.getVerbleibend();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### neu starten

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### vorschlagen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(Text als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | String | No description provided |



Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(Wert als int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| value     | int  | No description provided |



Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(Text als String, Tooltip als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | String | No description provided |
| tooltip   | String | No description provided |



Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(Wert als int, Tooltip als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| value     | int    | No description provided |
| tooltip   | String | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCSuggestionsBuilder == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

