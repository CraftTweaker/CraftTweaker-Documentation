# IBlockAction

Функция IBlockAction может быть добавлена в [блок](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) и в зависимости от того, где вы добавили его, будет срабатывать, когда блок помещен или сломан.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IBlockAction;`

## Параметры

IBlockAction — это функция со следующими параметрами:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → Мир в блоке в
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) позиция → Положение Блока
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) состояние → Содержит информацию о блоке, например, сам блок и его метаданные

Функция не имеет возвращаемого значения!

## Пример

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("I WAS PLACED!!!");
}
```