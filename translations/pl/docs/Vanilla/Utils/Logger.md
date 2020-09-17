# Logger

Jeśli funkcja wydruku nie wystarczy dla Ciebie, możesz użyć logera Object do logowania poleceń, ostrzeżeń informacyjnych i więcej.

## Dostęp do obsługi logowania

Możesz uzyskać dostęp do obsługi formatowania używając `logger` [globalnego słowa kluczowego](/Vanilla/Global_Functions/).

## Rejestrowanie

- komunikat logCommand(String);
- komunikat logInfo(String);
- logOstrzeżenie (wiadomość ciągu znaków);
- logError(wiadomość ciągu);

## Dostępne, ale bezużyteczne metody

- logError(wiadomość ciągu, wyjątek do rzutu);
- logPlayer([IPlayer](/Vanilla/Players/IPlayer/) gracz);

Nie możesz używać rzutów Javy, więc pierwsza metoda jest bezużyteczna.  
Druga metoda nic nie robi. Dosłownie implementacja jest pusta!