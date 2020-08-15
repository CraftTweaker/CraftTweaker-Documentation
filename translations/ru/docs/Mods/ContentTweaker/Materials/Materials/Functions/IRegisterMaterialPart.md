# IRegisterMaterialPart

Функция IRegisterMaterialPart используется для регистрации [материальных частей](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , добавленных с помощью пользовательских [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Импорт пакета

Если вы чувствуете необходимость импорта класса этой функции, вам следует:

```zenscript
import mods.contenttweaker.RegisterMaterialPart;
```

## Синтаксис

У нас недействительная функция, которая принимает [материальную часть](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) в качестве входа.  
Это materialPart который должен быть зарегистрирован.  
Вы можете написать к примеру [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) но как следует из этой точки на самом деле зависит от вас.

```zenscript
function(materialPart) {
    //DoStuff
    return;
}
```