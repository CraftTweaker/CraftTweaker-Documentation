# Narzędzie Konstruktora Przedmiotów

Specjalny konstruktor który pozwala na tworzenie przedmiotów, które mogą być używane jako narzędzia. Powinieneś ustawić maksymalne obrażenia przedmiotu, zanim przejdziesz na tego budowlanego. <p> Ma specjalne metody, które pozwalają ustawić poziom wydobycia dla kilku typów narzędzi, jak również dla obrażeń ataku.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.item.tool.Narzędzie Konstruktora Przedmiotów
```

## Zaimplementowane interfejsy
ItemBuilderTool implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |


### [PLACEHOLDER] withAttackdamage

Pozwala ustawić bonus do obrażeń ataku, który otrzymujesz podczas trzymania tego przedmiotu

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
nowy ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attack Damage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parametr        | Typ                | Opis                         |
| --------------- | ------------------ | ---------------------------- |
| Obrażenia ataku | zmiennoprzecinkowe | Dodatkowe obrażenia od ataku |


### z Szybkością Ataku

Pozwala ustawić bonus do szybkości ataku, który otrzymujesz podczas trzymania tego przedmiotu.

 Zwroty: `Ten konstruktor użyty do przywracania metody`.

Typ zwrotu: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
nowy ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attack Speed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parametr       | Typ      | Opis           |
| -------------- | -------- | -------------- |
| Szybkość ataku | podwójne | Prędkość ataku |


### NieWytrzymałość Atak

Pozwala ustawić ilość obrażeń, jakie ten przedmiot otrzyma po uderzeniu wrogów. Domyślnie jest to `0`

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withTrabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parametr           | Typ    | Opis                                   |
| ------------------ | ------ | -------------------------------------- |
| TrwałośćAtak Ataku | odcień | Punkty obrażeń otrzymają ten przedmiot |


### NieTrwałośćKosztGórnictwo

Pozwala ustawić ilość obrażeń, jakie ten przedmiot otrzyma podczas wydobywania bloków. Domyślnie jest to `0`

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withTrabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parametr               | Typ    | Opis                                   |
| ---------------------- | ------ | -------------------------------------- |
| TrwałośćKosztGórnictwo | odcień | Punkty obrażeń otrzymają ten przedmiot |


### withToolType

Pozwala dodać typ narzędzia do tego narzędzia. Możesz określić typ, poziom wydobycia i opcjonalnie prędkość wydobywania po uderzeniu tego typu.

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
nowy ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType jako mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parametr           | Typ                                                                             | Opis                                                     | Opcjonalnie | Wartość domyślna |
| ------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- | ---------------- |
| Typ narzędzia      | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Typ narzędzia                                            | fałszywy    | `null`           |
| Poziom wydobycia   | odcień                                                                          | Poziom wydobycia dla tego typu narzędzia                 | fałszywy    | `null`           |
| Prędkość wydobycia | zmiennoprzecinkowe                                                              | Jak szybko to narzędzie może wydobywać bloki danego typu | prawda      | `1.0`            |



