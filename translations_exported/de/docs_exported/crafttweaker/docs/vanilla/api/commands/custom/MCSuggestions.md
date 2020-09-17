# MCSuggestionen

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Methoden
### erstellen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(Befehl als String, Vorschläge als Sammlung<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parameter  | Type                                                                                                                   | Beschreibung                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| befehl     | String                                                                                                                 | Keine Beschreibung angegeben |
| vorschläge | Sammlung&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Keine Beschreibung angegeben |


### leer

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### gleich

Rückgabetyp: boolesch

```zenscript
myMCSuggestions.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


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

Rückgabetyp: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Rückgabetyp: boolesch

```zenscript
myMCSuggestions.isEmpty();
```

### zusammenführen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(Befehl als String, Eingabe als Sammlung<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parameter | Type                                                                                                                     | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | String                                                                                                                   | Keine Beschreibung angegeben |
| input     | Sammlung&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Keine Beschreibung angegeben |


### toString

Rückgabetyp: String

```zenscript
myMCSuggestions.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCSuggestions == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

