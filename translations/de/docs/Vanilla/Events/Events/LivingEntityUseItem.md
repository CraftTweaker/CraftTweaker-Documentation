# LivingEntityUseItem

Das LivingEntityUseItem Event wird abgefeuert, wenn eine Entität anfängt, ein Item zu verwenden, beendet dies, nachdem der Spieler mit einem Gegenstand fertig ist und jeder Häkchen den Gegenstand benutzt.  
Da dies viel zu oft aufgerufen würde, gibt es 4 Unterveranstaltungen, die nur in ihrem speziellen Fall aufgerufen werden.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.

```zenscript
//Base Event
import craftweaker.event.EntityLivingUseItemEvent.All;

//Specific Events
import craftweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## Erweiterte Event-Schnittellen

LivingEntityUseItem Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter  | Rückgabetyp                              |
| ---------- | ---------------------------------------- |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer` | bool                                     |
| `eintrag`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dauern`   | int                                      |

| ZenSetter | Parametertyp |
| --------- | ------------ |
| `dauern`  | int          |