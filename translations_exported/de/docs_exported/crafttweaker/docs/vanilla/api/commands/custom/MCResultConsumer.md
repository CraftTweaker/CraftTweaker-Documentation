# MCResultConsumer

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Funktionale Schnittstelle

Diese Klasse ist eine funktionale Schnittstelle. Das bedeutet, dass Sie die Lambda-Notation benutzen können, um eine Instanz davon zu erstellen. Die Lambda-Notation sieht wie folgt aus:
```zenscript
(commandContext, Erfolg, Ergebnis) =>{}
```
## Methoden
### onCommandComplete

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, Erfolg als boolean, Ergebnis als int);
```

| Parameter       | Type                                                                                               | Beschreibung                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ---------------------------- |
| Kommandokontext | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Keine Beschreibung angegeben |
| erfolgreich     | boolean                                                                                            | Keine Beschreibung angegeben |
| ergebnis        | int                                                                                                | Keine Beschreibung angegeben |



