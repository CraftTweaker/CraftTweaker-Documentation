# Tree Tweaker

Tweaker drzew jest dodatkiem do tworzenia Tweakera, który pozwala na dodawanie niestandardowych drzew do generowania świata. Kształt, wysokość, liście, logi, częstotliwość, biomasa i więcej mogą być dostosowywane poprzez zenscript. Drzewa mogą używać bloków modowanych i być ustawione do generowania w zmodyfikowanych biomach.

## Integracja CraftTweaker

Problemy z Tweaker drzew powinny być omawiane w [Tree Tweaker Issuer](https://github.com/superfluke/treetweaker/issues).

## Pakiet

`importuj mods.treetweaker.TreeFactory;`

## Wymagania skryptu

#### var **newtree = TreeFatory.createTree("newtree");**

utwórz nowe drzewo o nazwie `newtree`, używając zmiennej`newtree`

`nowości var = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

ustaw typ kształtu drzewa do wygenerowania. Akceptuje OAK, SPRUCE, JUNGLE, BIRCH, ACACIA i DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

zarejestruj drzewo, aby dodać do świata. Upewnij się, że ta metoda wywołuje ostatnio. `newtree.register();`

## Opcjonalna składnia

#### newtree.setLog("modid:itemid");

ustaw którego dziennika użyć  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

ustaw jaki liść użyć  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

ustaw minimalną wysokość drzewa. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Dodatkowa wysokość dodana losowo, gdy drzewo generuje `treename.setExtraHeight(5);`

#### newtree.setGenGenfrequency (INT);

Służy do kontrolowania, jak często drzewo generuje, z powodzeniem pojawia się z szybkością 1 w N próbach `newtree.setGenGenFrequency(5)`

#### newtree.setGenAttempts(INT);

Ile drzew powinno próbować pojawić się podczas udanej próby generacji. Może być użyty do tworzenia klastrów drzew `newtree.setGenGenAtpts(1)`

#### newtree.extraThick=boolean;

Sprawia, że drzewo wygeneruje grubość 2x2. Ważne tylko na LARGE_OAK, PINE, CANOPY i SPRUCE drzewa `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Ustaw biom spawnu, ignorując typowe reguły biomów.  
Jeśli nie ustawione, drzewo będzie generować we wszystkich biomach, które zwykle zawierają drzewa.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

Drzewo tagów biomów może generować (HOT, SWAMP, SNOWY...), ignorując typowe reguły drzewa biomów . Nie będzie działać, chyba że spawnBiom jest null. `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

Jaki blok drzewo powinno generować na górze. Jeśli nie ustawione, domyślnie będzie to bloki ważne dla drzew wanilii (trawy, ziemi, ziemia) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

Pojedyncza intencja lub tablica intów wyświetlających wymiarowe identyfikatory drzewa mogą generować. Jeśli null, może generować w dowolnym wymiarze `newtree.setDimWhitelist(0);`