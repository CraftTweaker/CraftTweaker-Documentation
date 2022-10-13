# PlayerSleepInBed

Wydarzenie PlayerSleepInBed jest uruchamiane za każdym razem, gdy gracz śnie. To wydarzenie może kontrolować, czy gracz jest w stanie uśpić przez ustawienie `wyniku`.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Typy wyników
* Nie masz jeszcze miejsca
* Nie masz już miejsca
* BEZPIECZEŃSTWO
* OK
* OTHER_PROBLEM
* Powierzchnia


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                               |
| --------- | ----------------------------------------- |
| `x`       | int                                       |
| `y`       | int                                       |
| `z`       | int                                       |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `result`  | ciąg znaków (możliwe wartości są powyżej) |

## ZenSetters
W wydarzeniu można ustawić następujące dane:

| ZenSetter | Parameter Type                            |
| --------- | ----------------------------------------- |
| `result`  | ciąg znaków (możliwe wartości są powyżej) |

