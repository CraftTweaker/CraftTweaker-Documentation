# EnityTravelToDimension

Wydarzenie »podmiot« TravelToDimension jest uruchamiane za każdym razem, gdy jednostka ma zamiar przenieść się do innego wymiaru. W przypadku anulowania podmiot nie może podróżować.

## Uwagi

`event.dimension` zawiera wymiar, do którego jednostka ma zamiar dotrzeć.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. ntityTravelToDimensionEvent` Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia EntityTravelToDimension wdrażają następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter | Typ zwrotu |
| --------- | ---------- |
| `wymiary` | odcień     |
