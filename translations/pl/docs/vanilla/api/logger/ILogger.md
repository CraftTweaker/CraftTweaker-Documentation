# ILogger

Klasa bazowa używana do interfejsu z plikiem crafttweaker.log i innymi rejestratorami (takimi jak rejestrator gracza).

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.ILogger
```

## Metody
### debug

Loguje wiadomość debugowania.

```zenscript
logger.debug(message as String);
logger.debug("message");
```

| Parametr  | Typ         | Opis                    |
| --------- | ----------- | ----------------------- |
| wiadomość | Ciąg znaków | wiadomość do logowania. |


### błąd

Rejestruje komunikat o błędzie.

```zenscript
logger.error(message as String);
logger.error("message");
```

| Parametr  | Typ         | Opis                    |
| --------- | ----------- | ----------------------- |
| wiadomość | Ciąg znaków | wiadomość do logowania. |


### informacje

Loguje wiadomość informacyjną.

```zenscript
logger.info(message as String);
logger.info("message");
```

| Parametr  | Typ         | Opis                    |
| --------- | ----------- | ----------------------- |
| wiadomość | Ciąg znaków | wiadomość do logowania. |


### ostrzeżenie

Rejestruje komunikat ostrzegawczy.

```zenscript
logger.warning(message as String);
logger.warning("message");
```

| Parametr  | Typ         | Opis                    |
| --------- | ----------- | ----------------------- |
| wiadomość | Ciąg znaków | wiadomość do logowania. |



