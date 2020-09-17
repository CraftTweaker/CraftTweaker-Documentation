# Obrót

## Podstawowy przepis

* Dodaje przepis, który jest obracany - dane wejściowe *MUSI* mają powiązany z nimi blok. Stan produktu to blok, który zostanie umieszczony po zakończeniu przepisu

```zenscript
mods.betterwithmods.Turntable.add(IIngredient inputt, IItemStack productstate, IItemStack[] output);

mods.betterwithmods.Turntable.add(IIngredient inputt, IItemStack[] output);

//Examples
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Usuwanie przez wejście

* Usuń przepis na podstawie składnika wejściowego

```zenscript
mods.betterwithmods.Turntable.remove(Input);
```

## Usuwanie przez wyjście

* Usuń przepis na podstawie wyjścia

```zenscript
mods.betterwithmods.Turntable.remove(wyjścia IItemStack[]);
```

## Usuń wszystkie

* Usuń wszystkie przepisy

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Usuń po produkcie

* Usuń przepis z produktu 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Konstruktor

Obrót ma konstruktora receptury, który pozwala na dokładniejszą kontrolę nad przepisami. Wszystkie poprzednie metody są po prostu krótkimi cięciami w używaniu konstruktora.

* Aby utworzyć nowy turntable Builder. `mods.betterwithmods.Turntable.builder()`

* Metody obrotu
     
     * Ustawia wejścia i wyjścia przepisu  
              zenscript
              buildRecipe(IIngredient[] wejścia IItemStack[] wyjścia
     
     * Ustawia rotacje wymagane do ukończenia przepisu. Domyślnie 8.  
              zenscript
              setRotations(rotacje intów)
     
     * Ustaw blok, który zostanie umieszczony po zakończeniu przepisu.  
              zenscript
              setProductState(IItemStack productState)
     
     * Sfinalizuj przepis i dodaj go do gry  
              zenscript
              build()

### Przykładowe użycie konstruktora

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```