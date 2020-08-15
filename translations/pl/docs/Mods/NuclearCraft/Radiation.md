# Promieniowanie
**Uwaga: Podwójny zestaw nawiasów `([...])` nie jest wymagany tutaj!**

## Promieniowanie
Ta metoda dostaje promieniowanie `ISkładnika` w radach/ticku.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Blokuj mutacje
Ta metoda dodaje mutację blokową. Blok nie będzie mutowany, gdy promieniowanie będzie poniżej `radiationThreshold`.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, podwójny radiationThreshold);
```

## Odporność na promieniowanie
Metoda ta daje możliwość kontrolowania odporności graczy w zależności od etapu. `domyślna odporność` to wartość logiczna określająca odporność graczy bez określonych etapów. `stageNames` jest tablicą nazw wszystkich etapów, które mogą przełączać odporność graczy.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(domyślna odporność boolean, string[] stageNames);
```

## Ścieżki/Ustawienia promieniowania

### Dodawanie promieniowania
`amount` is the amount of radiation added to the `IEntityLivingBase`. `Immunicja` kontroluje czy funkcja występuje nawet `IEntityLivingBase` jest immunologiczna.
```zenscript
IEntityLivingBase.addRadiation(podwójna kwota, @Opcjonalna odporność logiczna);
```

### Ustawienie promieniowania
`amount` is the level of radiation that is applied to the `IEntityLivingBase`. `Immunicja` kontroluje czy funkcja występuje nawet `IEntityLivingBase` jest immunologiczna.
```zenscript
IEntityLivingBase.setRadiation(podwójna kwota, @Opcjonalna odporność logiczna);
```

### Otrzymywanie promieniowania
Ta metoda zwraca poziom promieniowania `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Gettery/ustawienia buforów Radaway

### Dodawanie bufora Radaway
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `powolny bufor` decyduje, czy dodany bufor Radaway jest powolnym buforem.
```zenscript
IEntityLivingBase.addRadiationResistance(podwójna kwota, @Opcjonalny boolean powolBuffer);
```
### Ustawianie buforu Radaway
`amount` is the amount of Radaway Buffer that is applied to the `IEntityLivingBase`. `powolny bufor` decyduje, czy dodany bufor Radaway jest powolnym buforem.
```zenscript
IEntityLivingBase.setRadiationResistance(podwójna kwota, @Opcjonalny boolean powolBuffer);
```

### Otrzymywanie bufora Radaway
Ta metoda zwraca bufor Radaway `IEntityLivingBase`. `spowalnia bufor` określa, czy powolny bufor jest zawarty w zwróconej wartości.
```zenscript
IEntityLivingBase.getRadiationResistance(@Opcjonalny boolean powolBuffer);
```

## Ustawienia buforów trucizny

### Dodawanie bufora trucizny
`amount` is the amount of Trison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addPoisonBuffer(kwota podwójna);
```
### Ustawienie buforu trucizny
`amount` is the amount of Trison Buffer that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setPoisonBuffer(kwota podwójna);
```

### Uzyskiwanie Buforu Trucizny
Ta metoda zwraca Bufor Trucizny `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Gettery/Ustawienia Odporności na Promieniowanie
### Dodawanie odporności na promieniowanie
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addRadawayBuffer(kwota podwójna);
```
## Ustawienie odporności na promieniowanie
`amount` is the amount of Radiation Resistance that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setRadawayBuffer(kwota podwójna);
```

## Odporność na promieniowanie
Ta metoda zwraca Odporność na promieniowanie `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Getery poziomu promieniowania

### Surowy poziom promieniowania
Ta metoda zwraca promieniowanie `IEntityLivingBase` w radach.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Poziom promieniowania
Ta metoda zwraca zmianę poziomu promieniowania `IEntityLivingBase` w radach/ticku.
```zenscript
IEntityLivingBase.getRadiationLevel();
```