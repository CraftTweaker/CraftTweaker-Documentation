# Рука

Рука - это перечисление двух возможных рук игрока: главный и выключен

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.Hand;`

## Перечисление

Рука может быть из этих двух значений:

- основная
- выкл

```zenscript
импорт mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Использовано

Основное использование руки - в [Функции IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Сравнение двух ручных объектов

Вы можете сравнить два Hand объекта, используя `==` getter.

```zenscript
Hand.main() == Hand.main()
```