# Wpis Oreentry

OreEntry to materiał taki jak Złoto, Diament, Węgiel, Czerwony Kamień itd.  
Możesz użyć tego aby uzyskać kilka [OreDictEnordów](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Metody

Zasadniczo metody przyjmują parametr ciągu, który jest prefiksem do użycia.  
Na przykład Wpis Oreentry dla `"Złoto"`, wywołane z prefiksem `"pyłem"` zwróci Złoty Pył.  
Na te przykłady, założymy, że to zostało zadeklarowane:  
Komentarze po przykładowych połączeniach określą, co wywołanie metody może wrócić (chyba że w dodatkowej kategorii).

```zenscript
Wpis owalny = mods.jaopca.JAOPCA.getOre("Gold");
```

### Uzyskaj właściwości wpisu

Możesz uzyskać te właściwości:

```zenscript
oreEntry.energyModifier; //1.0 jako podwójny
oreEntry.rarity; //1.0 jako podwójny
oreEntry.oreType; //"INGOT" jako ciąg
```

### Pobierz Nazwę OreName lub OreNameSynonyms

Nazwa rudy jest niezbędna, jak jest zarejestrowana i co używasz w getOre do jej pobrania.  
Synonimy nazwy rudy są synonimami, które mody lub autorzy paczki mogą zarejestrować, aby połączyć dwa lub więcej wpisów (e. . „Aluminum” i „Aluminium”). Większość rekordów prawdopodobnie nie będzie jednak zarejestrowana. Pobierający synonimy zwróci listę zawierającą wszystkie synonimy jako ciągi.

```zenscript
oreEntry.oreName; //"Złota"
oreEntry.oreNameSynonyms; //[]
```

### Pobierz IOreDictEntry

Zwraca nowy [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) z podanym prefiksem.

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

Zwraca nowy [IItemStacks](/Vanilla/Items/IItemStack/) , który odpowiada podanemu prefiksowi.  
Możesz podać alternatywny prefiks awaryjny do użycia, jeśli nie znaleziono pasującego elementu.

Jeśli nie znaleziono pasującego elementu i nie znaleziono pasującego elementu za pomocą prefiksu awaryjnego (jeśli jest dostępny), zwróci on `null`.

```zenscript
//oreEntry.getItemStack(prefiks);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); //null

//oreEntry.getItemStack(prefiks, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Zwraca nowy [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) , który pasuje do podanego prefiksu.  
Możesz podać alternatywny prefiks awaryjny do użycia, jeśli nie znaleziono odpowiedniego płynu.

Jeśli nie znaleziono odpowiedniego płynu i nie znaleziono odpowiedniego płynu przy użyciu prefiksu awaryjnego (jeśli jest dostępny), zwróci on `null`.

```zenscript
//oreEntry.getLiquidStack(prefiks);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); //null

//oreEntry.getLiquidStack(prefiks, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Pobierz dodatkowe

Wpis może mieć dodatkową rejestrację. Dodatkowa wartość może być na przykład drugorzędnym wyjściem podczas pulsowania dopasowanej rudy.

Możesz sprawdzić czy wpis ma dodatek, pobrać dodatkowy (lub `null` , jeśli nie występuje) lub extraName.  
Możesz również użyć tych samych metod co powyższe (`getOreDictEntry`, `getLiquidStack` i `getItemStack`).

Istnieje maksymalnie 3 dodatki, które mogą być zarejestrowane. Dla uproszczenia nie będzie przykładów równoważnych metod, zostaną one podane tylko

```zenscript
//Pierwszy dodatkowy
oreEntry.hasExtra; //true lub false
oreEntry.extra; //dopasowanie oreEntry lub null
oretria. xtraName; //nazwa lub null

//Metody dla pierwszej dodatkowej
recenzji. etOreDictEntryExtra(prefiks);
oreEntry.getItemStackExtra(prefiks);
oreEntry.getItemStackExtra(prefiks, fallback);
oreEntry. etLiquidStackExtra(prefiks);
oreEntry.getLiquidStackExtra(prefiks, fallback);



//Drugie dodatkowe
oreEntry.hasSecondExtra; //true lub false
oreEntry. econdExtra; //dopasowanie oreEntry lub null
oreEntrysecondExtraName; //nazwa lub null

//Metody dla drugiego ekstra
oreEntrySecondExtra(prefix);
oreEntry. etItemStackSecondExtra(prefiks);
oreEntry.getItemStackSecondExtra(prefiks, fallback);
oreEntry.getLiquidStackSecondExtra(prefiks);
oreEntry.getLiquidStackSecondExtra(prefiks, fallback);



//Trzeci extra
oreEntry.hasThirdExtra; //true lub false
oreEntry.thirdExtra; //dopasowanie oreEntry lub null
oreEntry. hirdExtraName; //nazwa lub null

//Metody dla trzeciej ekstra
oreEntryThirdExtra(prefiks);
oreEntryTr.getItemStackThirdExtra(prefiks);
oreEntry.getItemStackThirdExtra(prefiks, fallback);
oreEntry.getLiquidStackThirdExtra(prefiks);
oreEntry.getLiquidStackThirdExtra(prefiks, fallback);
```