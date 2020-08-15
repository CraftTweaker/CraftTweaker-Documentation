# PlayerChangedDimension

Wydarzenie PlayerChangedDimension jest uruchamiane za każdym razem, gdy zmienia się [wymiar](/Vanilla/Players/IPlayer/) [gracza/świat](/Vanilla/World/IWorld/) na przykład po wejściu do niego/opuszczeniu niego.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerChangedDimensionEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Wydarzenia PlayerChandedDimension zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | Typ zwrotu                           |
| ---------- | ------------------------------------ |
| `gracz`    | [IPlayer](/Vanilla/Players/IPlayer/) |
| `od`       | odcień                               |
| `z Świata` | [IWorld](/Vanilla/World/IWorld/)     |
| `do`       | odcień                               |
| `toWorld`  | [IWorld](/Vanilla/World/IWorld/)     |