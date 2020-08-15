# Przepisy

## Typy przepisów

Istnieje kilka rodzajów przepisów:

### Kształtowane przepisy

Kształtowane przepisy są przepisami, gdzie ma to znaczenie, do których elementów dołącza się miejsce. Na przykład, nie możesz po prostu zorganizować 7 sztabek żelaza w celu stworzenia żelaznych nogów. Kształt ma znaczenie, a więc jest to przepis.

### Luźny przepis

Luźne przepisy mają kształt przepisów. Różnica polega tylko na tym, że przepis może być lustrowany wzdłuż osi poziomych lub pionowych.

### Bezkształtne przepisy

Bezkształtne przepisy są przepisami, w których tylko przedmioty umieszczane w siatki wytwarzania, podczas gdy kształt nie ma znaczenia. Na przykład barwnik niebieski i żółty tworzą barwnik zielony. Ten przepis nie troszczy się o to, gdzie umieścisz dany przedmiot.

## Usuń przepisy

Istnieje kilka sposobów usuwania przepisów.

### usuń

```zenscript
recipes.remove(wyjście, NBTMatch);
```

Spowoduje to tworzenie receptur stołowych dla danego `wyjścia`.  
Jeśli `NBTMatch` jest prawdziwe, usunie tylko przepisy, które skutkują przedmiotami z takimi samymi danymi NTB jak dostarczone

`Wyjście` jest [ISkładnikiem](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` jest boolanem i opcjonalny (jeśli nie określono).

### usuń kształt

```zenscript
recipes.removeShaped(wyjście, wejście);
```

To jest bardziej rygorystyczne, na których przepisach należy usunąć i usunie tylko kształtowane receptury, które wytwarzają `wyjście` z `wejściem`.

`output` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)  
`wejścia` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)\[][\] (np.[[żelaza,żelaza],[żelaza,żelaza,żelaza,żelaza],[żelaza,null,żelaza]])

Ponadto `wejścia` są opcjonalne. W przypadku pominięcia, funkcja zrobi to samo co `przepis.remove`, ale usunie tylko przepisy.  
`wejścia` mogą zawierać znaki wieloznaczne: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*><*>]]` będzie odnosić się do przepisu, którego przedmioty tak długo, jak każde miejsce zostanie wypełnione, nie ma znaczenia.

### usuń bez kształtu

```zenscript
recipes.removeShapeless(wyjście, wejścia, wildcard);
```

To jest bardziej rygorystyczne przepisy, które należy usunąć i usunie tylko bezkształtne przepisy, które wytwarzają `wyjście` z `wejściem`.  
Jeśli `wieloznaczna karta` jest prawdziwa, usunie bezkształtne przepisy, które wytwarzają `wyjścia` z `wejściami` i innymi, nieokreślone elementy (na przykład możesz wyłączyć wszystkie przepisy bezkształtne, które zawierają, między innymi, Lapis jako składnik).

`wyjście` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)  
`wejścia` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)[]  
`wieloznacznikiem` jest boolanem i opcjonalnym (jeśli nie określone)

Ponadto `wejścia` są opcjonalne. Jeśli pominięte, funkcja zrobi to samo co `przepis.remove`, ale usunie tylko bezkształtne przepisy.

### usuń wszystko

Usuwa wszystkie przepisy do tworzenia w grze.  
Nieco przesadne, nie sądzisz?

```zenscript
recipes.removeAll();
```

### Usuń po nazwie

W miarę wprowadzania przepisów o nazwach 1.12 można również usunąć przepisy, gdy znasz ich nazwę. Możesz również użyć regex do usunięcia wielu przepisów jednocześnie. I nie, jeśli nie wiesz, jakie są regularne wyrażenia, nie wyjaśnię tego tutaj!

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Usuń przez modyfikacje

Możesz również usunąć wszystkie przepisy, które zostały dodane przez określony moder.  
Musisz podać modid modyfikacji jako ciąg znaków.

```zenscript
recipes.removeByMod("modułowa");
```

## Dodaj przepisy

### Uwagi do 1.12

W dniu 1.12 każda dodana receptura wymaga identyfikatora UNIQUE, ponieważ tego chciał zespół kuźni.  
Oznacza to, że wszystkie funkcje dodawania wymagają teraz dodatkowego parametru `nazwy` na początku (którego nie można pominąć).  
Oznacza to, że `receptura.addShaped(wyjście,wejście);` teraz jest `recepturą. ddShaped(name,output,input);`  
Wszystkie inne funkcje pozostają takie same. Pamiętaj, że `nazwa` musi być unikalna!  
`nazwa` jest ciągiem.

