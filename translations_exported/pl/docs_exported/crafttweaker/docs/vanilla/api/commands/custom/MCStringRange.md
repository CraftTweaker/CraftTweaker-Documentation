# MCStringRange

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Metody
### w

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| poz.     | odcień | Nie podano opisu |


### między

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| początek | odcień | Nie podano opisu |
| koniec   | odcień | Nie podano opisu |


### uwzględnianie

Typ zwrotu: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.Incluassing(jako crafttweaker.api.commands.custom.MCStringRange, b jako crafttweaker.api.commands.custom.MCStringRange);
```

| Parametr | Typ                                                                                          | Opis             |
| -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| ob z     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nie podano opisu |
| b        | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nie podano opisu |


### równa się

Typ zwrotu: logiczny

```zenscript
myMCStringRange.equals(o jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| ob       | Obiekt | Nie podano opisu |


### pobierz

Typ zwrotu: Ciąg

```zenscript
myMCStringRange.get(ciąg jako String);
```

| Parametr    | Typ         | Opis             |
| ----------- | ----------- | ---------------- |
| ciąg znaków | Ciąg znaków | Nie podano opisu |



Typ zwrotu: Ciąg

```zenscript
myMCStringRange.get(czytnik jako crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parametr | Typ                                                                                                              | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---------------- |
| czytnik  | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Nie podano opisu |


### getEnd

Typ zwrotu: int

```zenscript
myMCStringRange.getEnd();
```

### długość getLlength

Typ zwrotu: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Typ zwrotu: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Typ zwrotu: logiczny

```zenscript
myMCStringRange.isEmpty();
```

### toString

Typ zwrotu: Ciąg

```zenscript
myMCStringRange.toString();
```


