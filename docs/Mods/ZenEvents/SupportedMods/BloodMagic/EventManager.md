# EventManager

You can create all event handlers the same way as you do in Crafttweaker:
```
events.eventName(function(event as eventType){
	//Executable Code here
});
```

Below you will find all currently added events that bloodmagic should fire.  
None of these events returns anything (they all are void functions).

| EventCall                        | EventType                                                                      |
|----------------------------------|--------------------------------------------------------------------------------|
| onBloodAltarCrafted              |[`mods.bloodmagic.AltarCraftedEvent`](Events/AltarCraftedEvent)                 |
| onBoundToolCharge                |[`mods.bloodmagic.BoundToolChargeEvent`](Events/BoundToolChargeEvent)           |
| onBoundToolRelease               |[`mods.bloodmagic.BoundToolReleaseEvent`](Events/BoundToolReleaseEvent)         |
| onBloodMagicItemBind             |[`mods.bloodmagic.ItemBindEvent`](Events/ItemBindEvent)                         |
| onBloodMagicRitualRun            |[`mods.bloodmagic.RitualRunEvent`](Events/RitualEvent)                          |
| onBloodMagicRitualStop           |[`mods.bloodmagic.RitualStopEvent`](Events/RitualEvent)                         |
| onBloodMagicRitualActivated      |[`mods.bloodmagic.RitualActivatedEvent`](Events/RitualEvent)                    |
| onBloodMagicSacrificialKnifeUsed |[`mods.bloodmagic.SacrificialKnifeUsedEvent`](Events/SacrificialKnifeUsedEvent) |
| onBloodMagicTelepose             |[`mods.bloodmagic.TeleposeEvent`](Events/TeleposeEvent)                         |

