# Трансмутация мира

## Добавить

Добавляет трансмутацию мира Philosopher Stone, с последующим перемутацией клика.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Если IItemStack's не имеет котировочного блока, используется воздух.
mods.projecte.WorldTransmutation. dd(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Превращение золотых блоков в алмазные блоки, щелкнув правой кнопкой мыши или щелкнув правой кнопкой мыши по 
модам. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Превращение золотых блоков в алмазные блоки, щелкнув правой кнопкой мыши или щелкнув правой кнопкой мыши по
модам. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## удалить

Удаляет трансмутации мира из камня Философа, которые имеют одинаковые входные, выходные и sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Если IItemStack's не имеет котировочного блока, используется воздух.
mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Удаляет рецепт, позволяющий перевести булыжник в камень/траву
модов. rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Удаляем рецепт, позволяющий булыжникам быть заменены на каменные/травы
моды. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## удалить все

Удаляет все трансмутации мира Philosopher Stone, в том числе все добавленные пользователем перед вызовом к этому методу.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```