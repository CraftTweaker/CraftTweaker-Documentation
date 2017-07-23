# Turntable

The Turntable ONLY takes _Blocks_ as inputs, all IItemStack input MUST be that of a place-able _Block_.

The Turntable transforms one block into another and outputs scraps items on transforming
## Addition

``` 
mods.betterwithmods.Turntable.add(IItemStack inputBlock, IItemStack outputBlock, @Optional IItemStack[] scraps);

mods.betterwithmods.Turntable.add(<minecraft:gravel>,<minecraft:sand>,[<minecraft:flint>]);
```

## Removal

``` 
mods.betterwithmods.Turntable.remove(IItemStack input);
 
mods.betterwithmods.Turntable.remove(<minecraft:clay>);
```
