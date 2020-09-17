# FarmlandTrampleEvent

Wydarzenie FarmlandTrample jest wystrzelane za każdym razem, gdy ziemia rolna ma zostać zrzucona. Anulowanie wydarzenia zapobiegnie deptaniu bloku.

## Uwagi

`event.fallDistance` zawiera odległość pokonaną przed uderzeniem w ziemię rolną.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. armlandTrampleEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia FarmlandTrample zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IBlock'a](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter   | ZenSetter | Typ                                   |
| ----------- | --------- | ------------------------------------- |
| `podmiot`   |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `Odległość` |           | zmiennoprzecinkowe                    |
