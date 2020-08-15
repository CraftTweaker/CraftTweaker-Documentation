# Поставщик материалов для локализации

Вы можете создать в форме MaterialPartLocalizedNameSupplier объект [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , который будет использоваться по запросу.</p> 

## Импорт класса

Если вам нужно импортировать его класс, то здесь вы следуете:

```zenscript
import mods.contenttweaker.MaterialPartLocalizedNameSupplier;
```

## Статические методы

Статические методы можно вызвать на пакет, а не на экземпляры класса.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```