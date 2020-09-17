# Styl MCSS

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
craftaweaker.api.util.text.MCStyle
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.util.text.MCStyle();
```

## Metody
### równa się

Typ zwrotu: logiczny

```zenscript
myMCStyle.equals(inny jako obiekt);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| inne     | Obiekt | Nie podano opisu |


### getBold

Typ zwrotu: logiczny

```zenscript
myMCStyle.getBold();
```

### getFontId

Typ zwrotu: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getsertion

Typ zwrotu: Ciąg

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Typ zwrotu: logiczny

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Typ zwrotu: logiczny

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Typ zwrotu: logiczny

```zenscript
myMCStyle.getStrikethrough();
```

### weź pod uwagę

Typ zwrotu: logiczny

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Typ zwrotu: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Bez względu na to, czy ten styl jest pusty (odziedzicza wszystko od rodzica).

Typ zwrotu: logiczny

```zenscript
myMCStyle.isEmpty();
```

### Styl scalania

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(styl jak crafttweaker.api.util.text.MCStyle);
```

| Parametr | Typ                                                                  | Opis             |
| -------- | -------------------------------------------------------------------- | ---------------- |
| styl     | [craftaweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nie podano opisu |


### setPogrubienie

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn jako Boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| boldIn   | Boolean | Nie podano opisu |


### Kolor ustawienia

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formatowanie jako crafttweaker.api.text.TextFormatting);
```

| Parametr     | Typ                                                                    | Opis             |
| ------------ | ---------------------------------------------------------------------- | ---------------- |
| formatowanie | [Tworzenie formatowania tekstu](/crafttweaker/api/text/TextFormatting) | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
mojMCStyle.setColor(kolor jak inny);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| kolor    | odcień | Nie podano opisu |


### setFontId

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(lokalizacja jako crafttweaker.api.util.MCResourceLocation);
```

| Parametr    | Typ                                                                                            | Opis             |
| ----------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| lokalizacja | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nie podano opisu |


### ustawianie formatowania

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
formatowanie myMCStyle.setmatting(formatowanie jako crafttweaker.api.text.TextFormatting);
```

| Parametr     | Typ                                                                    | Opis             |
| ------------ | ---------------------------------------------------------------------- | ---------------- |
| formatowanie | [Tworzenie formatowania tekstu](/crafttweaker/api/text/TextFormatting) | Nie podano opisu |


### setInsertion

Ustaw tekst, który ma być wstawiony do czatu, gdy komponent jest kliknięty na zmianę

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parametr     | Typ         | Opis             |
| ------------ | ----------- | ---------------- |
| umieszczenie | Ciąg znaków | Nie podano opisu |


### setItalic

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic (kursywą jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| italic   | Boolean | Nie podano opisu |


### setObuscated

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(ukryte jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| ukryte   | Boolean | Nie podano opisu |


### setStrikethrough

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough jako boolean);
```

| Parametr      | Typ     | Opis             |
| ------------- | ------- | ---------------- |
| przestrajanie | Boolean | Nie podano opisu |


### Ustawiony

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(podkreślone jako Boolean);
```

| Parametr    | Typ     | Opis             |
| ----------- | ------- | ---------------- |
| Podkreślony | Boolean | Nie podano opisu |



Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(podkreślone jako boolean);
```

| Parametr    | Typ     | Opis             |
| ----------- | ------- | ---------------- |
| Podkreślony | boolean | Nie podano opisu |


### toString

Typ zwrotu: Ciąg

```zenscript
myMCStyle.toString();
```


