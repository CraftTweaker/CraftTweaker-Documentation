# GraczFillBucket

Wydarzenie Gracza FillBucket jest uruchamiane za każdym razem, gdy gracz wypełnia wiaderze.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerFillBucketEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerFillBucket zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter        | Typ zwrotu                                              |
| ---------------- | ------------------------------------------------------- |
| `anulowane`      | boolean                                                 |
| `gracz`          | [IPlayer](/Vanilla/Players/IPlayer/)                    |
| `wynik`          | [IItemStack](/Vanilla/Items/IItemStack/)                |
| `puste wiadro`   | [IItemStack](/Vanilla/Items/IItemStack/)                |
| `x`              | odcień                                                  |
| `y`              | odcień                                                  |
| `z`              | odcień                                                  |
| `świat`          | [IWorld](/Vanilla/World/IWorld/)                        |
| `Blokada`        | [Stan IBlocka](/Vanilla/Blocks/IBlockState/)            |
| `blok`           | [IBlock](/Vanilla/Blocks/IBlock/)                       |
| `wymiary`        | odcień                                                  |
| `rayTraceResult` | [Wynik IRayTraceReult](/Vanilla/World/IRayTraceResult/) |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.

## Ustawcy

- `event.result = <minecraft:ender_pearl>` Spowoduje to również przetworzenie wydarzenia!