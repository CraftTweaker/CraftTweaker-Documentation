# Nawozy

Ścieżka klasy: `mods.botanypots.Fertilizer`

## Użycie

Aby użyć, zaimportuj klasę z `importuj mods.botanypots.Fertilizer;` na początku skryptu.

## Tworzenie nawozów

`Nawóz.create(id, składnik, minTick, maxTick);`

- `id` &lt;ciąg> Id nowego nawozu. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `składnik` <[Składnik](/vanilla/api/items/IIngredient)> Element użyty dla nawozu.
- `minTick` &lt;int> Minimalna ilość kleszczy dodanych przez nawóz.
- `maxTick` &lt;int> Maksymalna ilość kleszczy dodanych przez nawóz.

Tworzy nowy nawóz. Można je wykorzystać do szybszego uprawiania upraw.

```zenscript
Nawóz ("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Usuwanie nawozów

`Nawóz.remove(id);`

- `id` &lt;ciąg> Id nawozu. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.

Może to być użyte do usunięcia nawozu.

```zenscript
Nawóz usuwalny („botanypots:nawozy/kość_meał”);
```

## Zmiana Ticków nawozu

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;ciąg> Id nawozu. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `minTick` &lt;int> Nowa minimalna ilość kleszczy dodanych przez nawóz.
- `maxTick` &lt;int> Nowa maksymalna ilość kleszczy dodanych przez nawóz.

To zmieni zakres wzrostu dodany przez nawóz.

```zenscript
Fertilizer.setTicks(botanypots:fertilizers/ko-mączka,800, 900);
```

## Zmiana składników nawozu

`Nawóz.setSkładnik (id, składnik);`

- `id` &lt;ciąg> Id nawozu. Jest to identyfikator pliku nazw, który musi być w prawidłowym formacie `namespace:path`.
- `składnik` <[Składnik](/vanilla/api/items/IIngredient)> Nowy przedmiot do użycia dla nawozu.

Ustawia składnik nawozu.

```zenscript
Nawóz .setSkładnik („botanypots:nawozy/kość_posiłek”, <item:minecraft:sugar>);
```

## Pobieranie wszystkich identyfikatorów

`nawóz .getAllIds();`

- Zwraca: &lt;ciąg znaków[]> Tablica wszystkich znanych identyfikatorów nawozów w tym momencie jest rankingowa.

Daje to wachlarz wszystkich znanych identyfikatorów nawozów.

```zenscript
// Log all id to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Usuwanie wszystkich nawozów

Spowoduje to całkowite usunięcie wszystkich obecnie zarejestrowanych nawozów. Jest to przydatne jeśli chcesz odtworzyć wszystkie dane od podstaw przez skrypty.

```zenscript
„Technologia”, zgodnie z uwagą ogólną do technologii, służąca do „rozwoju”, „produkcji” lub „użytkowania” sprzętu lub „oprogramowania” wyszczególnionego w pozycjach 2B004, 2B005, 2B009, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B
```