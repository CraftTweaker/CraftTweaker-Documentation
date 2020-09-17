# Миниблоки Утилиты

## Получить специальные мини-блоки

Это функция util для получения IIngredient для определенного MiniBlock, так что вы можете избежать странного NBT.

* Параметр типа задает "siing", "moulding" или "угол"
* parentBlock - это блок, с которого также работает мини-блок текстуры, потому что этот parentBlock является IIngredient вещи, такие как oredictionary работает.

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String тип, IIngredient parentBlock)


//Пример
//Возвращает все стороны, на которых есть база досок
mods.betterwithmods.MiniBlocks.getMiniBlock("siding", <ore:plankWood>);
```