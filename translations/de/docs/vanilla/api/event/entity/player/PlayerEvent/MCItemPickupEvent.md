# MCItemPickupEvent

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent>);
```
| Parameter | Type                                                                                                                                                    | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemPickupEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemPickupEvent)> | Keine Beschreibung angegeben |



## Methoden
### getEntityPlayer

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCItemPickupEvent.getEntityPlayer();
```

### getPlayer

Rückgaben: `Spieler`

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCItemPickupEvent.getPlayer();
```

### getStack

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCItemPickupEvent.getStack();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCItemPickupEvent.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCItemPickupEvent.isCancelable();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCItemPickupEvent.isCanceled();
```

### abgebrochen

```zenscript
myMCItemPickupEvent.setCanceled(abbrechen als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |



