# NuclearCraft

**Uwaga:Wymagany jest podwójny zestaw nawiasów w funkcjach, `([...])` .** Zasadniczo dlatego, że wszystkie metody rzemieślnictwa nukclearCraft wymagają szeregu obiektów, niezależnie od tego, czy są składnikami, ciągami, liczbami całkowitymi czy podwójnymi.

Wszystkie przepisy obejmują pięć zestawów informacji - dane wejściowe elementów, dane wejściowe płynów, wyjścia elementów, wyjścia płynów i dodatkowe informacje. pierwsze cztery to wyraźnie składniki i produkty zawarte w przepisie, a dodatkowe informacje zawierają takie dane, jak czas i moc dla maszyn, podstawowy okres użytkowania, zmienna energetyczna i cieplna komór syntezy jądrowej itp.

Wszystkie części przepisu są po prostu wymienione w metodzie - wewnętrzny kod NuclearCraft zajmie się rozdzieleniem go na tych kategorii i zapakowaniem informacji na przepis.

## Dodatki przepisów
Metody receptury określą `itemInput` dla danych wejściowych produktu. <br/> Metody przepisu określą `wyjść produktu` dla wyjść produktu. <br/> Metody przepisu określą `płynne Wejście` dla płynnych wejść. <br/> Metody przepisu określą `płynne wyjście` dla wyrzutni płynów. <br/> Metody przepisu określą `blokWejście` dla danych wejściowych bloku. <br/> Metody przepisu określą `blockOutput` dla danych wyjściowych bloku. <br/> **Uwaga: `blockInput` i `blockOutput` musi być `IItemStack`/`IIngredient` wersji bloków**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Wprowadzanie płynów
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Blokuj wejścia
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Blokuj wyjścia
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Usuwanie przepisów
Określając przepis do usunięcia, wszystko, co jest wymagane dla wszystkich składników wejściowych lub wyjściowych. Dane o szansach składników nie są wymagane. Również w tym przypadku przedmioty muszą stać się na pierwszym miejscu, a następnie płyny.

Możesz również usunąć cały rodzaj receptury - aby to zrobić, użyj metody `removeAllRecipes()`.

## Szanse Składniki
Wyjścia przedmiotów i płynów mogą mieć do nich dołączone dodatkowe informacje - konkretnie informacje, które mogą być losowo dopasowane do rozmiaru stołu wyjściowego . Te dodatkowe informacje są po prostu otagowane na końcu określonego składnika. <br/>

Wielkość stosu wytworzonego w każdym procesie jest losowo przypisywana z rozkładu dwumianowego określonego przez szansę informacji. Procent wielkości stosu składników odpowiada rolom prawdopodobieństwa i liczby prób. <br/>

W przypadku ChanceFluidStacks, należy również określić „różnicę stosu”, która określa różnicę w rozmiarze między możliwymi stosami (dla ChanceItemStacks i ChanceOreStacks, jest to skutecznie 1). Na przykład ChanceFluidStack dla składnika o wielkości 500, o różnicy stosu 150 i minimalnym rozmiarze stosu 50, przyniesie 50, 200, 350 lub 500 miliwiader płynu.

### [PLACEHOLDER] ChanceItemStack
Formą `ChanceItemStack` jest `wyjście IItemStack, int procent, @Optional int minimumStackSize`. <br/> Szansa na wytworzenie `wyjścia` wynosi `procent`. <br/> Jeśli nie określono, `minimumStackSize` to 0.

### ChanceOreDictEntry
Formą `ChanceOreDictEntry` jest `wyjście IOreDictEnt, int procent, @Opcjonalny int minimumStackSize`. <br/> Szansa na wytworzenie `wyjścia` wynosi `procent`. <br/> Minimalny rozmiar stosu dla wyjścia wynosi `minimumStackSize`. Jeśli nie określono, domyślnie 0

### ChanceLiquidStack
Formą `ChanceLiquidStack` jest `ILiquidStack, int percentage, int stackDifference, @Optional int minimumStackSize`. <br/> Szansa na wyjście wynosi `procent`. <br/> Różnica pomiędzy możliwymi rozmiarami stosów to `różnica stosu`. Minimalny rozmiar stosu dla wyjścia to `minimumStackSize`. Jeśli nie określono, domyślnie 0

- Przykład: ``<liquid:ethanol>` * 500, 100, 150, 50
    - Maszyna wytwarza 50, 200, 350 lub 500 milibukietów etanolu