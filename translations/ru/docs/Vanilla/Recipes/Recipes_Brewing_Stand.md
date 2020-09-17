# Пивоваренный Рецепт

## Получите доступ к пивоваренному хозяйству

Вы можете получить доступ к Пивоваренному Обработчику с помощью `пивоварня` [глобального ключевого слова](/Vanilla/Global_Functions/).

## Методы рецепта

Зеленый Рецепт состоит из 3 частей:

1. Вход (что находится в 3 "Бутылочные слоты")
2. Один или несколько возможных ингредиентов (что может пойти в верхний слот где уходит Нервард)
3. Результат (возвращается рецепт)

### Добавить Рецепты Пива

```zenscript
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Optional boolean hidden);
brewing. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//пивование. ddBrew(IIngredient input, IIngredient[] ingredients, IItemStack, @Optional boolean hidden);
brewing. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### Удалить рецепты Пива

Работает только с JEI версией 4.15.0.275 или выше.

```zenscript
//brewing.removeRecipe(IItemStack input, IItemStack);
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```