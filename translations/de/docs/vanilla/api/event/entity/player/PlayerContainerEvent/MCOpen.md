# MCOpen

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen(Handler als Funktion.Verbraucher<crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen>);
```
| Parameter | Type                                                                                                                                                | Beschreibung                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen](/vanilla/api/event/entity/player/PlayerContainerEvent/MCOpen)> | Keine Beschreibung angegeben |



## Methoden
### getEntityPlayer

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCOpen.getEntityPlayer();
```

### getPlayer

Rückgaben: `Spieler`

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCOpen.getPlayer();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCOpen.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCOpen.isAbbrechbar();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCOpen.isAbgebrochen();
```

### abgebrochen

```zenscript
myMCOpen.setCanceled(abbrechen als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |



