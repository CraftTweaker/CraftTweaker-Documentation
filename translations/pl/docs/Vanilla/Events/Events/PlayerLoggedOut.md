# PlayerLoggedOut

Wydarzenie PlayerLoggedOut jest uruchamiane za każdym razem, gdy gracz wyloguje się.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerLoggedOutEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

PlayerLoggedIn Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu                           |
| --------- | ------------------------------------ |
| `gracz`   | [IPlayer](/Vanilla/Players/IPlayer/) |