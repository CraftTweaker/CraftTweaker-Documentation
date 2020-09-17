# MCSuggestion

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Methoden
### bewerben

Rückgabetyp: String

```zenscript
myMCSuggestion.apply(Eingabe als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| input     | String | Keine Beschreibung angegeben |


### vergleichen

Rückgabetyp: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Keine Beschreibung angegeben |


### vergleicheToIgnorieren-Fall

Rückgabetyp: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Keine Beschreibung angegeben |


### gleich

Rückgabetyp: boolesch

```zenscript
myMCSuggestion.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### ausklappen

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(Befehl als String, Bereich als crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| befehl    | String                                                                                       | Keine Beschreibung angegeben |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Keine Beschreibung angegeben |


### getBereich

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Rückgabetyp: String

```zenscript
myMCSuggestion.getText();
```

### getTooltip

Rückgabetyp: String

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Rückgabetyp: String

```zenscript
myMCSuggestion.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCSuggestion == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

