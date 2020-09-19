# PlayerOpenContainer

Wydarzenie PlayerOpenContainer jest uruchamiane za każdym razem, gdy gracz otwiera kontener.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerOpenContainerEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

PlayerOpenContainer Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | Typ zwrotu                                 |
| ---------- | ------------------------------------------ |
| `gracz`    | [IPlayer](/Vanilla/Players/IPlayer/)       |
| `pojemnik` | [Kontener](/Vanilla/Container/IContainer/) |