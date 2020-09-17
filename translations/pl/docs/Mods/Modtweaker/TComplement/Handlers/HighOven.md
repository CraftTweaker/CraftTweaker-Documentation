# Wysoki piec

Pakiet HighOven pozwala dodawać/usuwać paliwa, receptury cieplne i mieszać receptury z piecem wysokim.

## Importowanie pakietu

Importuj paczkę używając

```zenscript
importuj mods.tcomplement.highoven.HighOven;
```

## Paliwa

Możesz dodawać i usuwać paliwa zaakceptowane przez piekarnik.

### Usuwanie paliw

```zenscript
// HighOven.removeFuel(ISkładnik paliwa);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Dodawanie paliw

```zenscript
// HighOven.addFuel(ISkładnik paliwa, czas int, szybkość int);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `paliwo` to paliwo do dodania (obsługuje transformatory, NBT i zbiorniki cieczy)
+ `czas` to czas trwania paliwa, w sekundach
+ `szybkość` oznacza wzrost temperatury w piecu przy użyciu tego paliwa, w stopniach na sekundę

## Nadpisywanie topnienia

Możesz dodawać i usuwać nadpisywanie stopni pieca. Wytapianie nadpisów, cóż, nadpisuje domyślne zachowanie topnienia w piecu High Oven. Przedmioty zwykle zachowują się tak samo, jak w hutnictwie, nadpisywanie może przedefiniować płyn wyjściowy i temperaturę topienia (tylko dla wysokiej pieca).

### Usuwanie nadpisanych

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack, @Optional IItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Dodawanie nadpisanych

Jest to bardziej interesujące. Nadpisuje nowe zachowanie dla przedmiotów w Wysokim Piecu

```zenscript
// HighOven.addMeltingOverride(ILiquidStack Output, IIngredient input, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `wyjście` płynność i ilość do wytworzenia
+ `wprowadź` IIngredient do przetapiania. Obsługuje transformatory, oredykt itp.
+ `temp` (Opcjonalnie) minimalna temperatura przedmiotu, aby rozpocząć topnienie w piecu High Oven, w Kelvin. Jeśli nie zdefiniowano, należy pozostawić obliczenia do wysokosprawnego pieca

## Przepisy na ciepło

Przetwory cieplne przekształcają płyn w inny w wysokociśnieniowy zbiornik pieca, pod warunkiem że temperatura wysokociśnieniowego pieca jest wystarczająco wysoka.

### Usuwanie przepisów na ciepło

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack output, @Optional ILiquidStack);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `wyjście` to wyjście którego przepisy powinny być wyłączone
+ `wejście` to opcjonalnie dane wejściowe do filtrowania receptur. Jeśli nie określono (lub `null`), wszystkie przepisy produkujące dostarczone dane wyjściowe zostaną wyłączone. W przeciwnym razie tylko przepis z danym wejściem jest wyłączony.

*UWAGA*: ta metoda **nie** wyłącza receptur cieplnych dodanych przez ModTweaker przy użyciu następnej metody.

### Dodawanie przepisów na ciepło

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `wyjście` ciecz do upuszczenia i w jakiej ilości
+ `wejście` ciecz do zużycia i w jakiej ilości do wyprodukowania ilości wyjściowej
+ `temp` minimalna wysoka temperatura pieca w Kelvin.

*Uwaga*: rzeczywista szybkość przegrzania się z nadmierną temperaturą

## Mieszanie przepisów

Wymieszane przepisy umożliwiają wykonywanie pewnego rodzaju alchemii lub stopu. Kiedy stos topnie się w wysokim piecu, jeśli wytwarza odpowiedni płyn *i* odpowiedni utleniacz, reduktory i oczyszczacze znajdują się w przeznaczonych do tego celu szczelinach, a następnie wytwarza się inny płyn.

Ponieważ te przepisy są skomplikowane, dodawanie lub ulepszanie istniejących, używa specjalnej klasy zen

### Usuwanie przepisów dotyczących mieszania

To jest łatwa część do mieszania przepisów

```zenscript
// HighOven.removeMixRecipe(ILiquidStack output, @Optional ILiquidStack);
HighOven.removeMixRecipe(<liquid:steel>); // wyłącz przepis na mieszankę wytwarzającą stal
```

Argumenty są takie same jak `removeHeatRecipe()` , a dopasowanie działa w ten sam sposób. Podobnie do `removeHeatRecipe()`, ta metoda nie usunie przepisów dodanych przez ModTweaker.

### Dodawanie przepisów dotyczących mieszanek

Aby dodać przepis na mieszankę, musisz użyć `MixRecipeBuilder`. Możesz użyć jednego

```zenscript
importuj mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack, temp);
var Builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `wyjście` jest płynem i ilością do wytworzenia
+ `wejście` jest płynem i ilością do konsumpcji
+ `temp` to minimalna temperatura pieca do pracy w komorze Kelvin

Gdy masz `MixRecipeBuilder`, powinieneś dodać do niego utleniaczy, reduktory, a następnie zarejestrować go.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

Aby uzyskać szczegółową dokumentację co możesz zrobić z `MixRecipeBuilder`, zobacz jego dokumentację.

UWAGA*: Po użyciu `MixRecipeBuilder`możesz nadal modyfikować go i ponownie go używać. Pozwala na łatwe dodawanie wariantów receptur.

**OSTRZEŻENIE**: Jeśli żaden element nie wytwarza płynu wejściowego podczas topienia w hutni, wówczas przepis nie będzie widoczny w JEI.

### Przepis na mieszanie ulepszeń

Aby zmienić istniejące przepisy mieszania (**w tym** dodane przez ModTweaker), możesz użyć `MixRecipeManager`:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

Jak zwykle, nieokreślenie danych wejściowych (lub podanie `null`skutkuje wieloznacznym zachowaniem, w którym wszystkie dane wejściowe zostaną zaakceptowane.

Gdy masz `MixRecipeManager` reprezentujący konkretny zestaw przepisów dotyczących mieszania, można zapobiec dodaniu do tych przepisów niektórych utleniających/reduktorów/oczyszczarek, *lub* spróbuj dodać nowe dodatki. Usunięcia mają pierwszeństwo przed uzupełnieniami.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

Zachowanie może być czasami nieco surfujące. Po wyłączeniu dodatku, wszelkie dodatki pozwalające na to, co wyłączysz, zostaną anulowane. Na przykład, jeśli dodasz kilka przedmiotów za pomocą pojedynczego `OreDictEntry`, następnie spróbuj usunąć określony `IItemStack`, zapobiegnie dodaniu wpisu.

Dzieje się tak dlatego, że iteracyjnie `OreDictEntry` są dodawane w formie i nie są przekonwertowane do poszczególnych elementów. Jedynym sposobem na wyłączenie `ItemStack` , który chcesz zabronić, jest uniemożliwienie rejestracji całego wpisu, w przeciwnym razie wpis pozwalałby na pozycję.

If you actually want to do add an oredict entry except some items, you'll have to do it manually by iterating on the `OreDictEntry` content and then removing the specific items (or by not adding them in the first place).