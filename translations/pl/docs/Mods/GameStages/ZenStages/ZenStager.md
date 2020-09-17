# ZenStager

Ta klasa jest głównym obsługującym tworzenie nowych [Etapów](/Mods/GameStages/ZenStages/Stage/), który następnie możesz zbudować, aby powiedzieć grze, aby rozpocząć testowanie tego, co zrobiłeś. Dostarczona jest wstępnie załadowana metodami, aby umożliwić łatwą integrację z innymi modyfikacjami za pomocą [GameStages API](https://minecraft.curseforge.com/projects/game-stages) wraz z pewnymi niestandardowymi modyfikacjami, aby twórcy modpack mogli żyć tak bardzo łatwo.

Więcej informacji i najnowsze źródło dla klasy [znajdziesz tutaj](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Importowanie pakietu

ZenStager : `importuj mods.zenstages.ZenStager;`

Etap *(Zalecane do zaimportowania)* : `importuj mods.zenstages.Stage;`

## Metody

### Utwórz Etap

Utwórz i zwraca nowy [Etap](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Po utworzeniu sceny powinieneś utworzyć plik statyczny/globalny, który zawiera następujące dane, dzięki czemu będziesz mógł uzyskać dostęp do sceny na innych skryptach/klasach.

**Uwaga: Nie masz `initStage` i `statycznego` tworzenia w tym samym skrypcie. Ze względu na ograniczenia i inne problemy, `initStage` będzie wywoływany za każdym razem, gdy odwołujesz się do członka statycznego. Tak więc zachowaj osobno początek i statyczne tworzenie**

```zenscript
importuj mods.zenstages.ZenStager;

statyczny TestStage = ZenStager.getStage("test"); // Nazwa jest tym, który właśnie utworzyłeś.
```

### Metody pomocnicze

Zdobądź [Etap](/Mods/GameStages/ZenStages/Stage/) *(Nie znaleziono)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Pobierz mapę [Etapów](/Mods/GameStages/ZenStages/Stage/) , które zostały utworzone.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap jako etap[string] = ZenStager.getStageMap();
```

Zdobądź mapę rozłożonych płynów.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Metody testowania

Dodaj nazwę pakietu. To wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/). Jest to ta sama logika co [tutaj](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] etapy);
ZenStager.addPackage("appeng", [TestStage]);
```

Dodaj nazwę pakietu. To wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/). Jest to ta sama logika co [tutaj](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] etapy);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Zdobądź etap składnika, jeśli jest etapowy, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie znaleziono.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(składnik składnika);
var StickStage jako Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```

Zdobądź etap stosu płynnego, jeśli jest etapowy, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie zostanie znaleziony.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage as Stage = ZenStager.getLiquidStage(<liquid:water>);
```

Zdobądź etap nazwy receptury, jeśli zostanie ustawiony, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie zostanie znaleziony. Wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(Receptura string);
wersja RecipeNameStage jako Etap = ZenStager.getRecipeNameStage("minecraft:boat");
```

Pobierz etap kontenerowca, jeśli zostanie ustawiony, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie zostanie znaleziony. Wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getContainerStages(pojemnik ciągowyNazwa);
pojemnik var Stage jako Stage = ZenStager.getContainerStages("my.awesome.container");
```

Zdobądź etap pakietu, jeśli zostanie ustawiony na etap, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub wartość zerową, jeśli nie zostanie znaleziona. Wymaga zainstalowania [Przepisów](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage jako Etap = ZenStager.getPackageStages("appeng");
```

Zdobądź etap wymiarowy, jeśli zostanie ustawiony w etapie, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie zostanie znaleziony. Wymaga zainstalowania [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/).

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage jako Etap = ZenStager.getDimensionStage(-1);
```

Zdobądź etap potworu, jeśli zostanie ustawiony, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub pusty, jeśli nie zostanie znaleziony. Wymaga zainstalowania [MobStages](/Mods/GameStages/MobStages/MobStages/).

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage jako Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Zdobądź etap Materiału, jeśli zostanie ustawiony w etapie, zwróci [Etap](/Mods/GameStages/ZenStages/Stage/) lub wartość zerową, jeśli nie zostanie znaleziona. Wymaga zainstalowania [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(materiał string);
var MobStage as Stage = ZenStager.getTiCMaterialStage("brąz");
```

### Sprawdź, czy coś jest zaplanowane

Wspierane Typy:

- pojemnik
- wymiary
- składnik
- mob
- mod
- mulitblock
- ruda
- paczka
- nazwa receptury
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(typ ciągu, wartość ciągu);
// mods.zenstages.ZenStager.isStaged(typ ciągu, wartość ciągu);
// mods.zenstages.ZenStager.isStaged(typ ciągu, wartość ciągu);
ZenStager.isStaged("składnik", <minecraft:stick>);
ZenStager.isStaged("container", "my. wesome.container");
ZenStager.isStaged("mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:kusze");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimension", -1);
```

### Debugowanie

Wywołanie tej metody sprawi, że mody sprawdzą się na [Etapach](/Mods/GameStages/ZenStages/Stage/) , które utworzyłeś i co jest etapem. To see if you have mistakenly *staged* something more than once. Jeśli którykolwiek z nich zostanie znaleziony, są one zalogowane do pliku `crafttweaker.log`. Opowiadanie co jest powielone, etapy i etapy. Jest to idealna metoda/narzędzie do użycia przed opublikowaniem aktualizacji paczki modów lub po prostu ogólnego rozwoju paczki.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Buduj etapy

Jest to **ważne** , aby zadzwonić po zakończeniu dodawania wpisów do swoich etapów. To wzywa wszystkie mody do sfinalizowania tych wpisów. Brak uruchomienia tej metody spowoduje brak etapu!

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```