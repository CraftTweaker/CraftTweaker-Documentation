# IEventCancelable

Ten interfejs jest rozszerzony przez wszystkie wydarzenia, które mogą zostać anulowane.  
Oznacza to, że możesz je anulować za pomocą CrT lub sprawdzić, czy zostały anulowane.

Zauważ, że wydarzenia, które zostały anulowane przed otrzymaniem przez CrT nie będą sprawdzane przez osoby obsługujące.  
Ponadto, jeśli rejestrujesz wiele osób zajmujących się obsługą, a jeden z nich anuluje wydarzenie, inni osoby zajmujące się obsługą CrT nadal go otrzymają!

## Importowanie klasy

Może być wymagane [importowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`import crafttweaker.event.IEventCancelable;`

## Co można z nimi zrobić?

- `event.cancel();` Metoda, zwraca unieważnienie (nic).
- `event.canceled;` Getter, zwraca bool.
- `event.canceled = true;` Setter