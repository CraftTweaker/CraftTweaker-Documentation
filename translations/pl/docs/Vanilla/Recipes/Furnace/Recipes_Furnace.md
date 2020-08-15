# Piec

CraftTweaker pozwala `Dodać` i `Usunąć` receptury pieca i zmienić wartość paliwa dla przedmiotów.

## Przepisy

### Usuwanie

Istnieją 2 sposoby na usunięcie przepisów dotyczących pieców, mianowicie:

```zenscript
[PLACEHOLDER] furnace.remove(Ingredient output)
```

Oraz

```zenscript
piec.remove(wyjście typu „składnik odpadowy”, wejście typu „składnik odpadowy”);
```

Pierwsza składnia jest bardziej elastyczna z usuniętymi przepisami i usunie wszystkie receptury pieca, które wygenerują podaną `wyjścia` .  
Druga składnia jest bardziej rygorystyczna z przepisami, które są usuwane i usunie wszystkie przepisy pieca, które wygenerują `dane wyjście` i mają dane wejściowe ``.

Istnieje również trzeci sposób usuwania przepisów dotyczących pieców, chociaż ten usunie WSZYSTKIE przepisy dotyczące pieców zarejestrowane w grze.

```zenscript
piec.removeAll();
```

### Dodanie

Istnieją 2 polecenia do dodawania przepisów o piecach:

```zenscript
piec.addRecipe(wyjście IItemStack, wejście IIngredienta);
```

Oraz

```zenscript
piec.addRecipe(wyjście IItemStack, wejście IIngredient, podwójne xp);
```

Pierwsza składnia doda przepis na piec, który da 0 xp przy przetapianiu.

Druga składnia doda przepis na piec, który da `xp` xp przy przetapianiu.

## Paliwo

### Ustaw

Polecenie ustawiania wartości paliwa jest:

```zenscript
piec.setFuel(wsad do składników, czas spalania);
```

Spowoduje to ustawienie wartości oparzenia `wejścia` na `spali` w tickach. Węgiel Minecraft pali na 1600 ticków, 80 sekund, 8 przedmiotów. 1 przedmiot w piecu minecraftowym wymaga 200 ticków do ukończenia.

Ustawienie `czasu spalania` na `0` powstrzyma `wejście` przed byciem elementem paliwowym.

### Pobierz

Polecenie pobierania wartości paliwa towaru to:

```zenscript
furnace.getFuel(IItemStack item); 
```

To zwróci wartość oparzenia jako liczbę całkowitą

## Przykłady

### Usuwanie

Spowoduje to usunięcie wszystkich przepisów dotyczących pieców, które wychodzą `<minecraft:glass>`.

```zenscript
piec.remove(<minecraft:glass>);
```

Spowoduje to usunięcie wszystkich przepisów pieca `<minecraft:quartz>` , które używają `<minecraft:quartz_ore>` jako danych wejściowych.

```zenscript
piec.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Dodanie

Spowoduje to dodanie przepisu na piec, który wyśle `<minecraft:golden_apple>` kiedy `<minecraft:apple>` zostanie przetapiany.

```zenscript
piec.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

To doda przepis na piec, który wyniesie `<minecraft:speckled_melon>` kiedy `<minecraft:melon>` zostanie przetapiony i da graczowi 1500 punktów xp.

```zenscript
piec.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Paliwo

To ustawi wartość paliwa `<minecraft:rotten_flesh>` na `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Inne funkcje

### Uzyskiwanie wszystkich zarejestrowanych przepisów pieca

```zenscript
Cały piec;
```

Zwraca [`Listę<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).