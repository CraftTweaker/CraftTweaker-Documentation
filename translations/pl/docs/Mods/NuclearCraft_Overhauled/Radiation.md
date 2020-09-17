# Promieniowanie

## Promieniujący Scruber

### Importowanie pakietu
`mods.nuclearcraft.RadiationScrubber`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, podwójna wydajność procesora);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IInputIInInententy Przedmiotu, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();
```

## Mutacja bloku

### Importowanie pakietu
`mods.nuclearcraft.RadiationBlockMutation`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IInput - Blockdient blockInput, IIngredient blockOutput, podwójny radiationThreshold);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(BlockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockMutation.removeAllRecipes();
```

## Oczyszczenie bloku

### Importowanie pakietu
`mods.nuclearcraft.RadiationBlockOczyszczanie`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(BlockInput (IIngredient blockInput, IIngredient blockOutput, podwójny radiationThreshold);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(BlockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(BlockOutOutput);
mods.nuclearcraft.RadiationBlockPurification.removeAllRecipes();
```

## Promieniowanie encji

### Promieniowanie
`amount` is the amount of radiation added to the `IEntityLivingBase`. `Immunicja` kontroluje czy funkcja występuje nawet `IEntityLivingBase` jest immunologiczna.
```zenscript
IEntityLivingBase::addRadiation(double amount, @Optional boolean Immunity);
IEntityLivingBase::setRadiation(double amount, @Optional Boolean Immunity);
IEntityLivingBase::getRadiation();
```

### Bufor Radaway
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `powolny bufor` decyduje, czy dodany bufor Radaway jest powolnym buforem.
```zenscript
IEntityLivingBase::addRadawayBuffer(podwójna kwota, @Opcjonalny boolean powolBuffer);
IEntityLivingBase::setRadawayBuffer(podwójna kwota, @Opcjonalny boolean powolBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Uwaga: Jeśli `powoli Buffer` jest `tru`, `getRadawayBuffer()` zwróci powoli działający bufor usuwający promieniowanie zamiast normalnego.**

### Trucizna
`amount` is the amount of Trison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(podwójna kwota);
IEntityLivingBase::setPoisonBuffer(podwójna kwota);
IEntityLivingBase::getPoisonBuffer();
```

### Odporność na promieniowanie
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addRadiationResistance(podwójna kwota);
IEntityLivingBase::setRadiationResistance(podwójna kwota);
IEntityLivingBase::getRadiationResistance();
```

### Getery poziomu promieniowania

#### Surowy poziom promieniowania
Ta metoda zwraca promieniowanie `IEntityLivingBase` w radach.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Poziom promieniowania
Ta metoda zwraca zmianę poziomu promieniowania `IEntityLivingBase` w radach/ticku.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Promieniowanie
Ta metoda dostaje promieniowanie `ISkładnika` w radach/ticku.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel(ISkładniki ElementówInput);
```

## Odporność na promieniowanie
Metoda ta daje możliwość kontrolowania odporności graczy w zależności od etapu. `domyślna odporność` to wartość logiczna określająca odporność graczy bez określonych etapów. `stageNames` jest tablicą nazw wszystkich etapów, które mogą przełączać odporność graczy.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(domyślna odporność boolowa, struing[] stageNames);
```