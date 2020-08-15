# IOreDictentry

Kiedy [IOreDict](/Vanilla/OreDict/IOreDict/) jest leksykonem, IOreDictEnordy są wpisami leksykonu.  
Składają się z nazwy (OreDictionary name) i wyjaśnienia (wszystkie pasujące elementy).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.oredict.IOreDictEntry;`

## Pobieranie takiego obiektu.

Istnieje wiele sposobów uzyskania obiektu IOreDictEntry Jeśli odnosisz się do oreDeka, który jeszcze nie istnieje, zostanie on utworzony.

- Używanie klasy [IOreDict](/Vanilla/OreDict/IOreDict/).
- Używanie [uchwytu klamry rudy](/Vanilla/Brackets/Bracket_Ore/).
- Używając [IIDefinition `uzyskaj`](/Vanilla/Items/IItemDefinition/).

## ZenGetters

Możesz użyć tych poborców do pobrania pewnych informacji na temat oreditu:

| Nazwa            | Opis                                   | Typ zwrotu                               |
| ---------------- | -------------------------------------- | ---------------------------------------- |
| Nazwa            | Zwraca nazwę oreDicta                  | ciąg znaków                              |
| puste            | Zwraca jeśli oreDict jest pusty        | bool                                     |
| pierwszy element | Zwraca pierwszy z przedmiotów oreDicta | [IItemStack](/Vanilla/Items/IItemStack/) |

## Metody ZenMethods

Możesz użyć tych metosów na obiekcie IOreDictEntry

### Dodaj/Usuń elementy

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] elementów);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Sprawdź, czy IOreDictEntry zawiera element

Możesz sprawdzić, czy IOreDictEntry zawiera element używając `w` lub `ma` słowa kluczowe:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//While użycie jest możliwe
if(oreDictEnt in <minecraft:iron_ingot>){
    print("Żelazo jest w oreDict! );
}

//wiele preferuje używanie ponieważ może być bardziej sensowne
jeśli(oreDictEnt ma <minecraft:iron_ingot>){
    print("Żelazo nadal jest w oreDict! );
}
```

### Odbij IOreDictEntry

Odbijanie IOreDictEntry oznacza, że wszystkie przedmioty w innym oreDictEntry zostaną zastąpione przez przedmioty w oreDictEntry metoda została wykonana na:

```zenscript
//spraw, aby żelazo i miedź były odpowiednikiem
żelaza walnego = <ore:ingotIron>;
miedź walna = <ore:ingotCopper>;

//dodaje wszystkie wpisy z żelaza do miedzi, tak aby miedź zawierała zarówno żelazo, jak i miedziane pozycje
. ddAll(miedź); 


//luster miedzianych do żelaza, więc wszystkie elementy w żelaza zostaną zastąpione wszystkimi elementami w miedzi.
//W tym przypadku oznacza to przez wszystkie zapisy rudy żelaza i miedzi
miedzi.lustro (iron);
```

## Wdrożenie ISkładnik

IOreDictEntry rozszerza [Składnik](/Vanilla/Variable_Types/IIngredient/). Oznacza to, że wszystkie metody dostępne dla [IIngredient](/Vanilla/Variable_Types/IIngredient/) są również dostępne dla IOreDictEntries. Oznacza to również, że można umieścić IIngredient Arrays (takie jak te w tworzeniu metod receptury).

### Iteracja przedmiotów z oredyktEntryi

```zenscript
żelazo walne = <ore:ingotIron>;

dla produktu w iron.items{
    recipe.remove(item);
}
```