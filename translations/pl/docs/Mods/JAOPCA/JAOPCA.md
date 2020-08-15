# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Rure Compatiing Attempt) jest modem, który ma na celu dodanie kompatybilności przetwarzania rudy do wielu modyfikacji.

## Importowanie pakietu

Jeśli chcesz skrócić połączenia metody, możesz zaimportować pakiet.  
Możesz to zrobić za pomocą

```zenscript
import mods.jaopca.JAOPCA;
```

## Metody

Ten pakiet jest Twoim punktem wejścia dla produktu JAOPCA. Zapewnia możliwość sprawdzania i uzyskiwania obiektów [OreEntry](/Mods/JAOPCA/OreEntry/). Sprawdź odpowiednią stronę w celu uzyskania dalszych informacji, ale w skrócie są to nazwy materiałowe (e. . "Złota") który może mieć wpisy, takie jak chunki, pyły i wszystkie.

- Wpis: np. "nugget", "pył", "molten", ... (sprawdź [tutaj](/Mods/JAOPCA/RegisteredEntries/) , aby wyświetlić listę wszystkiego)
- [OreEntry](/Mods/JAOPCA/OreEntry/): np. "Diamond", "Węgiel", "Redstone", ...
- OreType: np. "INGOT", "GEM", "DUST"

### Sprawdź, czy wpis istnieje

Zwraca `tru` jeśli istnieje wpis o podanej nazwie

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### Uzyskaj Oreentry

Zwraca podaną [OreEntry](/Mods/JAOPCA/OreEntry/) dla podanej nazwy, lub `null` jeśli nie istnieje. *Ostrożnie: Większość materiałów jest skapitalizowana i tak, otoczka!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("węgiel");
```

### Zdobądź wszystkie OreEnordy dla wpisu

Zwraca listę wszystkich obiektów [OreEntry](/Mods/JAOPCA/OreEntry/) , które mają dany wpis zarejestrowany.

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Zdobądź wszystkie OreEnordy dla wpisu

Zwraca listę wszystkich obiektów [OreEntry](/Mods/JAOPCA/OreEntry/) , które są podanym oreType.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Uzyskaj wszystkie zarejestrowane wpisy

Zwraca listę wszystkich zarejestrowanych obiektów [OreEntry](/Mods/JAOPCA/OreEntry/).

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```