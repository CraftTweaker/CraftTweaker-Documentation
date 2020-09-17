# Bonemal Gracza

Wydarzenie PlayerBonemeal jest strzelane za każdym razem, gdy gracz używa premii na bloku.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerBonemealEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

PlayerBonemeal Events implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter      | Typ zwrotu                                   |
| -------------- | -------------------------------------------- |
| `anulowane`    | boolean                                      |
| `przetworzone` | boolean                                      |
| `x`            | odcień                                       |
| `y`            | odcień                                       |
| `z`            | odcień                                       |
| `gracz`        | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `świat`        | [IWorld](/Vanilla/World/IWorld/)             |
| `blok`         | [IBlock](/Vanilla/Blocks/IBlock/)            |
| `Blokada`      | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| `bloki`        | [IBlockPos](/Vanilla/World/IBlockPos/)       |
| `wymiary`      | odcień                                       |
| `element`      | [IItemStack](/Vanilla/Items/IItemStack/)     |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane
- `event.process()` ustawia wydarzenie jako przetworzone