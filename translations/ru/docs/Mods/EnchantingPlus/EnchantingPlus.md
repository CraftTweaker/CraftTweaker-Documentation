# Зачарованный Плюс

[Зачаровательный плюс](https://minecraft.curseforge.com/projects/enchanting-plus) позволяет игрокам иметь больше контроля над чародейским опытом. Craftweaker может быть использован для применения определенных ограничений к этому шагу.

# Черный список элементов

Запрещает конкретному предмету входить в расширенную зачарованную таблицу.

```zenscript
// mods.eplus.Eplus.blacklistItem(предмет IItemStack);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Чёрные Чары

Предотвращает нанесение определённых чар за улучшенным чародейским столом.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchant(<enchantment:minecraft:protection>);
```