# BlockBuilder

Kreator bloków jest używany do... bloków (zupełnie nie widziałeś, że nadchodzą, prawda?).<br> Po utworzeniu można ustawić różne właściwości, które zostaną nakreślone oddzielnymi metodami. <p> Możesz również zmienić typ bloku, aby utworzyć bardziej specjalistyczną formę bloku (e. . schody lub bloki, które mogą być obracane w ten sam sposób mogą być rejestrowane). Aby powiedzieć CoT, że chcesz, aby blok pojawił się w nazwie, musisz wywołać [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) i określić prawidłową ścieżkę lokalizacji zasobów.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Mods.contenttweaker.block.BlockBuilder
```

## Zaimplementowane interfejsy
BlockBuilder implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Konstruktorzy
Tworzy nowy BlockBuilder. Pamiętaj, że to _nie_ utworzy nowego bloku w grze, musisz wywołać [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build).
```zenscript
nowe mods.contenttweaker.block.BlockBuilder(materiał jako crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Parametr | Typ                                                                                  | Opis                             | Opcjonalnie | Wartość domyślna             |
| -------- | ------------------------------------------------------------------------------------ | -------------------------------- | ----------- | ---------------------------- |
| materiał | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Materiał, który blok będzie miał | prawda      | `<blockmaterial:iron>` |



## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |


### notSolid

Instrukcja CoT, że ten blok nie jest stały.

 Jest to wymagane, jeśli Twój model nie jest pełnym blokiem (16x16x16). Jest to również wymagane, jeśli Twój model jest widoczny (jak szkło). Ustaw to, jeśli twój blok tworzy efekty X-Ray kiedy zostanie umieszczony.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.notSolid();
```

### withHardnessAndResistance

Ustawia poziomy twardości i oporu bloku. W przeciwieństwie do innej metody, ta tylko jedna akceptuje jeden parametr i będzie używała tej wartości dla obu właściwości.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(twardośćAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parametr              | Typ                | Opis                                     |
| --------------------- | ------------------ | ---------------------------------------- |
| hardnessAndResistance | zmiennoprzecinkowe | Wartość ustawiona dla twardości i oporu. |



Ustawia poziomy twardości i oporu bloku. W odróżnieniu od innej metody, ta pozwala na ustawienie każdej właściwości osobnej wartości.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(twardość w postaci pływaku, oporu);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parametr   | Typ                | Opis                         |
| ---------- | ------------------ | ---------------------------- |
| hardnessIn | zmiennoprzecinkowe | Wartość dla twardości        |
| opór       | zmiennoprzecinkowe | Wartość do ustawienia oporu. |


### na poziomie Zbioru

Ustawia poziom wydobycia wymagany do wydobycia tego bloku

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Parametr         | Typ    | Opis                             |
| ---------------- | ------ | -------------------------------- |
| poziom zbierania | odcień | Poziom zbiorów został podzielony |


### odbierz Narzędzie

Ustawia narzędzie wymagane do zebrania tego bloku

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool jako mods.contenttweaker.item.MCToolType);
myBlockBuilder.withZbiorvestTool(<tooltype:shovel>);
```

| Parametr             | Typ                                                                             | Opis          |
| -------------------- | ------------------------------------------------------------------------------- | ------------- |
| Narzędzie zbierające | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Typ narzędzia |


### z Grupą Elementów

Ustawia grupę przedmiotów, w której ten blok będzie się pojawiał

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(grupa jako mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parametr | Typ                                                                               | Opis                |
| -------- | --------------------------------------------------------------------------------- | ------------------- |
| grupa    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Grupa do ustawienia |


### withLightValue

Ustawia wartość światła bloku.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn jak int);
myBlockBuilder.withLightValue(15);
```

| Parametr     | Typ    | Opis                         |
| ------------ | ------ | ---------------------------- |
| lightValueIn | odcień | Poziom światła do ustawienia |


### withLootFrom

Poleci CoT aby nadpisał tabelę loot tego bloku jednemu z dostarczonych bloków. Obecnie nadal stworzy to wpis tabeli lootów, choć zostanie on zignorowany przez grę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn jako crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parametr | Typ                                                           | Opis                                                |
| -------- | ------------------------------------------------------------- | --------------------------------------------------- |
| blockIn  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Blok, którego tablica łupów powinna być zastosowana |


### z MaxStackSize

Ustawia maksymalny rozmiar stosu jaki ten blok może mieć w twoim ekwipunku. Jeżeli nie zostaną zmienione, będzie wynosił 64.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(rozmiar jak in);
myBlockBuilder.withMaxStackSize(16);
```

| Parametr | Typ    | Opis                   |
| -------- | ------ | ---------------------- |
| rozmiar  | odcień | Rozmiar do ustawiania. |


### opór

Pozwala ustawić rzadkość tego bloku.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parametr | Typ         | Opis   |
| -------- | ----------- | ------ |
| rzadkość | Ciąg znaków | Rzadko |


### brak ślinienia

Ustawia ślimaki.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parametr       | Typ                | Opis                  |
| -------------- | ------------------ | --------------------- |
| slipperinessIn | zmiennoprzecinkowe | Wartość do ustawienia |


### withType

Ustawia konkretny typ tego bloku. Po nazwaniu tej metody kontekst konstruktora przełączy się na bardziej dostarczony typ konstruktora. Oznacza to, że metody budowniczego nie będą już dostępne, więc wszystkie właściwości, które chcesz ustawić, powinny być ustawione przed wywołaniem tej metody.

 Zwraca: `Budowniczy z danym blokiem.`

Typ zwrotu: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Nazwa parametru | Granice                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------- |
| T               | [Mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### bez spadków

Poleci CoT, że ten blok nie będzie miał żadnych wpisów. Obecnie nadal stworzy to wpis tabeli lootów, choć zostanie on zignorowany przez grę.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
MyBlockBuilder.withoutDrops();
```

### bez OutMovementBlocking

Instrukcja CoT, że ten blok nie blokuje ruchu. Ustawia również blok jako [mods.contenttweaker.block.BlockBuilder#notSolid()](/mods/contenttweaker/API/block/BlockBuilder/#notsolid)

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


