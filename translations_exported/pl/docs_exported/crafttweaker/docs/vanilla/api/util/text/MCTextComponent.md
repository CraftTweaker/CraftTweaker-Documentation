# Komponent MCText

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Metody
### appendSibling

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(komponent jako crafttweaker.api.util.text.MCTextComponent);
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu |


### appendText

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(tekst jako ciąg);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| tekst    | Ciąg znaków | Nie podano opisu |


### Kopiuj surowy

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Typ zwrotu: Ciąg

```zenscript
myMCTextComponent.getString();
```

### getStringskrócony

Typ zwrotu: Ciąg

```zenscript
myMCTextComponent.getStringTruncated(maxLen jako int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| maksimum | odcień | Nie podano opisu |


### getUnformattedComponentText

Typ zwrotu: Ciąg

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(styl jak crafttweaker.api.util.text.MCStyle);
```

| Parametr | Typ                                                                  | Opis             |
| -------- | -------------------------------------------------------------------- | ---------------- |
| styl     | [craftaweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nie podano opisu |



## Właściwości

| Nazwisko                 | Typ                                                                                                           | Posiada Getter | Ma ustawienie |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------- | ------------- |
| sformatowanTekst         | Ciąg znaków                                                                                                   | prawda         | fałszywy      |
| rodzeństwo               | Lista&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | prawda         | fałszywy      |
| unformattedComponentText | Ciąg znaków                                                                                                   | prawda         | fałszywy      |

## Operatorzy
### DODAJ

```zenscript
Komponent myMCTextComponent + jako komponent crafttweaker.api.util.text.MCTextComponent
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu |
### KAT

```zenscript
Komponent myMCText~ jako komponent crafttweaker.api.util.text.MCTextComponent
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu |
### SHL

```zenscript
Komponent myMCTextComponent << jako crafttweaker.api.util.text.MCTextComponent
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | fałszywy           |

