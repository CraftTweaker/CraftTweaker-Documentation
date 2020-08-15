# Stół rzemieślniczy

## Typy przepisów

Istnieją trzy typy receptur na tworzenie stołów:

- **Kształty:** Bezkształtny przepis to przepis, w którym pozycja elementów wejściowych w siatce wytwarzania nie ma znaczenia.
- **Kształt:** Receptura jest przepisem, w którym pozycja przedmiotów musi być dokładna.
- **Cieniowany Odbiór lustrzany:** Receptura jest jak receptury kształtowe, ale odzwierciedla recepturę wzdłuż osi poziomych lub pionowych.

## Dodawanie przepisu

_Podczas dodawania przepisu upewnij się, że nazwy receptury są unikalne!_

### Dodawanie bezkształtnych przepisów

`craftingTable.addShapeless(receptura, wyjście, składniki, receptura Funkcja);`

- `recepturaNazwa` &lt;ciąg>
- `wyjście` <[IItemStack](/vanilla/api/items/IItemStack)>
- `składniki` <[Składnik](/vanilla/api/items/IIngredient)[]>
- `recipeFunction` (Opcjonalnie) <[RepeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Dodaje [bezkształtny](#recipe-types) przepis do tablicy rzemieślniczej. Jako [bezkształtne](#recipe-types) receptury ignorują pozycję elementów wejściowych, kolejność elementów podczas tworzenia receptury również nie ma znaczenia.

[Bezkształtne](#recipe-types) przepisy mogą mieć do 9 wejść, ale te z czterema lub mniejszą liczbą wejść mogą być również tworzone w siatce inwentaryzacji 2x2.

Przepisy tabeli wytwarzania mogą również wychodzić więcej niż 1 ilość elementu wyjściowego. Można to osiągnąć za pomocą mnożnika [IItemStack](/vanilla/api/items/IItemStack/#mul) na pozycji wyjściowej.

```zenscript
Tablica tworzenia. ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Bezkształtny przepis może mieć do 9 wejść
// To pokazuje również, że można użyć więcej niż jednego wyjścia. W tym przykładzie wyjście z 8 trawy będzie miało miejsce.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Zobacz [Używanie funkcji receptury](#using-recipe-functions) , aby znaleźć przykłady jak korzystać z funkcji receptury._

### Dodawanie kształtów i kształtów lustrzanych przepisów

`craftingTable.addShaped(receptura, wyjście, składniki, receptura Funkcja);`

`craftingTable.addShapedMirrored(receptura, wyjście, składniki, receptura Funkcja);`

- `recepturaNazwa` &lt;ciąg>
- `wyjście` <[IItemStack](/vanilla/api/items/IItemStack)>
- `składniki` <[Składnik](/vanilla/api/items/IIngredient)[][]>
- `recipeFunction` (Opcjonalnie) <[RepeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Dodaje przepis: [kształt](#recipe-types) (lub [lustrzany](#recipe-types), w zależności od funkcji) do stołu rzemieślniczego. Kolejność przedmiotów podczas tworzenia receptury określa położenie każdego przedmiotu w siatce rzemieślniczej.

Zamiast tego uczynienie przepisu [w kształcie lustrzanym](#recipe-types) pozwala graczowi na większą elastyczność podczas dodawania przedmiotów do siatki wytwarzania.

Zarówno [kształt](#recipe-types) jak i [receptury w kształcie lustrzanym](#recipe-types) mogą być wykonane do pracy w siatce 2x2 (ekwipunek) lub 3x3.

Przepisy tabeli wytwarzania mogą również wychodzić więcej niż 1 ilość elementu wyjściowego. Można to osiągnąć za pomocą mnożnika [IItemStack](/vanilla/api/items/IItemStack/#mul) na pozycji wyjściowej.

```zenscript
// Dodawanie kształtu receptury
tworzenia. ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Dodawanie receptury w kształcie 2x2 (można to zrobić również jako lustrzane)
tworzenie. ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond> <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Dodawanie kształtu lustrzanego przepisu
tworzeniowego. ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Zobacz [Używanie funkcji receptury](#using-recipe-functions) , aby znaleźć przykłady jak korzystać z funkcji receptury._

## Używanie funkcji przepisów

Funkcja receptury pozwala na wyjście określone programowalnie. Może to być szczególnie przydatne, gdy potrzebujesz niektórych informacji o danym elemencie wejściowym, takich jak uszkodzenia elementu lub inne dane NBT.

_Ponieważ kształtowane i kształtowane przepisy są podobne, przykłady będą zawierały tylko kształtowane przepisy. Możesz traktować dowolny przykład za pomocą `addshaped` tak samo, jak za pomocą `addShapedMirrored`._

### Używanie RecipeFunctionArray w bezkształtnej recepturze

`recipeFunction` <[RepeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(usualOut jako IItemStack, wejścia jako IItemStack[]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `wejścia` <[IItemStack](/vanilla/api/items/IItemStack)[]> Tablica danych wejściowych zamówiła to samo, co zdefiniowano w oryginalnym recepturze

```zenscript
importuj crafttweaker.api.item.IItemStack;

tworzenie. ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (zwykle jako IItemStack, wejścia jako IItemStack[]) => {
    // Sprawdza, czy <item:minecraft:dirt> ma wyświetlaną nazwę "całkowicie prawdziwego bloku diamentowego"
    jeśli (wejścia[0]. isplayName == "całkowicie prawdziwy blok diamentu") {
        // Zwroty <item:minecraft:diamond> * 9
        Zwrot zwykły;
    }

    // w przeciwnym razie zwróć <item:minecraft:clay> z wyświetlaną nazwą "Diamentd"
    zwraca <item:minecraft:clay>. etDisplayName("Diamentd");
});
```

### Używanie RecipeFunctionMatrix w recepturze Shaed/Mirored Receppe

`recipeFunction` <[RepeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut jako IItemStack, wejścia jako IItemStack[][]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `wejścia` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Tablica danych wejściowych zamówiła to samo, co zdefiniowano w oryginalnym przepisie. Dane wejściowe można znaleźć poprzez zdefiniowanie wiersza, następnie kolumna (`wejścia[0][1]` aby otrzymać przedmiot w pierwszym wierszu, druga kolumna).

```zenscript
importuj crafttweaker.api.item.IItemStack;

tworzenie. ddShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut jako IItemStack, dane wejściowe IItemStack[][]) => {
        var Coun= 0;
        // Sprawdza, czy wszystkie <item:minecraft:clay_ball> ma wyświetlaną nazwę "Diamond"
        dla wiersza w wejściach {
            dla formuły w wierszu {
                jeśli (<item:minecraft:clay_ball>. atches(recipeItem) && recipeItem. isplayName == "Diamond") {
                    // Jeśli receptura jest <item:minecraft:clay_ball> i ma nazwę "Diamond" przyrost licznika
                    licznik++;
                }
            }
        }

        // Jeśli mamy 8 <item:minecraft:clay_ball> o nazwie "Diamond"
        if (licznik = 8) {
            if (wejścia[1][1]. isplayName == "Special Diamond") {
                // / Jeśli <item:minecraft:diamond> ma wyświetlaną nazwę "Special Diamond"
                // return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // return <item:minecraft:diamond_block>
                return usualout;
            }
        }

        // w przeciwnym razie, zwróć <item:minecraft:clay> z wyświetlaną nazwą "Diamentowy Block"
        zwraca <item:minecraft:clay>. etDisplayName("Blok diamentowy");
});
```

### Zaawansowane użycie

#### Funkcje jako zmienna

Funkcje receptury mogą być przypisane do zmiennej pozwalającej na łatwe osiedlenie tej samej funkcji dla wielu receptur.

Bez kształtu:

```zenscript
importuj crafttweaker.api.itemem. a. „oprogramowanie” specjalnie zaprojektowane lub zmodyfikowane do „rozwoju”, „produkcji” lub „użytkowania” sprzętu wyszczególnionego w pozycji 5A001.a.;

RecipeVarFunction as function(usualOut as IItemStack, wejścia jako IItemStack[]) jako IItemStack = (usualOut, wejścia) => {
    if(wejścia[0]. isplayName == "całkowicie prawdziwy blok diamentowy" ){
        return usualOut;
    }

    zwraca <item:minecraft:clay>. etDisplayName("Diamond");
};

// wejścia[0] w przykładzie, ShapelessRecipeVarFunction będą <item:minecraft:dirt>
tworzone. ddShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], przykładShapelessRecipeVarFunction);

// wejścia[0] w przykładzie, ShapelessRecipeVarFunction będą <item:minecraft:cobblestone>
tworzone. ddShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], przykładShapelessRecipeVarFunction);
```

Udostępnione/lustrzone:

```zenscript
importuj crafttweaker.api.itemem. a. „oprogramowanie” specjalnie zaprojektowane lub zmodyfikowane do „rozwoju”, „produkcji” lub „użytkowania” sprzętu wyszczególnionego w pozycji 5A001.a.;

RecipeVarFunction as function(usualOut as IItemStack, wejścia jako IItemStack[][]) jako IItemStack = (usualOut jako IItemStack, wejścia jako IItemStack[][]) => {
    var licznik = 0;
    // Sprawdza, czy wszystkie <item:minecraft:clay_ball> mają wyświetlaną nazwę "Diamond"
    dla wiersza w wejściach {
        dla przepisu w wierszu {
            jeśli (<item:minecraft:clay_ball>. atches(receptura) && Przedmiot receptury. isplayName == "Diamond") {
                // Jeśli receptura jest <item:minecraft:clay_ball> i ma nazwę "Diamond" przyrost licznika
                licznik ++;
            }
        }
    }

    // Jeśli mamy 8 <item:minecraft:clay_ball> o nazwie "Diamond"
    jeśli (licznik = 8) {
        if (dane wejściowe[1][1]. isplayName == "Special Diamond") {
            // Jeśli <item:minecraft:diamond> ma wyświetlaną nazwę "Special Diamond"
            // return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // returns <item:minecraft:diamond_block>
            return usualout;
        }
    }

    // w przeciwnym razie, Zwróć <item:minecraft:clay> z wyświetlaną nazwą "Bloku diamentu"
    zwraca <item:minecraft:clay>. etDisplayName("Blok diamentowy");
};

tworzących Tablice. ddShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], przykładShapedRecipeVarFunction);

tworzenie. ddShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], przykładShapedRecipeVarFunction);
```

## Usuwanie przepisu

### Usuń przepis według nazwy

`craftingTable.removeByName(recipeName);`

- `recepturaNazwa` &lt;ciąg>

Usuwa przepis, który odpowiada podanej nazwie.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Usuń przepisy przez wyjście

`craftingTable.removeRecipe(wyjście);`

- `wyjście` <[IItemStack](/vanilla/api/items/IItemStack)>

Usuwa wszystkie przepisy, w których wynik wyjściowy jest dostarczonym [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Usuń przepisy przez ID modyfikacji

`craftingTable.removeByModid(modId);`

- `modId` &lt;ciąg>

Usuwa wszystkie przepisy dodane przez dostarczony mod.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Wyklucz przepisy z usuwania ID modyfikacji

`craftingTable.removeByModid(modId, wykluczaniaFilter);`

- `modId` &lt;ciąg>
- `Filtr wykluczający` <[Filtr przepisów](/vanilla/api/recipe/RecipeFilter)>
  - `nazwa` &lt;ciąg> Nazwa aktualnie sprawdzanego przepisu. _Identyfikator modyfikacji nie zostanie uwzględniony_

Usuwa wszystkie przepisy dodane przez dostarczony mod. Przepisy są wykluczone, jeśli wynik filtru wyłączającego zwraca wartość true dla nazwy receptury.

```zenscript
craftingTable.removeByModid("minecraft", (nazwa) => {
    // Sprawdza, czy nazwa przepisu pasuje do "minecraft:red_bed_from_white_bed"
    zwraca nazwę == "red_bed_from_white_bed";
});
```

Można również wykluczyć kilka przepisów. Można to zrobić w następujący sposób:

```zenscript
// tablica nazw receptury jako ciągów
var minecraftExclusions jako ciąg[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

tworzenie. emoveByModid("minecraft", (nazwa) => {
    zwraca nazwę w minecraftExclusions;
});
```

### Usuń przepisy przez Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;ciąg>

Usuwa wszystkie przepisy, które są zgodne z ciągiem regex

```zenscript
// usuwa przepisy takie jak "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet" i "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Usuń wszystkie przepisy

`craftingTable.removeAll();`

Usuwa wszystkie przepisy stołu rzemieślniczego.

```zenscript
craftingTable.removeAll();
```
