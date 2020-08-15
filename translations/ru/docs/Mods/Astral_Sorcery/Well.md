# Лайтвелл

Вы можете добавить и удалить Lightwell Liquets

## Звонок

Вы можете вызвать пакет WellRecipe, используя `mods.astralsorcery.Lightwell`.

## Удаление

Эта функция удаляет первый рецепт, который находит, что возвращает предоставленный [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `output` используя предоставленный [IItemStack](/Vanilla/Items/IItemStack/) `входной`. Если есть несколько рецептов, которые возвращают полученный результат, вам нужно вызвать этот метод несколько раз!

Вы можете установить вывод в `null` на поиск только по стеку ввода

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Сложение

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Параметр         | Тип параметра                                  | Описание                                                                                                                                                                               |
| ---------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input            | [IItemStack](/Vanilla/Items/IItemStack/)       | Введенный элемент                                                                                                                                                                      |
| вывод            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Возвращенный Liquid. Только тип жидкости рассчитывает, количество будет (как лампа по умолчанию) зависеть от таких вещей, как день/ночь и так далее…                                   |
| outputMultiplier | float                                          | Множитель, применяемый вместе с собранным звёздочкой для расчета выходного количества жидкости. Обычно 0.3 - 1.2 (так: не пишите как 200 здесь, если вы хотите остаться в разумных :P) |
| Множитель ударов | float                                          | Чем выше этот множитель, тем меньше шанс, что предметы из катализатора будут разрушаться.                                                                                              |
| colorHEX         | int                                            | Цветовой код, используемый для частиц вокруг наведенного элемента.                                                                                                                     |