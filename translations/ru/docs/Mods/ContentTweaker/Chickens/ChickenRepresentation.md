# Представление курицы

The ChickenRepresentation is a template of what your Chicken will do.  
По умолчанию, он будет существовать только и положить яйцо, которое вы дали в качестве исходного параметра.  
Вы можете изменить это поведение, чтобы позволить лучше цыплят путем изменения данных свойств.

## Импорт класса

Хотите импортировать класс? Вот:

```zenscript
import mods.contenttweaker.Chicken;
```

## Регистрация курицы

После того как вы установили chickenRepresentation в том, что вы хотите, наиболее важной частью является его регистрация.  
Будьте осторожны, так как все изменения в этом шаблоне после регистрации вступят в силу, так что вы должны создать новую презентацию курицы для каждой курицы, которую вы хотите иметь.

## Свойства ZenProperties

Вы можете изменить или получить текущее значение свойств либо путем `объекта. ame = newValue` или с помощью методов `object.setName(newValue);`

Пример:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| name                    | type                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| name                    | string                                                                                               |
| layItem                 | [IItemStack](/Vanilla/Items/IItemStack/)                                                             |
| выбросить предмет       | [IItemStack](/Vanilla/Items/IItemStack/)                                                             |
| цвет фона               | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                           |
| foregroundColor         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                           |
| местоположение текстуры | [Расположение CTResource-ресурсов](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| тип спавна              | string                                                                                               |
| layCoefficient          | float                                                                                                |
| parentOne               | [Расположение CTResource-ресурсов](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo               | [Расположение CTResource-ресурсов](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |