# PlayerAnvilUpdate

Wydarzenie PlayerAnvilUpdate jest uruchamiane, gdy gracz umieści przedmioty w lewym i prawym polu kotwicy.
 * Jeśli zdarzenie zostanie anulowane, zachowanie vanilla nie zostanie uruchomione, a wyjście zostanie ustawione na null.
 * Jeśli zdarzenie nie jest anulowane, ale wyjście nie jest puste, ustawi wyjście i nie uruchamia zachowania vanilli.
 * jeśli wyjście jest null, a zdarzenie nie jest anulowane, zostanie wykonane.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia PlayerAnvilUpdate zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter           | ZenSetter           | typ                                      | Opis                                                                                              |
| ------------------- | ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `Lewy Element`      |                     | [IItemStack](/Vanilla/Items/IItemStack/) | Lewa strona wejścia.                                                                              |
| `prawy Element`     |                     | [IItemStack](/Vanilla/Items/IItemStack/) | Prawa strona wejścia.                                                                             |
| `outputItem`        | `outputItem`        | [IItemStack](/Vanilla/Items/IItemStack/) | Ustaw to aby ustawić stosy wyjściowe.                                                             |
| `itemName`          |                     | ciąg znaków                              | Nazwa do ustawienia elementu, jeśli użytkownik podał jakąś nazwę.                                 |
| `xpKoszt`           | `xpKoszt`           | odcień                                   | Koszt podstawowy, ustaw to, aby zmienić go jeśli wyjście != null.                                 |
| `koszt materiałowy` | `koszt materiałowy` | odcień                                   | Liczba przedmiotów z prawego miejsca do spożycia podczas naprawy. Pozostaw 0 aby zużyć cały stos. |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.
