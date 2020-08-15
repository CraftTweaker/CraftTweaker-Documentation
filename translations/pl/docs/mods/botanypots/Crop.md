# Uprawy

Ścieżka klasy: `mods.botanypots.Crop`

## Użycie

Aby użyć, zaimportuj klasę z `importuj mods.botanypots.Crop;` na początku skryptu.

## Utwórz przycięcie

`Rośliny uprawne (id, nasiona, wyświetlacz, wskaźnik tickrat, kategorie);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `ziarno` <[Składnik](/vanilla/api/items/IIngredient)> Element używany do zasadzania upraw.
- `wyświetl` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Blok wyświetlany podczas renderowania przycinania.
- `tickRate` &lt;int> Jeden z czynników, jak długo rośnie uprawa.
- `kategorie` &lt;string[]> Tablica kategorii gleby, w których można uprawiać tę uprawę.

To może być użyte do tworzenia nowej uprawy. Pamiętaj, że krople należy dodawać oddzielnie.

```zenscript
Przytnij tworzenie ("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## Usuń przytnij

`Przycinanie (id);`

- `id` &lt;ciąg> Id przycinania do usunięcia. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.

Usuwa przycinanie na podstawie jego identyfikatora.

```zenscript
Uprawy pastewne („botanypots:uprawa pszenica”);
```

## Ustaw materiał siewny

`Nasiona roślin uprawnych (id, nasiona);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `ziarno` <[Składnik](/vanilla/api/items/IIngredient)> Element używany do zasadzania upraw.

Ustawia przedmiot używany do sadzenia upraw.

```zenscript
Nasiona roślin uprawnych („botanypots:crop/pszenica”, <item:minecraft:diamond>);
```

## Ustaw blok wyświetlania

`Crop.setDisplay(id, state);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `wyświetl` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Blok wyświetlany podczas renderowania przycinania.

Ustawia blok renderowany dla przycinania.

```zenscript
Crop.setDisplay("botanypots:crop/pszenica", <blockstate:minecraft:snow_block>);
```

## Ustaw szybkość zaznaczania

`Uprawy setTickRate(id, tickRate);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `tickRate` &lt;int> Zaktualizowany wskaźnik ticku. Jeden z czynników, jak długo uprawa trwa do wzrostu.

Ustawia współczynnik ticku przycinania.

```zenscript
Rośliny uprawne setTickRate(»botanypots:plony/pszenica«, 5000);
```

## Zmiana kategorii przycinania

Zmienia kategorie związane z uprawą. Kategorie są używane do dopasowania prawidłowych gleb do upraw.

### Dodaj kategorię do przycinania

`Przytnij kategorię(id, kategorieToAdd);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `categoriesToAdd` &lt;string[]> Tablica kategorii do powiązania z uprawami.

```zenscript
Rośliny uprawne („botanypots:uprawy pszenicy”, [„kamienne”, „śnieg”]);
```

### Usuń kategorię z przycinania

`Przytnij kategorie(id, kategorieToRemove);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `categoriesToRemove` &lt;string[]> Tablica kategorii do rozdzielenia z przycinaniem.

```zenscript
Rośliny uprawne removeCategory(»botanypots:plony/pszenica«, [»brudna«]);
```

### Wyczyść wszystkie kategorie z przycinania

`Przytnij kategorie(id);`

- `id` &lt;ciąg> Id przycinania. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.

```zenscript
Kategorie upraw („botanypots:uprawy pszenicy”);
```

## Krople przycinania

### Dodawanie spadków

`Przytnij dodatni (id, kropla, szansa, min, maks.);`

- `id` &lt;ciąg> Id przycięcia do dodania kropli. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `upuść` <[IItemStack](/vanilla/api/items/IItemStack)> Element do upuszczenia.
- `szansa` &lt;unosi się> Szansa, którą upuszcza.
- `min` &lt;int> Minimalna ilość tego elementu do podania.
- `maks.` &lt;int> Maksymalna ilość tego elementu do podania.

To dodaje nowy potencjalny łup do uprawy.

```zenscript
Crop.addDrop("botanypots:crop/pszenica", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Usuwanie kropel

`Crop.removeDrop(id, toRemove);`

- `id` &lt;ciąg> Id przycinania do usunięcia kropla. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `toRemove` <[Składnik](/vanilla/api/items/IIngredient)> Składnik do dopasowania do usunięcia

Usuwa wszelkie kropki, które mają pasujący element.

```zenscript
Rośliny uprawne removeDrop("botanypots:uprawa pszenicy", <item:minecraft:wheat_seeds>);
```

## Pobieranie wszystkich identyfikatorów

`Crop.getAllIds();`

- Zwraca: &lt;ciąg znaków[]> Tablica wszystkich znanych identyfikatorów upraw w tym momencie.

To da Ci tablicę wszystkich znanych identyfikatorów upraw na raz.

```zenscript
// Rejestruj wszystkie identyfikatory pliku crafttweaker.log
dla przycięcia w Crop.getAllIds() {
    println(cropId);
}
```

## Usuwanie wszystkich przycinanych

Spowoduje to całkowite usunięcie wszystkich obecnie zarejestrowanych upraw. Jest to przydatne jeśli chcesz odtworzyć wszystkie dane od podstaw przez skrypty.

```zenscript
Przycięcie removeAll();
```
