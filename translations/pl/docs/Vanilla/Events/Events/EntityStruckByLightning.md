# EntityStruckByLightning

Wydarzenie EntityStruckByLightning jest uruchamiane za każdym razem, gdy błyskawica ma wkrótce uderzyć w obiekt.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityStruckByLightningEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Wydarzenia LivingEntityUseItem implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter | Typ zwrotu                            |
| --------- | ------------------------------------- |
| `pioruny` | [IEntity](/Vanilla/Entities/IEntity/) |