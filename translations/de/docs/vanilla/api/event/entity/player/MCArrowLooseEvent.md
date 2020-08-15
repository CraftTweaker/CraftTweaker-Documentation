# MCArrowLooseEvent

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.MCArrowLooseEvent
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.MCArrowLooseEvent(Handler als Funktion.Verbraucher<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| Parameter | Type                                                                                                                            | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowLooseEvent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | Keine Beschreibung angegeben |



## Methoden
### getBow

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCArrowLooseEvent.getBow();
```

### getCharge

Retouren Int

```zenscript
myMCArrowLooseEvent.getCharge();
```

### getEntityPlayer

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCArrowLooseEvent.getEntityPlayer();
```

### getPlayer

Rückgaben: `Spieler`

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCArrowLooseEvent.getPlayer();
```

### hasAmmo

Rückgabewert boolesch

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCArrowLooseEvent.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCArrowLooseEvent.isAbbrechbar();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCArrowLooseEvent.isAbbrecht();
```

### abgebrochen

```zenscript
myMCArrowLooseEvent.setCanceled(abbrechen als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |


### setCharge

```zenscript
myMCArrowLooseEvent.setCharge(Laden);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| aufladen  | int  | Keine Beschreibung angegeben |



