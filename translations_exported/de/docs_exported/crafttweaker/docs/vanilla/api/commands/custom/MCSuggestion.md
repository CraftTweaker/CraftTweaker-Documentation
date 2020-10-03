# MCSuggestion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Methoden
### bewerben

Return type: String

```zenscript
myMCSuggestion.apply(Eingabe als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### vergleichen

Return type: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### vergleicheToIgnorieren-Fall

Return type: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestion.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ausklappen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(Befehl als String, Bereich als crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| command   | String                                                                                       | No description provided |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### getBereich

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Return type: String

```zenscript
myMCSuggestion.getText();
```

### getTooltip

Return type: String

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Return type: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestion.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCSuggestion == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

