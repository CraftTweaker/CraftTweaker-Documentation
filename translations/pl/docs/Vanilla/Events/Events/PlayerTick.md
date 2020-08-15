# Tick gracza

Wydarzenie Tick Gracza jest uruchamiane po każdym zaznaczeniu dla każdego gracza.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerTickEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerTick zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu                           |
| --------- | ------------------------------------ |
| `gracz`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `Faza`    | ciąg znaków                          |