# Młyn

## Podstawowy przepis

* Dodaje przepis na Młyn 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] wejść, IItemStack[] wyjście);
//Examples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Usuwanie

* Usuń przepis Młyna na podstawie wyjścia

```zenscript
mods.betterwithmods.Mill.remove(wyjścia IItemStack[]);
```

* Usuń wszystkie przepisy Mill

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Konstruktor

Młyn ma konstruktor receptury, który pozwala na dokładniejszą kontrolę nad przepisami. Wszystkie poprzednie metody są po prostu krótkimi cięciami w używaniu konstruktora.

* Aby utworzyć nowego budowniczego Milla. `mods.betterwithmods.Mill.builder()`

* Metody konstruktora Mill
     
     * Ustawia wejścia i wyjścia przepisu  
              zenscript
              buildRecipe(IIngredient[] wejścia IItemStack[] wyjścia
     
     * Ustawia priorytet przepisu, im niższy priorytet zostanie wytworzony. Domyślnie=0.  
              zenscript
              setPriority(int priority)
     
     * Ustaw dźwięk przepisu Młyna.  
              zenscript
              setSound(String soundLocation)
     
     * Sfinalizuj przepis i dodaj go do gry  
              zenscript
              build()

### Przykładowe użycie konstruktora

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```