### dodany

```zenscript
//pre-1.12
recipes.addShaped(wyjście,wejść,funkcja,akcja);

//1.12
recipes.addShaped(nazwa,wyjście,wejście,funkcja,akcja);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`nazwa` jest ciągiem znaków i musi być unikatowa, ale jest również opcjonalna `wyjście` jest [IItemStack](/Vanilla/Items/IItemStack/)  
`wejścia` jest [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (patrz poniżej)  
`funkcją` jest IRecipeFunction. Zapoznaj się z [szanującym wpisem na wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) , aby uzyskać więcej informacji na temat funkcji.  
`akcja` jest ReReRecipeAction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) for more information on actions.

`wejścia` to dwuwymiarowy [ISkładnik](/Vanilla/Variable_Types/IIngredient/) Tablica.  
Więc przepis na żelazne nogawice zostałby napisany jako `[[żelazo,żelazo,żelazo],[żelazo,null,żelazo],[żelazo, ull,iron]]`  
Jeśli szło to mylić, spróbuj rozdzielić tablice na jedną tablicę na linię

```zenscript
żelazo walna = <minecraft:iron_ingot>;
walne nogawice = <minecraft:iron_leggings>;

przepisy.addShaped("CTLeggings", nogy,
 [[żelazo, żelaza,żelazoła],
  [żelazo,null,żelazoła],
  [żelazo, null,żelazoła]]);
```

### dodaj ShapedMirrored

```zenscript
//Normalna składnia 1.12
recipes.addShapedMirrored(wyjście,wejść,funkcja,akcja);

//Zalecana składnia 1.12
recipes.addShapedMirrored(nazwa,wyjście,wejścia,funkcja,akcja);
```

Tak samo jak `addshaped`, jedynie, że przepis stworzony w ten sposób jest przepisem lustrzanym.

### addShapeless

```zenscript
//Normalna składnia 1.12
recipes.addShapeless(wyjście,wejść,funkcja,akcja)

//Rekomendowana składnia 1.12
recipes.addShapeless(nazwa,wyjście,wejście,funkcja,akcja)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`Nazwa` jest ciągiem znaków i musi być unikalny `wyjście` jest [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)[] (np. [<minecraft:dye:1>,<minecraft:dye:2>])  
`funkcja` jest IRecipeFunction. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) for more information on functions. To jest opcjonalne.  
`Akcja` jest przepisami. Please refer to the [respecting wiki entry](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) for more information on actions. To jest opcjonalne.

### addHidden

```zenscript
addHiddenShapeless(nazwa ciągu, wyjście IItemStack, składnik IIngredient[] składniki, @Optional IRecipeFunction function@Optional IRecipeAction action);
Struktura danych sformatowanych
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients that is named `name`.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.  
For the shapeless variant you can also set if the recipe is `mirrored`, if omitted, it will not.

## Inne funkcje

### Uzyskaj wszystkie zarejestrowane przepisy rzemieślnicze.

Możesz użyć tego aby uzyskać [`Listę<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) zawierającą wszystkie zarejestrowane przepisy rzemieślnicze.

    wszystkie przepisy
    

### Zdobądź wszystkie przepisy na dany IIngredient

Możesz użyć tego aby uzyskać [`Listę<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) zawierającą WSZYSTKIE zarejestrowane receptury tworzenia dla podanego [Składnika IIngredient](/Vanilla/Variable_Types/IIngredient/).

    //recipes.getRecipesFor(składnik składnika);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### Zastąp wszystkie składniki artykułu innym

Możesz użyć tego do zastąpienia wszystkich [składników](/Vanilla/Variable_Types/IIngredient/) w recepturze innym przepisem, na przykład wszystkich kijków kamieniami. Akceptuje również trzeci fakultatywny parametr odpowiadający ponownie wynikom receptury. Jeśli przepis

    //recipes.replaceAllOccurences(IIngredient toReplace, IIngredient replaceWith, @Optional IIngredient forput);
    
    //zastępuje każdy kij kamieniem
    przepisami. eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Explicitly używa dowolnej produkcji, zastępuje sztabki złota sztabkami
    przepisami. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //zastępuje tylko w przepisach diamond_sword jako przepisy wyjściowe
    . eplaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //warunki działają również -> zastępuje w przepisach na wyjście z receptury z wyjątkiem przepisów tnt
    . eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Wytwórz

Możesz nawet wytwarzać z `receptury`! Funkcja zwróci [IItemStack](/Vanilla/Items/IItemStack/) lub `null` w zależności od tego, czy przepis zostanie znaleziony lub nie.

    //recipes.craft(IItemStack[][][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);