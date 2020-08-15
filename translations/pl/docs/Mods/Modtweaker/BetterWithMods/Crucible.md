# Tygiel

## Podstawowy przepis

* Dodaje Niepowołany Tygiel 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] wejść, IItemStack[] wyjście);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Dodaje stokowany przepis 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] wejść, IItemStack[] wyjście);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Usuwanie

* Usuń regułę na podstawie wyjścia

```zenscript
mods.betterwithmods.Crucible.remove(wyjścia IItemStack[]);
```

* Usuń wszystkie przepisy

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Konstruktor

Tygiel ma konstruktor receptury, który pozwala na dokładniejszą kontrolę nad przepisami. Wszystkie poprzednie metody są po prostu krótkimi cięciami w używaniu konstruktora.

* Aby utworzyć nowy konstruktor tygielu. `mods.betterwithmods.Crucible.builder()`

* Metody tyglowe
     
     * Ustawia wejścia i wyjścia przepisu  
              zenscript
              buildRecipe(IIngredient[] wejścia IItemStack[] wyjścia
     
     * Ustawia priorytet przepisu, im niższy priorytet zostanie wytworzony. Domyślnie=0.  
              zenscript
              setPriority(int priority)
     
     * Ustaw wymagania grzewcze receptury. Ciepło jest używane do sprawdzenia, czy przepis może być wykonany w oszołomionym lub nieoszołamianym kruszonym kruszarym. Ciepło niezapakowane = 1, ciepło stokowane = 2. Możesz dodać własne źródła ciepła, a nawet niestandardowe poziomy ciepła za pomocą [Rejestru ciepła](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
              zenscript
              setHeat(int heat)
     
     * Ustaw przepis, aby mimo to zignorować wartość ciepła i wytwarzania  
              zenscript
              setIgnoreHeat(boolean ignoreHeat)
     
     * Sfinalizuj przepis i dodaj go do gry  
              zenscript
              build()

### Przykładowe użycie konstruktora

```zenscript
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```