# MCToolType

Typ narzędzia jest używany do określenia, jakiego rodzaju bloków może kopać, lub odwrotnie, jaki rodzaj narzędzia jest wymagany do wydobycia danego bloku.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Zaimplementowane interfejsy
MCToolType implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.Komendy Wyświetlalne](/vanilla/api/brackets/CommandStringDisplayable)

## Konstruktorzy
Tworzy obiekt ToolType. Jeśli nazwa o podanej nazwie już istnieje, będą one wskazywać wewnętrznie na ten sam typ narzędzia. W przeciwnym razie powstaje nowy o nazwie (tak samo jest w przypadku nawiasów!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("kilkaxe");
```
| Parametr | Typ         | Opis            |
| -------- | ----------- | --------------- |
| Nazwa    | Ciąg znaków | Nazwa do użycia |



## Metody
### getName

Pobiera nazwę tego narzędzia. Nazwa jest tym, co jest używane w wyrażeniu nawiasów po `<typie narzędzia:`

Typ zwrotu: Ciąg

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Zwraca kod haszujący obiektu

Typ zwrotu: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Uzyskaj reprezentację ciągów tego typu. Jest inny niż polecenie!

Typ zwrotu: Ciąg

```zenscript
<tooltype:pickaxe>.toString();
```


## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |
| Nazwa     | Ciąg znaków | prawda         | fałszywy      |

## Operatorzy
### RÓŻNE

Porównuje jeśli dwa podane obiekty MCToolType są takie same

```zenscript
<tooltype:pickaxe> == o jako obiekt
<tooltype:pickaxe> == nowy MCToolType("kilof ")
```

| Parametr | Typ    | Opis        |
| -------- | ------ | ----------- |
| ob       | Obiekt | Inny obiekt |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku  | Jest niedomniemany |
| ----------- | ------------------ |
| Ciąg znaków | fałszywy           |

