### Klasa

```zenscript
importuj mods.roots.RunicShears;
```

#### Metody

```zenscript
Unieważnij przepis(
  nazwy ciągu, // nazwa receptury tworzonej
  IItemStack outputDrop, // dane wyjściowe pozycji uzyskane przez przetarcie
  wymiany IItemStack, // blok (jako itemstack), który zastępuje blok wchodzącej w interakcję po ścinaniu
  IItemStack inputBlock, // blok, który ma być strzyżony
  IItemStack jeiDisplayItem // element, który powinien być wyświetlony w JEI dla tego przepisu
);
```

* * *

```zenscript
unieważnienie addEntityRecipe(
  nazwa ciągu, // nazwa receptury na ścinanie
  IItemStack outputDrop, // element, który zostaje zrzucony po ściśnięciu określonej jednostki
  IEntityDefinition podmiot, // jednostka, która ma zostać pokryta w celu uzyskania spadku
  czasu odnowienia // liczba ticków (sekund pomnożona przez 20) zajmuje do momentu, gdy jednostka może zostać ponownie pokryta
);
```

* * *

```zenscript
usuń przepis(
  IItemStack wyjście // wyjście stosu elementów, które chcesz usunąć
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots. Nożyce mechaniczne;

// Tworzy przepis, który uzyskuje netherową brodę z czerwonych cegieł netherowych
// a następnie przekształca cegły w normalne cegły netheryczne
Skórki. ddRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Tworzy przepis, który otrzymuje jajka od kurcząt z 2-minutowym odnowieniem
RunicShears. ddEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Usuwa wszystkie przepisy (oba bloki & ) dające fejną skórę
RunicShears. emoveRecipe(<roots:fey_leather>);
```

### Uwagi

Zauważ, że funkcja `removeReceppe` spróbuje usunąć dowolną recepturę (zarówno runiczne ścinanie bloków jak i obiektów), która odpowiada pożądanym wynikom.