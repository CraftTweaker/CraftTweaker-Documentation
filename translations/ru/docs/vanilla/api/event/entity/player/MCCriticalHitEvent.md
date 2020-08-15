# MCCriticalHitEvent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Конструкторы
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(обработчик функции.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Параметр | Тип                                                                                                                               | Описание             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| handler  | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Описание отсутствует |



## Методы
### getDamageModifier

Модификатор урона для удара.<br> Это по умолчанию 1.5F для ударов по кругу и 1F для обычных хитов.

Возвращает с плавающей точкой

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

Модификатор повреждений для ударов по вертикали.<br> Это 1.5F для ударов по кругу и 1F для обычных ударов.

Возвращает с плавающей точкой

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Возвращение: `Игрок`

Возвращает [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### имеет Результат

Определяет, ожидает ли это событие значимое значение результата. Примечание: События с аннотацией HasResult будут автоматически добавлены для возврата true.

Возвращает boolean

```zenscript
myMCCriticalHitEvent.hasResult();
```

### неотменяемый

Определите, если эта функция вообще недоступна. Возвращается: `Если доступ к установленной отмене должен быть разрешен
 Примечание:
 События с отменяемой аннотацией будут иметь этот метод автоматически добавлены для возврата истины.`

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### отменено

Определяет, отменено ли это событие и должно прекратить выполнение. Возвращение: `Текущее состояние отменено`

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Возвращает значение истины, если этот удар критичен ванильной

Возвращает boolean

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### установка отменена

```zenscript
myMCCriticalHitEvent.setCanceled(отменить как boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| отменить | boolean | Описание отсутствует |


### Модификатор Урона

Это задает мультипликатор урона для попадания. Если вы установите его в 0, то частицы все еще генерируются, но повреждение не сделано.

```zenscript
myMCCriticalHitEvent.setDamageModifier(мод как float);
```

| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| mod      | float | Описание отсутствует |



