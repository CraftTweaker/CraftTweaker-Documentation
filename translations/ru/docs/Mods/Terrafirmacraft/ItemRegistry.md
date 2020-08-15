# Реестр предметов

## Пакет
```zenscript
// Импортируем методы ItemRegistry в ваш скрипт
импорта mods.terrafirmacraft.Реестр товаров;
```

## Размер элемента регистрации
- Регистрировать размер предмета и вес. Это меняет сколько стека может удерживаться.
- Размеры [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Вес [VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient input, Размер строки, вес строки);
```

## Тепловая регистрация
- Регистрировать теплоспособность предмета и если этот предмет кузнечный (например, может быть использован в наковальне).
- Тепловая мощность определяет скорость охлаждения предмета. Кованый железо - 0,35.
- Температура плавления при температуре расплавляется. Кованое железо 1535 бриллиантовый белый в то время как бронза 950 оранжевый. Для получения полной информации обратитесь к [температурам отопления](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(IIngredient input, float heatCapacity, float meltTemp, ковка булавки);
```

## Зарегистрировать предмет Металл
- Зарегистрировать предмет как металлический предмет. Обратите внимание, что это автоматически добавляет возможность нагрева и форжинга. Если нельзя расплавить ложь, этот предмет не выдает напрямую (например, железной руде требуется цвет/доменная печь)
- Зарегистрированные металлические слитки не регистрируются автоматически в качестве входных данных для инструментов (например, стальной слиток из других модов, зарегистрированных методом registerMetalItem не будет автоматически срабатывать в голову кирки TFC сталь)
```zenscript
ItemRegistry.registerItemMetal(IIngredient input, String metal, int units, bool canMelt);
```

## Зарегистрировать еду
- Регистрировать данные о продукте питания (не работает на TFC едах), Это принимает приоритет по сравнению с существующими значениями. Параметр Decay на 0 останавливает процесс распада.
```zenscript
Регистрация ItemRegistry.registerFood(IIngredient input, int hunger, float water, float saturation, float decay, float grain, float veg, float fruit, float meat, float dairy);
```

## Регистрация брони
- Регистрация статистики брони
```zenscript
ItemRegistry.registerArmor(IIngredient input, float crushingModifier, float piercingModifier, float slashingModifier);
```

## Регистрация топлива
- Зарегистрировать предмет в качестве топлива для огненной ямы, ковки или цветения
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, float temperature, bool forgeFuel, bool bloomeryFuel);
```
