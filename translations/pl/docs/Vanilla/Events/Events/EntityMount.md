# EntityMountEvent

Zdarzenie EntityMount jest uruchamiane za każdym razem, gdy jednostka jest zamontowana lub odmontowana. W przypadku anulowania obiekt nie może montować (lub odmontować).

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityMountEvent` Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia EntityMountEvent zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter             | Typ zwrotu                            |
| --------------------- | ------------------------------------- |
| `świat`               | [IWorld](/Vanilla/World/IWorld/)      |
| `montowanieJednostka` | [IEntity](/Vanilla/Entities/IEntity/) |
| `zamontowano Obiekt`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`          | boolean                               |
| `rozmontowanie`       | boolean                               |
