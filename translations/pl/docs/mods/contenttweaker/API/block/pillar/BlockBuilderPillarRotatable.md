# BlockBuilderPillarRotatable

Specjalny Kreator bloków, który pozwala na tworzenie bloków, które mogą być obracane w taki sam sposób, jak logi. <p> Oznacza to, że ma jedną teksturę dla góry i dołu oraz jedną teksturę dla boków. Domyślnie lokalizacje tych stron są nazwą, a następnie albo `_end` albo `boków`. Tak jak w przypadku większości rzeczy, przykładowe obrazy są dla Ciebie generowane domyślnie.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
[PLACEHOLDER] mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## Zaimplementowane interfejsy
BlockBuilderPillarRotatable implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [Mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |


### withEndTexture

Pozwala na nadpisanie ścieżki tekstury, której powinny używać strony końcowe (góra/dół). Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.filar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
nowy BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parametr   | Typ                                                                                            | Opis                                              |
| ---------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| endTexture | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Tekstura, która ma być użyta na bokach końcowych. |



Pozwala na nadpisanie ścieżki tekstury, której powinny używać strony końcowe (góra/dół). Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie. Używa funkcji, która przyjmuje nazwę bloku jako wejście i zwraca dla niego końcową teksturę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.filar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parametr   | Typ                                                                                                                                                                                           | Opis              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| endTexture | Funkcja&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Funkcja do użycia |


### withSideTexture

Pozwala na nadpisanie ścieżki tekstury, której powinny używać strony (wszystko poza góry/dół). Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.filar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
nowy BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture jako crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parametr     | Typ                                                                                            | Opis                             |
| ------------ | ---------------------------------------------------------------------------------------------- | -------------------------------- |
| sidesTexture | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Konstrukcja stosowana po bokach. |



Pozwala na nadpisanie ścieżki tekstury, której powinny używać strony (wszystko poza góry/dół). Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie. Używa funkcji, która przyjmuje nazwę bloku jako wejście i zwraca dla niego końcową teksturę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.filar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture jako function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parametr     | Typ                                                                                                                                                                                           | Opis              |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| sidesTexture | Funkcja&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Funkcja do użycia |



