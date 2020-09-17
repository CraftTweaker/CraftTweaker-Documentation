# Минеральная смесь

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение массива). Так что лучше быть безопасным, чем извините и добавьте импорт `import mods.immersiveengineering.MineralMix;`.

## Неудачный шанс

Вы можете получить и установить вероятность неудачи для Mineralmix с помощью шанса сбоя [ZenSetter/Getter] на объекте.

## Получить минерал

| Требуется | Тип      | Тип данных |
| --------- | -------- | ---------- |
| Требуется | Название | string     |

```zenscript
//Пример:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## Добавить руду

| Требуется | Тип  | Тип данных |
| --------- | ---- | ---------- |
| Требуется | Руда | string     |
| Требуется | Шанс | string     |

```zenscript
mineralMixObject.addOre("Рудная железа", 0.5);
```

Вам нужно будет использовать имена oredict.

## Удалить руду

| Требуется | Тип  | Тип данных |
| --------- | ---- | ---------- |
| Требуется | Руда | string     |

```zenscript
mineralMixObject.removeOre("Защита");
```

## Неудачный Получатель/Установщик

### Пример

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## Полный пример

```zenscript
//Пример:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Получить Минеральный Микс
mods.immersiveengineering. xcavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("Iron", 0. );

//Печатайте Первоначальный шанс на хвост
(Iron.failChance);

//Шанс на хвост 25%
Железо. ailChance = 0.25;

//Распечатать шанс Fail
принт (железо. ailChance);

//Настройте шанс на хвост на 50%
железа.неудача = 0.5;

//Распечатать финальный шанс на хвост
печатайте (Iron.failChance);
```