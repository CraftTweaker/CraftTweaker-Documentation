# PlayerAnvilRepair

Wydarzenie Gracza AnvilRepair jest strzelane za każdym razem, gdy gracz wytwarza coś w kowadle.  
Możesz zmienić szansę na uszkodzenie kowadła.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerAnvilRepairEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerAnvilRepair zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter           | ZenSetter           | Typ zwrotu                               |
| ------------------- | ------------------- | ---------------------------------------- |
| `gracz`             |                     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`         |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Składnik produktu` |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`        |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `szansa na łamanie` | `szansa na łamanie` | zmiennoprzecinkowe                       |