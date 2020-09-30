# MCSuggestionen

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Methoden
### erstellen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(Befehl als String, Vorschläge als Sammlung<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parameter  | Type                                                                                                                   | Beschreibung            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| command    | String                                                                                                                 | No description provided |
| vorschläge | Sammlung&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No description provided |


### empty

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### equals

Return type: boolean

```zenscript
myMCSuggestions.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getListe

Rückgabetyp: Liste&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getBereich

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Return type: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### merge

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(Befehl als String, Eingabe als Sammlung<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parameter | Type                                                                                                                     | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                                                   | No description provided |
| input     | Sammlung&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestions.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCSuggestions == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

