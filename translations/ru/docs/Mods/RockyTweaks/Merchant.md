# Торговец

## Команды

Следующие команды добавляются для получения информации о доступных профессиях торговца & переносов:

- `/ct профессии торговца` - выводит журнал действительных профессий торговца
- `/ct мерчант карьеры [profession]` - выводит журнал действительных карьеры для всех или указанной профессии

## Пакет

`Торговец mods.rockytweaks.Merchant`

## Сложение

Сделки могут быть добавлены к определенной профессии торговца & коррем.

```zenscript
// addTrade(String profession, String career, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Удаление

Удаление торговых операций в настоящее время невозможно.
