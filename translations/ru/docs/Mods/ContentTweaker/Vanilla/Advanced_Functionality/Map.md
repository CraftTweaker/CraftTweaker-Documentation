# Карта

Пакет карты позволяет установить путевую точку с помощью обработчика события BASE.

## Импорт пакета

Вы можете импортировать этот пакет, так что вам не придется повторно вводить его каждый раз.

    import mods.contenttweaker.Map;
    

## Добавление путевых точек

Это единственный метод, описанный в пакете Map, и он позволяет задать точку в указанном месте.  
Это пустой метод с параметрами:

- название строки
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String название, IWorld world, почта IBlockPos, CTColor цвет)