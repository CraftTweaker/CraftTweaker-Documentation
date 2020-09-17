# NuclearCraft: Przetworzony

Wszystkie przepisy obejmują pięć zestawów informacji - dane wejściowe elementów, dane wejściowe płynów, wyjścia elementów, wyjścia płynów i dodatkowe informacje. pierwsze cztery to wyraźnie składniki i produkty zawarte w przepisie, a dodatkowe informacje zawierają takie dane, jak czas i moc dla maszyn, czas zubożenia bazowego, rodzaj ciepła, wydajność, krytyczny i poziom promieniowania stałych paliw rozszczepialnych itp.

Wszystkie części przepisu są po prostu wymienione w metodzie - wewnętrzny kod NC zajmie się rozdzieleniem go na pięć kategorii i zapakowaniem informacji na przepis.


## Szanse Składniki

Wyjścia przedmiotów i płynów mogą mieć do nich dołączone dodatkowe informacje - konkretnie informacje, które mogą być losowo dopasowane do rozmiaru stołu wyjściowego . Te dodatkowe informacje są podane przy użyciu "składników szansowych".

Wielkość stosu wytworzonego w każdym procesie jest losowo przypisywana z rozkładu dwumianowego określonego przez szansę informacji. Procent wielkości stosu składników odpowiada rolom prawdopodobieństwa i liczby prób. Można również określić minimalny rozmiar stosu - bez tego minimalny rozmiar stosu wynosi po prostu 0.

W przypadku ChanceFluidIngredients należy również określić „różnicę stosu”, która określa różnicę w rozmiarze między możliwymi stosami (dla ChanceItemIngredients, jest to skuteczne 1). Na przykład ChanceFluidIngredient dla składnika o wielkości 500, o różnicy stosu 150 i minimalnym rozmiarze stosu 50, przyniesie 50, 200, 350 lub 500 miliwiader płynu.

**Uwaga: `ChanceItemSkładnik` i `ChanceFluidSkładnik` liczy się jako `Składnik` do celów receptur w NuclearCraft: Przegląd**

### Składnik ChanceItemu

#### Tworzenie

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(ISkładnik Składnika, zamiana chancePercent, @Opcjonalny int minStackSize);
```

#### Przykłady

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Dodatkowe metody

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### ChanceFluidSkładnik
Mogą one być używane wszędzie gdzie używany jest zwykły `ILiquidStack`.

#### Tworzenie
```zenscript
mods.nuclearcraft.[PLACEHOLDER] ChanceFluidIngredient.create(Ingredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Przykłady
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Dodatkowe metody
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Dodatki przepisów
Metody receptury określą `itemInput` dla danych wejściowych produktu. <br/> Metody przepisu określą `wyjść produktu` dla wyjść produktu. <br/> Metody przepisu określą `płynne Wejście` dla płynnych wejść. <br/> Metody przepisu określą `płynne wyjście` dla wyrzutni płynów. <br/> Metody przepisu określą `blokWejście` dla danych wejściowych bloku. <br/> Metody przepisu określą `blockOutput` dla danych wyjściowych bloku. <br/> **Uwaga: `blockInput` i `blockOutput` musi być `IItemStack`/`IIngredient` wersji bloków**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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
