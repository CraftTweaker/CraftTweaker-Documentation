# Обработчики брекетов

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.BracketHandlers
```

## Методы
### getBlockMaterial

Получает данные [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial). Бросает исключение, если не найдено.

 Возврат: `Найдено [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

Тип возврата: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Параметр | Тип    | Описание                                 |
| -------- | ------ | ---------------------------------------- |
| жетоны   | String | То, что вы можете написать в BEP вызове. |


### getBlockState

Создает Blockstate на основе заданных значений. Возвращает `null` , если он не может найти блок, игнорируются недопустимые варианты

 Возврат: `Найденный BlockState`

Тип возврата: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Параметр | Тип    | Описание                              |
| -------- | ------ | ------------------------------------- |
| жетоны   | String | Расположение и варианты ресурса блока |


### getDirectionAxis

Получает ось направления по имени. Бросает ошибку, если она не может найти ось направления.

 Возвращается: `Ось найденного направления`

Тип возврата: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Параметр | Тип    | Описание                               |
| -------- | ------ | -------------------------------------- |
| жетоны   | String | Расположение ресурса в направлении оси |


### получить эффект

Получает эффект, основанный на имени реестра. Бросает ошибку, если она не может найти эффект.

 Возвращается: `найденный эффект`

Тип возврата: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Параметр | Тип    | Описание                      |
| -------- | ------ | ----------------------------- |
| жетоны   | String | Расположение ресурсов эффекта |


### getEntityClassification

Возвращает entityClassification на основе имени реестра. Регистрирует ошибку и возвращает `null` , если он не может найти entityClassification.

 Возвращается: `Найденная сущность классификации`

Тип возврата: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Параметр | Тип    | Описание                       |
| -------- | ------ | ------------------------------ |
| жетоны   | String | Расположение ресурсов сущности |


### getEntityType

Получает entityType на основе имени реестра. Регистрирует ошибку и возвращает `null` , если он не может найти entityType.

 Возвращается: `Найденный entityType`

Тип возврата: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Параметр | Тип    | Описание                            |
| -------- | ------ | ----------------------------------- |
| жетоны   | String | Расположение ресурсов типа сущности |


### getFluidStack

Получает жидкий стек на основе имени реестра. Бросает ошибку, если она не может найти жидкость.

 Возвращается: `Стек жидкости с количеством == 1 мб`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Параметр | Тип    | Описание                    |
| -------- | ------ | --------------------------- |
| жетоны   | String | Расположение ресурсов Fluid |


### getItem

Получает элемент на основе имени реестра. Бросает ошибку, если она не может найти элемент.

 Возвращается: `Найденный элемент`

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokens as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| жетоны   | String | Расположение ресурса |


### getЗелье

Тип возврата: [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| жетоны   | String | Описание отсутствует |


### getRecipeManager

Получает recipeManager на основе имени реестра. Бросает ошибку, если он не может найти рецепт-менеджера. Бросает экспансию, если указанный рецепт не найден. <p> IRecipeManager всегда будет возвращен.<br> Есть также НПД для этого, но это работает иначе, поэтому он не может быть автоматически добавлен в документацию здесь. Но BEP выглядит таким же, как и другие проекты: `<recipetype:minecraft:crafting>`

 Возвращается: `найденный рецепт`

Тип возврата: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Параметр | Тип    | Описание                      |
| -------- | ------ | ----------------------------- |
| жетоны   | String | Расположение ресурсов рецепта |


### Местоположение getResourceLocation

Создает местоположение ресурсов на основе токенов. Бросает ошибку, если токены не являются допустимым местоположением.

 Возвращается: `Местоположение`

Тип возврата: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokens as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| жетоны   | String | Расположение ресурса |


### getTag

Получает тег на основе имени реестра. Создаст пустой тег, если ничего не найдено.<br> Однако, в этом случае вам нужно зарегистрировать тэг как соответствующий тип

 Возвращается: `Найденный тег, или только что созданный`

Тип возврата: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| жетоны   | String | Расположение ресурса тега |


### getTextFormatting

Тип возврата: [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokens as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| жетоны   | String | Описание отсутствует |



