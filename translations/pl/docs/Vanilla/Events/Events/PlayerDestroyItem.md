# PlayerDestroyItem

Wydarzenie Gracza Niszczyciela jest uruchamiane za każdym razem, gdy gracz niszczy przedmiot.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerDestroyItemEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDestroyItem zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter            | Typ zwrotu                               |
| -------------------- | ---------------------------------------- |
| `gracz`              | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `Element oryginalny` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dłoń`               | ciąg znaków                              |