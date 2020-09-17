# MCArgumentBuilder

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Metody
### kompilacja

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### równa się

Typ zwrotu: logiczny

```zenscript
myMCArgumentBuilder.equals(o jako Obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### wykonuje

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(komenda jako crafttweaker.api.commands.custom.MCCommand);
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| polecenie | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nie podano opisu |


### fork

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |


### do przodu

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parametr | Typ                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nie podano opisu |
| fork     | boolean                                                                                                | Nie podano opisu |


### getArgumenty

Typ zwrotu: Kolekcja&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### getRedirect

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### getRedirectModifier

Typ zwrotu: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### Wymaganie pobierania

Typ zwracania: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentBuilder.getRequirement();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

Typ zwrotu: logiczny

```zenscript
myMCArgumentBuilder.isFork();
```

### przekierowanie

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parametr | Typ                                                                                                                | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Nie podano opisu |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Nie podano opisu |


### wymaga

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.Requres(wymagany jako function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parametr  | Typ                                                                                                                                    | Opis             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| wymaganie | Funkcja. Przewidaj&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nie podano opisu |


### potem

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parametr | Typ                                                                                                  | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| argument | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCArgumentBuilder.toString();
```


## Operatorzy
### RÓŻNE

```zenscript
myMCArgumentBuilder == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

