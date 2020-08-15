# Piła

## Podstawowy przepis

* Dodaje piaskowy przepis - dane wejściowe *MUSI* mają powiązany z nimi blok.

```zenscript
mods.betterwithmods.Saw.add(IIngredient inputt, IItemStack[] output);
//Examples
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Usuwanie przez wejście

* Usuń przepis na podstawie składnika wejściowego

```zenscript
mods.betterwithmods.Saw.remove(Input);
```

## Usuwanie przez wyjście

* Usuń przepis na podstawie wyjścia

```zenscript
mods.betterwithmods.Saw.remove(wyjścia IItemStack[]);
```

## Usuń wszystkie

* Usuń wszystkie przepisy

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Konstruktor

Piła ma konstruktora receptury. Ze względu na charakter wibracji, nie ma ona obecnie żadnych specjalnych metod konstrukcyjnych, nie będę go dokumentować bez wyjątku.

* Aby utworzyć nowego budowniczego piór. `mods.betterwithmods.Saw.builder()`

* Metody łapania
     
     * Ustawia wejścia i wyjścia przepisu  
              zenscript
              buildRecipe(IIngredient[] wejścia IItemStack[] wyjścia
     
     * Sfinalizuj przepis i dodaj go do gry  
              zenscript
              build()

### Przykładowe użycie konstruktora

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();