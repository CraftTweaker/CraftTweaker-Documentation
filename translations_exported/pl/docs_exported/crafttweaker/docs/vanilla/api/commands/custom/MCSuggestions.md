# Sugestie MCTP

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Metody
### utwórz

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(komenda jako String, sugestie jak Kolekcja<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parametr  | Typ                                                                                                                    | Opis             |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------- |
| polecenie | Ciąg znaków                                                                                                            | Nie podano opisu |
| sugestie  | Kolekcja&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Nie podano opisu |


### puste

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### równa się

Typ zwrotu: logiczny

```zenscript
myMCSuggestions.equals(o jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### pobierz listę

Typ zwrotu: Lista&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### Zakres getRange

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Typ zwrotu: logiczny

```zenscript
myMCSuggestions.isEmpty();
```

### scalanie

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(komenda jako String, wprowadź jako Kolekcja<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parametr  | Typ                                                                                                                      | Opis             |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| polecenie | Ciąg znaków                                                                                                              | Nie podano opisu |
| input     | Kolekcja&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCSuggestions.toString();
```


## Operatorzy
### RÓŻNE

```zenscript
myMCSuggestions == o jako obiekt
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | prawda             |

