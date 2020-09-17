# Kocioł

## Podstawowy przepis

* Dodaje niezdatny przepis na kocioł 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] wejść, IItemStack[] wyjście);
//Examples
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Dodaje stokowany przepis na kocioł 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] wejść, IItemStack[] wyjście);
//Examples
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Usuwanie

* Usuń przepis na kocioł na podstawie wyjścia ```mods.betterwithmods.Cauldron.remove(wyjścia IItemStack[]);```

* Usuń wszystkie przepisy kocioła ```mods.betterwithmods.Cauldron.removeAll();```

## Konstruktor

Kocioł ma konstruktor receptury, który pozwala na dokładniejszą kontrolę nad przepisami. Wszystkie poprzednie metody są po prostu krótkimi cięciami w używaniu konstruktora.

* Aby utworzyć nowego konstruktora kotła. `mods.betterwithmods.Cauldron.builder()`

* Metody kociołu
    
    * Ustawia wejścia i wyjścia przepisu  
            Budynek (dane wejściowe IItemStack[]
    
    * Ustawia priorytet przepisu, im niższy priorytet zostanie wytworzony. Domyślnie=0.  
            setPriority(int Priorytet)
    
    * Ustaw wymagania grzewcze receptury. Ciepło jest używane do sprawdzenia, czy przepis może być wykonany w oszołomionym lub nieoszołamianym kotle. Ciepło niezapakowane = 1, ciepło stokowane = 2. Możesz dodać własne źródła ciepła, a nawet niestandardowe poziomy ciepła za pomocą [Rejestru ciepła](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
            setHeat(ogrzewanie cieczą)
    
    * Ustaw przepis, aby mimo to zignorować wartość ciepła i wytwarzania  
            setIgnoreHeat(boolean ignoreHeat)
    
    * Sfinalizuj przepis i dodaj go do gry  
            budowa()

### Przykładowe użycie konstruktora

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```