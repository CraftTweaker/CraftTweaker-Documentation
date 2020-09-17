# IPlayerEvent

Diese Schnittstelle wird um alle Ereignisse erweitert, die einen Spieler haben.  
Das bedeutet, dass du den folgenden Getter verwenden kannst, um auf den Spieler zuzugreifen.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.event.IPlayerEvent;`

## ILivingEvent erweitern

Diese Schnittstelle erweitert [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), was bedeutet, dass alle Funktionen, die ILivingEvent bietet, auch im IPlayerEvent vorhanden sind

## ZenGetter

| name   | typ                                  |
| ------ | ------------------------------------ |
| player | [IPlayer](/Vanilla/Players/IPlayer/) |