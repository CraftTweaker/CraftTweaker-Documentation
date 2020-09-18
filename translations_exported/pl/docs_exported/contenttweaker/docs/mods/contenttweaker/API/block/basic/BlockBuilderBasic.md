# BlockBuilderBasic

Ten konstruktor buduje typ bloku, który jest domyślnie używany w [mods.contenttweaker.block.basic. lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Ten konstruktor nie oferuje żadnych specjalnych właściwości, możesz go tylko zbudować.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Zaimplementowane interfejsy
BlockBuilderBasic implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [Mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |



