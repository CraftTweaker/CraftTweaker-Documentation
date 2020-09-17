# MCRequiredArgumentBuilder

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Zaimplementowane interfejsy
MCRequiredArgumentBuilder implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Metody
### kompilacja

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### równa się

Typ zwrotu: logiczny

```zenscript
myMCRequiredArgumentBuilder.equals(o jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### wykonuje

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(polecenie jako crafttweaker.api.commands.custom.MCCommand);
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| polecenie | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nie podano opisu |


### fork

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |


### do przodu

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork jako boolean);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |
| fork     | boolean                                                                                                | Nie podano opisu |


### getArgumenty

Typ zwrotu: Kolekcja&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Typ zwrotu: Ciąg

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

Typ zwrotu: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### Wymaganie pobierania

Typ zwracania: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggestionsProvider

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Typ zwrotu: logiczny

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### przekierowanie

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parametr | Typ                                                                                                                | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Nie podano opisu |


### wymaga

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.Requres(wymagany jako function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parametr  | Typ                                                                                                                                    | Opis             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| wymaganie | Funkcja. Przewidaj&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nie podano opisu |


### sugeruje

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(dostawca jako crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parametr | Typ                                                                                                        | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------- | ---------------- |
| dostawca | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | Nie podano opisu |


### potem

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parametr | Typ                                                                                                  | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parametr | Typ                                                                                                                  | Opis             |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operatorzy
### RÓŻNE

```zenscript
myMCRequiredArgumentBuilder == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

