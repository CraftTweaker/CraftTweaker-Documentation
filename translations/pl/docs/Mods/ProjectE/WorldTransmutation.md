# Transmutacja świata

## dodaj

Dodaje transmutację świata Phlosophera z opcjonalną transmutacją kliknięcia.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Jeśli IItemStack nie posiada bloku współodpowiedzi, zamiast tego stosuje się powietrze.
mods.projecte.WorldTransmutation. dd(IItemStack output, IItemStack, @Opcjonalny IItemStack sneakOutput);

// Zamień bloki złota w bloki diamentowe klikając prawym przyciskiem myszy lub w żelazne bloki poprzez skradanie się prawym przyciskiem myszy 
modami. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [Stan IBlocka](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(IBlockState Output, IBlockState input, @Optional IBlockState sneakOutput);

// Zamień bloki złota w bloki diamentowe klikając prawym przyciskiem myszy lub w żelazne bloki poprzez skradanie się prawym przyciskiem myszy
modami. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## usuń

Usuwa transmutacje na świecie Phlosophera, które mają takie same wejścia, wyjścia i dane wyjściowe.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Jeśli IItemStack nie posiada bloku współodpowiedzi, zamiast tego stosuje się powietrze.
mods.projecte.WorldTransmutation.remove(wyjście IItemStack, wejście IItemStack, @Opcjonalny IItemStack sneakOutput);

// Usuwa przepis pozwalający na zamianę bruku na modyfikacje kamienia/trawy
. rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [Stan IBlocka](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(IBlockState Output, IBlockState input, @Optional IBlockState sneakOutput);

// Usuwa przepis pozwalający na zmianę bruku na mody
/trawa. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## usuń wszystko

Usuwa wszystkie transmutacje świata Philosophera, w tym wszelkie dodane przez użytkownika przed wywołaniem tej metody.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```