# Odnowienie gracza

Wydarzenie PlayerRespawn jest uruchamiane za każdym razem, gdy gracz odrodzi się.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerRespawnEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerRespawn zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter        | Typ zwrotu                                              |
| ---------------- | ------------------------------------------------------- |
| `gracz`          | [IPlayer](/Vanilla/Players/IPlayer/)                    |
| `isEndConquered` | bool (stany jeśli odrodzenie jest spowodowane portalem) |