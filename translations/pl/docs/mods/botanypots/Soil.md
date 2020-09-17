# Soils

Ścieżka klasy: `mods.botanypots.Soil`

## Użycie

Aby użyć, zaimportuj klasę z `importuj mods.botanypots.Soil;` na początku skryptu.

## Tworzenie nowych gleb

`Utwórz.gleba(id, składnik, wyświetlacz stanu, tickRate, kategorie);`

- `id` &lt;ciąg> Id nowej gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `składnik` <[Składnik](/vanilla/api/items/IIngredient)> Składnik używany do określenia, które przedmioty/bloki są używane do umieszczenia gleby w garnku.
- `wyświetlanie stanu` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Stan bloku, który ma być wyświetlany dla gleby w garnku.
- `growthModifier` &lt;float> Modyfikuje czas potrzebny do wzrostu upraw. 1f = szybki wzrost. 0 = normalny wzrost. -1f = nigdy nie wzrasta. 0,15 = 15% szybciej, -0,15 = 15% wolniej.
- `kategorie` &lt;string[]> Tablica kategorii powiązanych z nową glebą.

Tworzy nowy wpis do gleby, z którego gracze mogą korzystać w botanach.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## Usuwanie gleby

`Soil.remove(id);`

- `id` &lt;ciąg> Id gleby do usunięcia. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.

Usuwa glebę z danych gry.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Zmiana Modyfikatora wzrostu gleby

`Soil.setGrowthModifier(id, tickRate);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `growthModifier` &lt;float> Modyfikuje czas potrzebny do wzrostu upraw. 1f = szybki wzrost. 0 = normalny wzrost. -1f = nigdy nie wzrasta. 0,15 = 15% szybciej, -0,15 = 15% wolniej.

Zmienia modyfikator wzrostu danej gleby.

```zenscript
Soil.setGrowthModifier („botanypots:soil/trawa”, 0,15);
```

## Zmiana składnika gleby

`Soil.setSkładnik (id, składnik);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `składnik` <[Składnik](/vanilla/api/items/IIngredient)> Składnik używany do określenia, które przedmioty/bloki są używane do umieszczenia gleby w garnku.

Zmienia elementy używane do umieszczenia gleby w botany garnku.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Zmiana wyświetlania gleby

`Soil.setDisplayState(id, wyświetlanie stanu);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `wyświetlanie stanu` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Stan bloku, który ma być wyświetlany dla gleby w garnku.

Zmienia blok wyświetlany dla gleby.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Zmiana kategorii gleby

Zmienia kategorie związane z glebą. Są one wykorzystywane do dopasowania upraw do ważnych gleb.

### Dodaj kategorię do gleby

`Kategoria gleby.addCategory(id, kategorieToAdd);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `categoriesToAdd` &lt;string[]> Tablica kategorii do powiązania z glebą.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Usuń kategorię z gleby

`Soil.removeCategory(id, kategorieToRemove);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `categoriesToRemove` &lt;string[]> Tablica kategorii do rozdzielenia z glebą.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Wyczyść wszystkie kategorie z gleby

`[PLACEHOLDER] Soil.clearKategories(id);`

- `id` &lt;ciąg> Id gleby. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.

```zenscript
Soil.clearCategories("botanypots:gleba/grunty rolne");
```

## Pobieranie wszystkich identyfikatorów

`Soil.getAllIds();`

- Zwraca: &lt;ciąg znaków[]> Tablica wszystkich znanych identyfikatorów gleby w tym momencie.

W ten sposób otrzymasz serię wszystkich znanych identyfikatorów gleby.

```zenscript
// Log all id to the crafttweaker.log file
for soil.getAllIds() {
    println(soilId);
}
```

## Usuwanie całej gleby

To całkowicie usunie wszystkie aktualnie zarejestrowane gleby. Jest to przydatne jeśli chcesz odtworzyć wszystkie dane od podstaw przez skrypty.

```zenscript
Soil.removeAll();
```
