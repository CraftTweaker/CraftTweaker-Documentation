# LootingLevel

This event is fired whenever a Living Entity creature is killed in order to calculate the looting level. The value can be increased or decreased or left as-is. The value may have already been modified by other events, but the original value is not included.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
LootingLevel Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter         | ZenSetter         | Typ                                         |
| ----------------- | ----------------- | ------------------------------------------- |
| `Poziom lootinga` | `Poziom lootinga` | odcień                                      |
| `Źródło obrażeń`  |                   | [Źródło ID](/Vanilla/Damage/IDamageSource/) |
