# MCResultKonsument

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Interfejs funkcjonalny

Ta klasa jest funkcjonalnym interfejsem. Oznacza to, że możesz użyć notacji lambda do utworzenia instancji. Adnotacja lambda wygląda jako:
```zenscript
(CommContext, sukces, wynik) =>{}
```
## Metody
### onCommandcomplete

```zenscript
myMCResultConsumer.onCommandComplete(komenda jako crafttweaker.api.commands.custom.MCCommandContext, udany jako logiczny, wynik jako int);
```

| Parametr         | Typ                                                                                                | Opis             |
| ---------------- | -------------------------------------------------------------------------------------------------- | ---------------- |
| Kontekst komendy | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nie podano opisu |
| sukces           | boolean                                                                                            | Nie podano opisu |
| wynik            | odcień                                                                                             | Nie podano opisu |



