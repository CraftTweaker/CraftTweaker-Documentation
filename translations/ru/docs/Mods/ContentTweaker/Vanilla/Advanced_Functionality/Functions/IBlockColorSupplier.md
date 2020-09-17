# Поставщик IBlockColorPlus

Функция IBlockColorSupplier может быть использована для предоставления [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) , который будет использоваться в дальнейшем.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импортировать mods.contenttweaker.IBlockColorSupplier;`

## Параметры

Функция IBlockColorSupplier - это функция со следующими параметрами.

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) состояние → блок-состояние блока, цвет которого запрашивается.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) доступ → блокировка доступа к блоку, цвет которого запрашивается.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → позиция блока, цвет которого запрашивается.
- int tintIndex → индекс оттенка, используйте, что, однако, вам нравится. Функция должна возвращать [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Примеры

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState;
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker. orld.IBlockAccess;

функция getBlockColor(состояние как BlockState, доступ как IBlockAccess, pos как BlockPos, tintIndex as int) as Color {
  //Возвращает цвет lime
    возвращает цвет. romInt(0x00FF00);
}
```