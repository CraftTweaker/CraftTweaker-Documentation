# Odbiór przedmiotu gracza

Wydarzenie Odbicia Gracza jest uruchamiane po kontakcie gracza z przedmiotem, a przedmiot lub ilość przedmiotu została podniesiona. To wydarzenie ma miejsce po wystrzeleniu [przedmiotu odbioru gracza](/Vanilla/Events/Events/PlayerPickupItem/).

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. Wydarzenie odbioru warstwy`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia PlayerItemPickup zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter         | Typ zwrotu                                    |
| ----------------- | --------------------------------------------- |
| `Kopiuj stosy`    | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `oryginalPodmiot` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Uwagi

`stackCopy` jest kopią elementu znajdującego się wewnątrz oryginalnego elementu, reprezentuje to, co zostało zebrane i umieszczone w ekwipunku gracza. `OrigalEntity` jest jednostką przedmiotu z pozostałą ilością stołu przedmiotów (jeśli gracz nie podjął pełnej kwoty).
