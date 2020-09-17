# Element odbioru gracza

Wydarzenie Odbicia Gracza jest uruchamiane za każdym razem, gdy gracz wchodzi w interakcję z obiektem.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerPickupItemEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerPickupItem zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu                                    |
| --------- | --------------------------------------------- |
| `element` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `gracz`   | [IPlayer](/Vanilla/Players/IPlayer/)          |