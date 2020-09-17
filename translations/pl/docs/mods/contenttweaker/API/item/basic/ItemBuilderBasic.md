# Konstruktor Elementu

Podstawowy konstruktor dla przedmiotów, nazywany również przez [mods.contenttweaker.item.basic.ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). Nie posiada żadnych szczególnych właściwości, istnieje takie właściwości.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Mods.contenttweaker.item.basic.Konstruktor Elementu
```

## Zaimplementowane interfejsy
ItemBuilderBasic implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |



