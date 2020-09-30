# PlayerAnvilUpdate

Wydarzenie PlayerAnvilUpdate jest uruchamiane, gdy gracz umieści przedmioty w lewym i prawym polu kotwicy.
 * Jeśli zdarzenie zostanie anulowane, zachowanie vanilla nie zostanie uruchomione, a wyjście zostanie ustawione na null.
 * Jeśli zdarzenie nie jest anulowane, ale wyjście nie jest puste, ustawi wyjście i nie uruchamia zachowania vanilli.
 * jeśli wyjście jest null, a zdarzenie nie jest anulowane, zostanie wykonane.

## Event Class
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Event interface extensions
Zdarzenia PlayerAnvilUpdate zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter           | ZenSetter           | type                                     | Description                                                                                       |
| ------------------- | ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `Lewy Element`      |                     | [IItemStack](/Vanilla/Items/IItemStack/) | Lewa strona wejścia.                                                                              |
| `prawy Element`     |                     | [IItemStack](/Vanilla/Items/IItemStack/) | Prawa strona wejścia.                                                                             |
| `outputItem`        | `outputItem`        | [IItemStack](/Vanilla/Items/IItemStack/) | Ustaw to aby ustawić stosy wyjściowe.                                                             |
| `itemName`          |                     | string                                   | Nazwa do ustawienia elementu, jeśli użytkownik podał jakąś nazwę.                                 |
| `xpKoszt`           | `xpKoszt`           | int                                      | Koszt podstawowy, ustaw to, aby zmienić go jeśli wyjście != null.                                 |
| `koszt materiałowy` | `koszt materiałowy` | int                                      | Liczba przedmiotów z prawego miejsca do spożycia podczas naprawy. Pozostaw 0 aby zużyć cały stos. |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
