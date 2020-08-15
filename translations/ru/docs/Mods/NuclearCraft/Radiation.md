# Радиация
**Примечание: Двойной набор скобок `([...])` не требуется здесь!**

## Радиация
Этот метод получает излучение `IIngredient` в радах/тике.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(«радиационный уровень»)
```
## Мутации блока
Этот метод добавляет мутацию блока. Блок не будет мутировать, когда радиация ниже `радиационного порога`.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, двойное радиационное излучениеThreshold);
```

## Радиационная иммунитет
Этот метод дает возможность контролировать иммунитет игроков в зависимости от стадии. `по умолчанию` является логическим символом, указывающим иммунитет игроков без указанных стадий. `stageNames` представляет собой массив имен всех этапов, которые могут переключать иммунитет игроков.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Радиационные Полутчики/Сетчики

### Добавление радиации
`сумма` - это количество радиации, добавленной в `IEntityLivingBase`. `useImmunity` контролирует возникновение функции даже `IEntityLivingBase` иммунитет.
```zenscript
IEntityLivingBase.addRadiation(двойная сумма, @Optional boolean useImmunity);
```

### Настройка излучения
`значение` — это уровень радиации, применяемый к `IEntityLivingBase`. `useImmunity` контролирует возникновение функции даже `IEntityLivingBase` иммунитет.
```zenscript
IEntityLivingBase.setRadiation(двойная сумма, @Optional boolean useImmunity);
```

### Получение Радиации
Этот метод возвращает уровень радиации `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Получатели буфера радаута

### Добавление буфера Радаута
`сумма` - это количество буфера, добавленное в `IEntityLivingBase`. `slowBuffer` решит, если добавленный Radaway буфер является медленным буфером.
```zenscript
IEntityLivingBase.addRadiationResistance(двойная сумма, @Optional boolean slowBuffer);
```
### Установка буфера Радаута
`сумма` - это количество буфера Радаута, которое применяется к `IEntityLivingBase`. `slowBuffer` решит, если добавленный Radaway буфер является медленным буфером.
```zenscript
IEntityLivingBase.setRadiationResistance(двойная сумма, @Optional boolean slowBuffer);
```

### Получение буфера Радау
Этот метод возвращает буфер Radaway `IEntityLivingBase`. `slowBuffer` определяет, включен ли медленный буфер в возвращаемое значение.
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## Ядовитые Геттеры/Наборы

### Добавление буфера яда
`сумма` - это количество ядовитых буферов в `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addPoisonBuffer(двойная сумма);
```
### Настройка буфера яда
`сумма` - это количество ядовитого буфера, которое применяется к `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setPoisonBuffer(двойная сумма);
```

### Получение яда буфера
Этот метод возвращает яд буфер `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Получатели / Сетчики сопротивления радиации
### Сопротивление добавлению радиации
`сумма` - количество сопротивления радиации, добавленное к `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addRadawayBuffer(двойная сумма);
```
## Установка сопротивления радиации
`сумма` — это количество сопротивления радиации, которое применяется к `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setRadawayBuffer(двойная сумма);
```

## Получение сопротивления радиации
Этот метод возвращает сопротивление радиации `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Получатели уровня радиации

### Сырье Радиации
Этот метод возвращает излучение `IEntityLivingBase` в радарах.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Уровень Радиации
Этот метод возвращает изменение уровня излучения `IEntityLivingBase` в радах/тике.
```zenscript
IEntityLivingBase.getRadiationLevel();
```