# Piec

## Podstawowy przepis

* Dodaje przepis na piec - wejścia *MUSI* mieć powiązany z nimi blok.

```zenscript
mods.betterwithmods.Kiln.add(IIngredient inputt, IItemStack[] output);
//Examples
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Usuwanie przez wejście

* Usuń przepis na podstawie składnika wejściowego

```zenscript
mods.betterwithmods.Kiln.remove(Input);
```

## Usuwanie przez wyjście

* Usuń przepis na podstawie wyjścia

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Usuń wszystkie

* Usuń wszystkie przepisy

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Konstruktor

Piec ma konstruktor receptury, który pozwala na dokładniejszą kontrolę nad przepisami. Wszystkie poprzednie metody są po prostu krótkimi cięciami w używaniu konstruktora.

* Aby utworzyć nowego budowniczego pieca. `mods.betterwithmods.Kiln.builder()`

* Metody pieca
     
     * Ustawia wejścia i wyjścia przepisu  
              zenscript
              buildRecipe(IIngredient[] wejścia IItemStack[] wyjścia
     
     * Ustaw wymagania grzewcze receptury. Ciepło jest używane do sprawdzenia, czy przepis może być wykonany w oszołomionym lub nieoszołamianym kotle. Ciepło niezapakowane = 1, ciepło stokowane = 2. Możesz dodać własne źródła ciepła, a nawet niestandardowe poziomy ciepła za pomocą [Rejestru ciepła](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Blok struktury

Piec jest wieloblokowym blokiem opartym na bloku, z którego jest wykonany; Pozwala to na rejestrację bloku, który może być użyty do tworzenia struktury.

Wprowadź MUSI być *blokiem*

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```