# Spawn graczy

Wydarzenie PlayerSetSpawn jest uruchamiane za każdym razem, gdy nastąpi zmiana lokalizacji spawnu gracza.  
Można go anulować, aby zapobiec dalszemu przetwarzaniu.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerSetSpawnEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerSetSpawn zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter    | Typ zwrotu                             |
| ------------ | -------------------------------------- |
| `gracz`      | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `wymuszony`  | bool                                   |
| `Nowy Spawn` | [IBlockPos](/Vanilla/World/IBlockPos/) |