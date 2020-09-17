# IEventHasResult

Ten interfejs jest rozszerzony przez wszystkie Zdarzenia, które mają wynik używany przez to wydarzenie. Wynik wydarzenia może być jedną z trzech wartości:

- zezwól
- odrzuć
- domyślny

Znaczenie tych elementów zależy od kontekstu. Ogólnie rzecz biorąc, zaprzeczanie zdarzenia uniemożliwia podjęcie określonych działań związanych ze zdarzeniem (nawet jeśli nie gwarantowano, że wydarzenie to zostanie podjęte). Podobnie zezwolenie na wydarzenie zmusi do zachowania (nawet jeśli nie było ono zagwarantowane). Domyślnie powoduje, że wydarzenie będzie kontynuowane zgodnie z jego normalną logiką. Nie wszystkie zdarzenia wykorzystują każdy wynik.

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.event.IEventHasResult;`

## Co można z nimi zrobić?

- `event.result` Getter, zwraca wartość ciągu `domyślną`, `negy` lub `zezwalaj`
- `event.deny()` Metoda, ustawia wynik wydarzenia na `odmowa`
- `event.allow()` Metoda, ustaw wynik wydarzenia na `zezwolić`
- `event.default()` Metoda, ustawia wynik wydarzenia na `domyślny`
