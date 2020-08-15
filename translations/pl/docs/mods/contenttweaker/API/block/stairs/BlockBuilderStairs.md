# BlockBuilderSchody

Specjalny Kreator bloków, który pozwala na tworzenie schodów. <p> Schody nie będą miały jednej, ale trzech tekstur, które będziesz musiał dostarczyć: Jedno na górze, jeden dla dna i jeden dla boków. Domyślnie te teksty używają Twojej nazwy bloku jako nazwy, przypięte przez `_top`, `_bottom` lub `_side`. Tak jak w przypadku większości rzeczy, przykładowe obrazy są dla Ciebie generowane domyślnie.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderSchody
```

## Zaimplementowane interfejsy
BlockBuilderStairs implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |


### z dna tekstur

Pozwala na nadpisanie ścieżki tekstury, której powinna używać dolna strona. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withbottomTexture(bottomTexture jako crafttweaker.api.util.MCResourceLocation);
```

| Parametr    | Typ                                                                                            | Opis                                     |
| ----------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------- |
| tekst dolny | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Konstrukcja stosowana do spodniej strony |



Pozwala na nadpisanie ścieżki tekstury, której powinna używać dolna strona. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie. Używa funkcji, która przyjmuje nazwę bloku jako wejście i zwraca dla niego końcową teksturę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withbottomTexture(bottomTexture jako funkcja.Funkcja<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
nowy BlockBuilder().withType<BlockBuilderStairs>().withbottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parametr    | Typ                                                                                                                                                                                                   | Opis              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| tekst dolny | funkcja.Funkcja&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Funkcja do użycia |


### withSidesTexture

Pozwala na nadpisanie ścieżki tekstury, której powinny używać boki. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture jako crafttweaker.api.util.MCResourceLocation);
```

| Parametr     | Typ                                                                                            | Opis                         |
| ------------ | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| sidesTexture | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Struktura stosowana do boków |



Pozwala na nadpisanie ścieżki tekstury, której powinny używać boki. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie. Używa funkcji, która przyjmuje nazwę bloku jako wejście i zwraca dla niego końcową teksturę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture jako funkcja.Funkcja<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parametr     | Typ                                                                                                                                                                                                   | Opis              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| sidesTexture | funkcja.Funkcja&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Funkcja do użycia |


### z TopTexture

Pozwala na nadpisanie ścieżki tekstury, której powinna używać górna strona. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parametr | Typ                                                                                            | Opis                                  |
| -------- | ---------------------------------------------------------------------------------------------- | ------------------------------------- |
| tekstur  | [[PLACEHOLDER] crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Konstrukcja stosowana w górnej części |



Pozwala na nadpisanie ścieżki tekstury, której powinna używać górna strona. Jeśli przestrzeń nazw tej tekstury znajduje się w przestrzeni nazw CoT lub jakiegokolwiek z jej dodatków (które ją obsługują), wówczas obraz zostanie utworzony domyślnie. Używa funkcji, która przyjmuje nazwę bloku jako wejście i zwraca dla niego końcową teksturę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.stairs.BlockBuilderSchody](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nowy BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture jako funkcja.Funkcja<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parametr | Typ                                                                                                                                                                                                   | Opis              |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| tekstur  | funkcja.Funkcja&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Funkcja do użycia |



