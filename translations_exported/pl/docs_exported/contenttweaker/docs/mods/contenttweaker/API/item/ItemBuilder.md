# Konstruktor przedmiotów

Konstruktor przedmiotów jest... budować przedmioty (zaskoczenie!) <p> Pozwala ustawić różne właściwości, które zmienią sposób zachowania przedmiotu i co może zrobić. Możesz również użyć [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) , aby przełączyć się na bardziej wyspecjalizowanego budowlanego budowlanego jeśli istnieje jakiś jakiś element. <p> Aby powiedzieć CoT, że chcesz aby element pojawiał się w nazwie, musisz wywołać [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) i określić prawidłową ścieżkę lokalizacji zasobów.

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Edytor elementów
```

## Zaimplementowane interfejsy
ItemBuilder implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Konstruktorzy
Tworzy nowy Konstruktor Elementów. Pamiętaj, że to _nie_ utworzy nowego bloku w grze, musisz wywołać [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build).
```zenscript
nowe mods.contenttweaker.item.ItemBuilder();
```

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
nowy ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |


### z Grupą Elementów

Pozwala ustawić grupę przedmiotów, w której pojawi się ten przedmiot. Domyślnie przedmioty zostaną wylądowane za `różnych`

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
nowy ItemBuilder().withItemGroup(itemGroup jako mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parametr        | Typ                                                                               | Opis                                              |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| Grupa produktów | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Grupa artykułów, ta pozycja powinna pojawić się w |


### z MaxDamage

Pozwala ustawić maksymalne obrażenia dla tego przedmiotu.<br/> Należy ostrzec, że nie można tego użyć w połączeniu z [modyfikacjami. ontenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
nowy ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Parametr  | Typ    | Opis                     |
| --------- | ------ | ------------------------ |
| maxDamage | odcień | Maksymalny rozmiar stosu |


### z MaxStackSize

Pozwala ustawić maksymalny rozmiar stosu dla tego przedmiotu.<br/> Należy ostrzec, że nie można tego użyć w połączeniu z [modyfikacjami. ontenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize as int);
new ItemBuilder().withMaxStackSize(16);
```

| Parametr     | Typ    | Opis                     |
| ------------ | ------ | ------------------------ |
| maxStackSize | odcień | Maksymalny rozmiar stosu |


### z NoRepair

Ustawia że ten przedmiot nie może być naprawiony w kowadle Zwrot: `Ten konstruktor, używany do łańcuchowania metod`

Typ zwrotu: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
nowy ItemBuilder().withNoRepair();
```

### opór

Pozwala ustawić rzadkość przedmiotu

 Zwroty: `Ten konstruktor używany do łańcucha`

Typ zwrotu: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
nowy ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Parametr | Typ         | Opis   |
| -------- | ----------- | ------ |
| rzadkość | Ciąg znaków | Rzadko |


### withType

Ustawia konkretny typ tego przedmiotu. Po nazwaniu tej metody kontekst konstruktora przełączy się na bardziej dostarczony typ konstruktora. Oznacza to, że metody budowniczego nie będą już dostępne, więc wszystkie właściwości, które chcesz ustawić, powinny być ustawione przed wywołaniem tej metody. Zwraca: `Budowniczy z danym elementem.`

Typ zwrotu: T

```zenscript
nowy ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| Nazwa parametru | Granice                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| T               | [[PLACEHOLDER] mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


