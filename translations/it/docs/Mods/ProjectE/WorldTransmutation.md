# Trasmutazione Mondiale

## aggiungi

Aggiunge una trasmutazione del mondo delle Pietre Filosofiche, con una trasmutazione opzionale con clic scorrevole.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Se l'IItemStack non ha un blocco di coresponding, viene invece usata l'aria.
mods.projecte.WorldTransmutation. dd(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Trasforma i blocchi d'oro in blocchi di diamanti facendo clic con il tasto destro del mouse o in blocchi di ferro facendo clic con il tasto destro del mouse su 
mods. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Trasforma i blocchi d'oro in blocchi di diamanti facendo clic con il tasto destro del mouse o in blocchi di ferro facendo clic con il tasto destro del mouse su
mods. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## rimuovi

Rimuove le trasmutazioni del mondo Philosopher Stone che hanno lo stesso input, output e sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Se l'IItemStack non ha un blocco di coresponding, viene invece usata l'aria.
mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Rimuove la ricetta che permette il ciottolo di essere cambiato in pietra/erba
mods. rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Rimuove la ricetta che consente di trasformare il ciottolo in pietra/erba
mods. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## removeAll

Rimuove tutte le trasmutazioni Philosopher Stone World, incluso qualsiasi aggiunto dall'utente prima della chiamata a questo metodo.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```