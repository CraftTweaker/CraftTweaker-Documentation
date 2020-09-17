# Stan MCBlocka

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Zaimplementowane interfejsy
MCBlockState implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### getAllowedValuesForProperty

Typ zwrotu: Lista&lt;String&gt;

```zenscript
myMCBlockState.getAllowedValuesForProperty(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### Właściwości

Typ zwrotu: String[String]

```zenscript
myMCBlockState.getProperties();
```

### Nazwy getPropertyName

Typ zwrotu: Lista&lt;String&gt;

```zenscript
myMCBlockState.getPropertyNames();
```

### Wartość getPropertyValue

Typ zwrotu: Ciąg

```zenscript
myMCBlockState.getPropertyValue(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### Własność

Typ zwrotu: logiczny

```zenscript
myMCBlockState.hasProperty(nazwa jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |


### z Właściwością

Typ zwrotu: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| Nazwa    | Ciąg znaków | Nie podano opisu |
| wartość  | Ciąg znaków | Nie podano opisu |



## Właściwości

| Nazwisko        | Typ                                                           | Posiada Getter | Ma ustawienie |
| --------------- | ------------------------------------------------------------- | -------------- | ------------- |
| blok            | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | prawda         | fałszywy      |
| Moc kanProvidea | boolean                                                       | prawda         | fałszywy      |
| polecenie       | Ciąg znaków                                                   | prawda         | fałszywy      |
| hasTileEntity   | boolean                                                       | prawda         | fałszywy      |
| isSolid         | boolean                                                       | prawda         | fałszywy      |
| isSticky        | boolean                                                       | prawda         | fałszywy      |
| Poziom światła  | odcień                                                        | prawda         | fałszywy      |
| ticksRandomly   | boolean                                                       | prawda         | fałszywy      |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                    | Jest niedomniemany |
| ------------------------------------------------------------- | ------------------ |
| Ciąg znaków                                                   | fałszywy           |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | prawda             |

