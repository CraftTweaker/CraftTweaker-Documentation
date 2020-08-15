# MiksturaBrewPre

To wydarzenie zostanie wystrzelone bezpośrednio przed otwarciem wanilii, a jeśli **anulowane**, uniemożliwi wywarcie się. Jeśli anulowano, ale przedmioty zostaną zmodyfikowane, to [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) zostanie automatycznie uruchomiony. Pozwala to na symulację wytworzenia „modded”.

**Uwaga**: to wydarzenie jest wypalane w momencie, gdy "timer" osiągnie "maksymalny postęp".

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. otionBrewPreEvent` Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia PotionBrewPre zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
