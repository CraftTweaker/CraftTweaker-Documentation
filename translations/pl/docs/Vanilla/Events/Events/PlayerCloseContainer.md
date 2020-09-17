# Kontener gracza

Wydarzenie PlayerCloseContainer jest uruchamiane za każdym razem, gdy gracz zamknie kontener.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerCloseContainerEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia PlayerCloseContainer implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getter/settery:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | Typ zwrotu                                 |
| ---------- | ------------------------------------------ |
| `pojemnik` | [Kontener](/Vanilla/Container/IContainer/) |
