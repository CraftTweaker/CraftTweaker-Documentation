# EnderTeleport

Das EnderTeleport-Event wird gefeuert, wenn ein Enderman oder Shulker teleportiert wird.  
Es wird auch abgefeuert, wenn ein Spieler sich mit einer Enderperle teleportiert (es ist möglich, dass auch andere Mods dieses Ereignis abfeuern.)

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. nderTeleportEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

LivingEntityUseItem Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter       | ZenSetter       | Type   |
| --------------- | --------------- | ------ |
| `targetX`       | `targetX`       | double |
| `targetY`       | `targetY`       | double |
| `targetZ`       | `targetZ`       | double |
| `attackSchaden` | `attackSchaden` | float  |