# Mikstura gracza

Wydarzenie Diabelskiej Mikstury jest strzelane za każdym razem, gdy gracz wyciągnie miksturę z piwowarstwa.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerBrewedPotionEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Wydarzenia PlayerBrewedPoniecki zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter  | Typ zwrotu                               |
| ---------- | ---------------------------------------- |
| `gracz`    | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `mikstura` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dłoń`     | ciąg znaków                              |