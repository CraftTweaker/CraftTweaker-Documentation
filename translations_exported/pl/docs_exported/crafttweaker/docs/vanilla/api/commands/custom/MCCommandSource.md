# Źródło polecenia MCCommand

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Metody
### getName

Typ zwrotu: Ciąg

```zenscript
myMCCommandSource.getName();
```

### getPlayer

Typ zwrotu: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### Nazwy getPlayerName

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### Nazwy getTeames

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### Poziom hasPermissionLevel

Typ zwrotu: logiczny

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ jako int);
```

| Parametr     | Typ    | Opis             |
| ------------ | ------ | ---------------- |
| p_197034_1 | odcień | Nie podano opisu |


### isPlayer

Typ zwrotu: logiczny

```zenscript
myMCCommandSource.isPlayer();
```

### Wyślij Wiadomość Błędną

```zenscript
myMCCommandSource.sendErrorMessage(wiadomość jako String);
```

| Parametr  | Typ         | Opis             |
| --------- | ----------- | ---------------- |
| wiadomość | Ciąg znaków | Nie podano opisu |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allow Logging as boolean);
```

| Parametr                | Typ         | Opis             |
| ----------------------- | ----------- | ---------------- |
| opinia                  | Ciąg znaków | Nie podano opisu |
| zezwól na rejestrowanie | boolean     | Nie podano opisu |


### opinia wyłączona

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### na poziomie MinPermissionLevel

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_197026_1_ | odcień | Nie podano opisu |


### Poziom withPermissionLevel

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_197033_1_ | odcień | Nie podano opisu |



