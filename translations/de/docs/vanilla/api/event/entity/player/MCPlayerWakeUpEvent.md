# MCPlayerWakeUpEvent

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(Handler als Funktion.Verbraucher<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Parameter | Type                                                                                                                                | Beschreibung                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Keine Beschreibung angegeben |



## Methoden
### getEntityPlayer

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Rückgaben: `Spieler`

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### abgebrochen

```zenscript
myMCPlayerWakeUpEvent.setCanceled(Abbrechen als Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |


### sollte Spawn setzen

Zeigt an, ob der Schlaf des Spielers als erfolgreich galt. In Vanille wird dies verwendet, um festzustellen, ob der Spawn-Chunk auf die Position des Bettes gesetzt werden soll.

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### aktualisiere Welt

Gibt an, ob der Server über Schlafänderungen benachrichtigt werden soll. Dies wird nur falsch sein, wenn der Server bereits als 'up to date' gilt, da er zum Beispiel den Anruf initiiert hat.

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wkeSofort

Verwendet für die 'Weckanimation'. Dies ist falsch, wenn der Spieler als 'schläft' betrachtet wird und das Overlay langsam verschwinden soll.

Rückgabewert boolesch

```zenscript
myMCPlayerWakeUpEvent.wakeSofort();
```


