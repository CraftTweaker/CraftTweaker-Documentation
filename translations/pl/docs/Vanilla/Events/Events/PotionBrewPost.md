# Poczta Mikstury

To wydarzenie jest wystrzelone natychmiast po tym, jak mikstura została "wytworzona" przez parzystę stojaka, gdy wyjście zostało już wymienione. Jeśli [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) został anulowany, ale przedmioty w stoisku piwowarskim zostały zmodyfikowane, to wydarzenie również zostanie uruchomione.

If the pre-event is cancelled without modifying itemstacks, this event will **not** be fired.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. otionBrewPostEvent` Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia PotionBrewPost zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
