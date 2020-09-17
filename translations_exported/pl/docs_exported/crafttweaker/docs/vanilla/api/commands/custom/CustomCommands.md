# Własne polecenia

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Metody
### argument

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument (nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### dosłowny

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### komenda rejestracyjna

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(konstruktor jako crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parametr    | Typ                                                                                                                | Opis             |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| konstruktor | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Nie podano opisu |



