# SleepInBed Gracza

Wydarzenie PlayerSleepInBed jest uruchamiane za każdym razem, gdy gracz śnie. To wydarzenie może kontrolować, czy gracz jest w stanie uśpić przez ustawienie `wyniku`.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerSleepInBedEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerSleepInBed zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

* [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
* [Pozycjonowalne](/Vanilla/Events/Events/IEventPositionable/)

## Typy wyników

* Nie masz jeszcze miejsca 
* Nie masz już miejsca 
* BEZPIECZEŃSTWO 
* OK 
* OTHER_PROBLEM 
* Powierzchnia 

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu                                |
| --------- | ----------------------------------------- |
| `x`       | odcień                                    |
| `y`       | odcień                                    |
| `z`       | odcień                                    |
| `gracz`   | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `wynik`   | ciąg znaków (możliwe wartości są powyżej) |

## ZenSettery

W wydarzeniu można ustawić następujące dane:

| ZenSetter | Typ parametru                             |
| --------- | ----------------------------------------- |
| `wynik`   | ciąg znaków (możliwe wartości są powyżej) |