# MCCriticalHitEvent

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Konstrukteure
```zenscript
neue crafttweaker.api.event.entity.player.MCCriticalHitEvent(Handler als Funktion.Verbraucher<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parameter | Type                                                                                                                              | Beschreibung                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Keine Beschreibung angegeben |



## Methoden
### getDamageModifier

Der Schadensmodifikator für den Treffer.<br> Dies ist standardmäßig 1.5F für ciritcale Treffer und 1F für normale Treffer .

Rückgabewerte schweben

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

Der orignale Schadensmodifikator für den Treffer wthout alle Änderungen.<br> Dies ist 1,5F für ciritkale Treffer und 1F für normale Treffer .

Rückgabewerte schweben

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Rückgaben: `Spieler`

Gibt [craftweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) zurück

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasergebnis

Legt fest, ob dieses Ereignis einen signifikanten Ergebniswert erwartet. Hinweis: Ereignisse mit der HasResult-Anmerkung werden diese Methode automatisch hinzugefügt, um wahr zurückzugeben.

Rückgabewert boolesch

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isabbrechbar

Legen Sie fest, ob diese Funktion überhaupt abgebrochen werden kann. Gibt zurück: `Wenn der Zugriff auf setCanceled erlaubt sein sollte
 Hinweis:
 Ereignisse mit der abbrechbaren Anmerkung werden diese Methode automatisch hinzugefügt, um true zurückzugeben.`

Rückgabewert boolesch

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### ist abgebrochen

Legen Sie fest, ob dieses Ereignis abgebrochen wird und nicht mehr ausgeführt werden soll. Rückgabe: `Der aktuell abgebrochene Status`

Rückgabewert boolesch

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Gibt wahr aus, wenn dieser Treffer für Vanilla kritisch war

Rückgabewert boolesch

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### abgebrochen

```zenscript
myMCCriticalHitEvent.setCanceled(Abbrechen als boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| abbrechen | boolean | Keine Beschreibung angegeben |


### setSchadenmodifizierer

Hiermit wird der Schadenmultiplikator für den Treffer festgelegt. Wenn Sie es auf 0 setzen, werden die Partikel immer noch erzeugt, aber der Schaden wird nicht verursacht.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| mod       | float | Keine Beschreibung angegeben |



