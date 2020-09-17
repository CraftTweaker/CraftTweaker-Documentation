# MCCommandDispatcher

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Metody
### równa się

Typ zwrotu: logiczny

```zenscript
myMCCommandDispatcher.equals(o jako Obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### wykonaj

Typ zwrotu: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parametr | Typ                                                                                            | Opis             |
| -------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nie podano opisu |



Typ zwrotu: int

```zenscript
myMCCommandDispatcher.execute(wprowadzanie jako String, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr | Typ                                                                                              | Opis             |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| input    | Ciąg znaków                                                                                      | Nie podano opisu |
| źródło   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |



Typ zwrotu: int

```zenscript
myMCCommandDispatcher.execute(wejście jako com.mojang.brigadier.StringReader, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr | Typ                                                                                              | Opis             |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| input    | com.mojang.brigadier.StringReader                                                                | Nie podano opisu |
| źródło   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |


### Rozmiary wyników

```zenscript
myMCCommandDispatcher.findAmbiguities(konsument jako crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parametr  | Typ                                                                                                      | Opis             |
| --------- | -------------------------------------------------------------------------------------------------------- | ---------------- |
| konsument | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Nie podano opisu |


### węzeł znalezień

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(ścieżka jako Kolekcja<String>);
```

| Parametr | Typ                                | Opis             |
| -------- | ---------------------------------- | ---------------- |
| ścieżka  | Kolekcja&lt;String&gt; | Nie podano opisu |


### getAllUsage

Typ zwrotu: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, ograniczone jako boolean);
```

| Parametr    | Typ                                                                                              | Opis             |
| ----------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| węzeł       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nie podano opisu |
| źródło      | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |
| ograniczony | boolean                                                                                          | Nie podano opisu |


### sugestie getCompletionSuggestions

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parametr | Typ                                                                                            | Opis             |
| -------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, kursor as int);
```

| Parametr | Typ                                                                                            | Opis             |
| -------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| parse    | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nie podano opisu |
| cursor   | odcień                                                                                         | Nie podano opisu |


### pobierz ścieżkę

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(cel jako crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |


### getRoot

Typ zwrotu: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Typ zwrotu: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr | Typ                                                                                              | Opis             |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| węzeł    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nie podano opisu |
| źródło   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |


### hashCode

Typ zwrotu: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Typ zwrotu: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(komenda jako String, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr  | Typ                                                                                              | Opis             |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| polecenie | Ciąg znaków                                                                                      | Nie podano opisu |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(polecenie jako com.mojang.brigadier.StringReader, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr  | Typ                                                                                              | Opis             |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| polecenie | com.mojang.brigadier.StringReader                                                                | Nie podano opisu |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |


### zarejestruj

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(komenda jako crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parametr  | Typ                                                                                                                | Opis             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| polecenie | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Nie podano opisu |


### setKonsument

```zenscript
myMCCommandDispatcher.setConsumer(konsument jako crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parametr  | Typ                                                                                                | Opis             |
| --------- | -------------------------------------------------------------------------------------------------- | ---------------- |
| konsument | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCCommandDispatcher.toString();
```


## Operatorzy
### RÓŻNE

```zenscript
myMCCommandDispatcher == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

