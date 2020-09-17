# Potion-BrewPre

Dieses Ereignis wird direkt vor dem Brauen von Vanille abgefeuert und wenn ****abgesagt wird, wird es das Brauen verhindern. Wenn abgebrochen, aber die Artikel geändert wurden, wird das [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) automatisch gestartet. Dies ermöglicht ein Simulacrum des "modded" brauens.

**Hinweis**: Dieses Ereignis wird direkt gestartet, da die Berechnungen für das Rezept durchgeführt werden, wenn der "Timer" "maximalen Fortschritt" erreicht.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
PotionBrewPre Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPotion-Brau-Event](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
