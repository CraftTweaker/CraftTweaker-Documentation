# MCLiteralCommandNode

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Implementierte Schnittstellen
MCLiteralCommandNode implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methoden
### createBuilder

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### gleich

Rückgabetyp: boolesch

```zenscript
myMCLiteralCommandNode.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### getLiteral

Rückgabetyp: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Rückgabetyp: boolesch

```zenscript
myMCLiteralCommandNode.isValidInput(Eingabe als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| input     | String | Keine Beschreibung angegeben |


### toString

Rückgabetyp: String

```zenscript
myMCLiteralCommandNode.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCLiteralCommandNode == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

