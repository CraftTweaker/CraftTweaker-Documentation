# MCSleepingLocationCheckEvent

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent(Handler als Funktion.Verbraucher<crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent>);
```
| Parameter | Type                                                                                                                                                  | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent](/vanilla/api/event/entity/player/MCSleepingLocationCheckEvent)> | Keine Beschreibung angegeben |



## Methoden
### SleepingLocation

Gibt [craftweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) zurück

```zenscript
myMCSleepingLocationCheckEvent.getSleepingLocation();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCSleepingLocationCheckEvent.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCSleepingLocationCheckEvent.isCancelable();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCSleepingLocationCheckEvent.isCanceled();
```

### abgebrochen

```zenscript
myMCSleepingLocationCheckEvent.setCanceled(abbrechen als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |



