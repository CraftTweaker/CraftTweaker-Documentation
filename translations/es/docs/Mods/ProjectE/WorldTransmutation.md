# Transmutación del mundo

## añadir

Añade una transmutación en el mundo de la Piedra Filosósofa, con una transmutación opcional de clic en el escondite.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Si la pila de ítems no tiene un bloque de corespondor, el aire se usa en su lugar.
mods.projecte.WorldTransmutation. dd(Salida ItemStack, entrada IItemStack, @Optional ItemStack sneakOutput);

// Convierte bloques de oro en bloques de diamante haciendo clic derecho o en bloques de hierro haciendo clic derecho en 
mods. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [Estado de IBlock](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(salida de IBlockState, entrada de IBlockState, @Optional IBlockState sneakOutput);

// Convierte bloques de oro en bloques de diamante haciendo clic derecho o en bloques de hierro haciendo clic derecho en
mods. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## eliminar

Elimina las transmutaciones mundiales de piedra filosósofo que tienen la misma entrada, salida y sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Si la pila de ítems no tiene un bloque de corespondor, el aire se usa en su lugar.
mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Removes the recipe allowing cobblestone to be changed into stone/grass
mods.projecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [Estado de IBlock](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(salida de IBlockState, entrada de IBlockState, @Optional IBlockState sneakOutput);

// Elimina la receta permitiendo que el adoquín se cambie en mods de piedra/hierba
. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## eliminar todo

Remueve todas las transmutaciones del mundo de Philosopher Stone, incluyendo cualquier añadido por el usuario antes de la llamada a este método.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```