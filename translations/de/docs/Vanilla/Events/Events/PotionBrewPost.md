# Potionbrewpost

Dieses Ereignis wird sofort abgefeuert, nachdem ein Trank von der Brauerei Kacheleinheit "gezüchtet", wenn die Ausgangsgegenstände bereits ersetzt wurden. Wenn das [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) abgebrochen wurde, aber die Stapel der Gegenstände im Braustand geändert wurden, wird dieses Ereignis ebenfalls abgefeuert.

If the pre-event is cancelled without modifying itemstacks, this event will **not** be fired.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
PotionBrewPost Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPotion-Brau-Event](/Vanilla/Events/Events/IPotionBrewEvent/)
