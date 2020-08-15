# Stworzony gracz

Wydarzenie Gracza Wykonanego jest strzelane za każdym razem, gdy gracz coś wytwarza.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerCcreftedEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Wydarzenia PlayerCmade implementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter   | Typ zwrotu                                                           |
| ----------- | -------------------------------------------------------------------- |
| `gracz`     | [IPlayer](/Vanilla/Players/IPlayer/)                                 |
| `wyjście`   | [IItemStack](/Vanilla/Items/IItemStack/)                             |
| `inwentarz` | [Ekwipunek ICrafting](/Vanilla/Recipes/Crafting/ICraftingInventory/) |