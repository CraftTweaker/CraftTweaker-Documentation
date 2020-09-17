# MCCommandContextBuilder

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Metody
### kompilacja

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(wprowadź jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| input    | Ciąg znaków | Nie podano opisu |


### kopiuj

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### równa się

Typ zwrotu: logiczny

```zenscript
myMCCommandContextBuilder.equals(o jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### Kontekst wyszukiwania

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(kursor jak int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| cursor   | odcień | Nie podano opisu |


### getArgumenty

Typ zwrotu: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Typ zwrotu: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### Zakres getRange

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Typ zwrotu: Ciąg

```zenscript
myMCCommandContextBuilder.toString();
```

### z argumentem

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nazwa jako String, argument jako crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parametr | Typ                                                                                                | Opis             |
| -------- | -------------------------------------------------------------------------------------------------- | ---------------- |
| Nazwa    | Ciąg znaków                                                                                        | Nie podano opisu |
| argument | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Nie podano opisu |


### withChild

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(dziecko jako crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parametr | Typ                                                                                                              | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---------------- |
| dziecko  | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Nie podano opisu |


### z komendą

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(polecenie jako crafttweaker.api.commands.custom.MCCommand);
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| polecenie | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nie podano opisu |


### withNode

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, zakres jak crafttweaker.api.commands.custom.MCStringRange);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| węzeł    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nie podano opisu |
| range    | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nie podano opisu |


### Źródło

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametr | Typ                                                                                              | Opis             |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| źródło   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nie podano opisu |



## Operatorzy
### RÓŻNE

```zenscript
myMCCommandContextBuilder == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

