# MCLiteralArgumentBuilder

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralArgumentBuilder
```

## Zaimplementowane interfejsy
MCLiteralArgumentBuilder implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Metody
### kompilacja

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCLiteralArgumentBuilder.build();
```

### równa się

Typ zwrotu: logiczny

```zenscript
myMCLiteralArgumentBuilder.equals(o jako Obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### wykonuje

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.executes(polecenie jako crafttweaker.api.commands.custom.MCCommand);
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| polecenie | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nie podano opisu |


### fork

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |


### do przodu

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |
| fork     | boolean                                                                                                | Nie podano opisu |


### getArgumenty

Typ zwrotu: Kolekcja&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Typ zwrotu: Ciąg

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralArgumentBuilder.getRedirect();
```

### getRedirectModifier

Typ zwrotu: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralArgumentBuilder.getRedirectModifier();
```

### Wymaganie pobierania

Typ zwracania: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Typ zwrotu: logiczny

```zenscript
myMCLiteralArgumentBuilder.isFork();
```

### przekierowanie

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parametr | Typ                                                                                                                | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Nie podano opisu |


### wymaga

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.requireres(wymagany jako function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parametr  | Typ                                                                                                                                    | Opis             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| wymaganie | Funkcja. Przewidaj&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nie podano opisu |


### potem

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parametr | Typ                                                                                                  | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCLiteralArgumentBuilder.toString();
```


## Operatorzy
### RÓŻNE

```zenscript
myMCLiteralArgumentBuilder == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

