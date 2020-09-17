# XP Fluids

Испытательные флюиды используются в PneumaticCraft: Repressurized by the Aerial Interface, a powerful block which can remotely interface with the linked player. Опыт жидкостей, перекатываемых в аэроинтерфейс, преобразуется в уровни опыта игроков, а XP Fluids выкатываются из опыта игрока.

По умолчанию следующие жидкости распознаются Аэровым интерфейсом:

* XP Juice (EnderIO, Cyclic, Openblocks)
* Эссенция знаний (тепловое расширение)
* Эссенция моба (Промышленное прогнозирование)

Этот пакет позволяет использовать другие произвольные жидкости в Aerial Interface в качестве XP жидкостей, или дерегистрацию существующих XP жидкостей.

## Звонок

Вы можете вызвать пакет Fluids с помощью `mods.pneumaticcraft.xpfluid`.

## Удаление

Эта функция дерегистрирует [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluid`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Пример
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Эта функция дерегистрирует *все* известные XP жидкости:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Добавление

Эта функция может использоваться для регистрации жидкостей в качестве XP жидкости:

```zenscript
// Регистрируем жидкость в виде XP . xpRatio определяет количество XP игрока на миллиметр жидкости.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack fluid, double ratio);

// Пример: зарегистрировать LPG как XP жидкости стоимостью 10 XP за мБ
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```