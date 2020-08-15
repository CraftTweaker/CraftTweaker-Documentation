# Радиация

## Радиационный скреббер

### Импортирование пакета
`mods.nuclearcraft.Радиационный скреббер`

### Добавление рецептов
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IInput Ingredient, ILiquidStack fluidInput, IIngredient itemput, ILiquidStack fluidOutput, int processing, int processPower, double processEfficience);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();
```

## Мутация блока

### Импортирование пакета
`mods.nuclearcraft.Радиационное Мутация`

### Добавление рецептов
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, двойное излучениеПорог);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(Ingredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockMutation.removeAllRecipes();
```

## Обработка блока

### Импортирование пакета
`mods.nuclearcraft.РадиацияBlockPurification`

### Добавление рецептов
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, двойное излучениеThreshold);
```

### Удаление рецептов
```zenscript
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(Ingredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockPurification.removeAllRecipes();
```

## Радиация субъектов

### Радиация
`сумма` - это количество радиации, добавленной в `IEntityLivingBase`. `useImmunity` контролирует возникновение функции даже `IEntityLivingBase` иммунитет.
```zenscript
IEntityLivingBase::addRadiation(двойная сумма, @Optional boolean useImmunity);
IEntityLivingBase::setRadiation(двойная сумма, @Optional boolean useImmunity);
IEntityLivingBase::getRadiation();
```

### Буфер Радаута
`сумма` - это количество буфера, добавленное в `IEntityLivingBase`. `slowBuffer` решит, если добавленный Radaway буфер является медленным буфером.
```zenscript
IEntityLivingBase::addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Примечание: Если `slowBuffer` является `true`, `getRadawayBuffer()` возвращает буфер медленного удаления радиации вместо обычного буфера.**

### Яд
`сумма` - это количество ядовитых буферов в `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(двойная сумма);
IEntityLivingBase::setPoisonBuffer(двойная сумма);
IEntityLivingBase::getPoisonBuffer();
```

### Сопротивление радиации
`сумма` - количество сопротивления радиации, добавленное к `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addRadiationResistance(двойная сумма);
IEntityLivingBase::setRadiationResistance(двойная сумма);
IEntityLivingBase::getRadiationResistance();
```

### Получатели уровня радиации

#### Сырье Радиации
Этот метод возвращает излучение `IEntityLivingBase` в радарах.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Уровень Радиации
Этот метод возвращает изменение уровня излучения `IEntityLivingBase` в радах/тике.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Радиация
Этот метод получает излучение `IIngredient` в радах/тике.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel(IIngredient item);
```

## Радиационная иммунитет
Этот метод дает возможность контролировать иммунитет игроков в зависимости от стадии. `по умолчанию` является логическим символом, указывающим иммунитет игроков без указанных стадий. `stageNames` представляет собой массив имен всех этапов, которые могут переключать иммунитет игроков.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```