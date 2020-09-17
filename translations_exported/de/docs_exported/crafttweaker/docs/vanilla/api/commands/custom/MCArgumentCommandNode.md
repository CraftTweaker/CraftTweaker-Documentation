# MCArgumentCommandNode

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## Implementierte Schnittstellen
MCArgumentCommandNode implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methoden
### createBuilder

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### gleich

Rückgabetyp: boolesch

```zenscript
myMCArgumentCommandNode.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### getCustom-Vorschläge

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestions();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

Rückgabetyp: String

```zenscript
myMCArgumentCommandNode.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCArgumentCommandNode == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

