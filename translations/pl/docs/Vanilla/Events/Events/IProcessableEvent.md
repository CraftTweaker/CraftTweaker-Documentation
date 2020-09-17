# IProcessableEvent

Ten interfejs jest rozszerzony przez wszystkie zdarzenia, które mogą być przetwarzane.  
Te wydarzenia mają być ustawione jako przetworzone po zakończeniu wszystkiego, co zostały zrobione, a inne osoby zajmujące się obsługą zdarzeń nie powinny już zmieniać wydarzenia.  
Pamiętaj, że wciąż może!

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.IPlayerEvent;`

## Co można z nimi zrobić.

- `event.process();` metoda, zwraca unieważnienie (nic)
- `event.processed;` getter, zwraca bool