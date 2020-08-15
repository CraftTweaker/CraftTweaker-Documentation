# Пивоварение Ботании

Пивоваренная упаковка используется для добавления или удаления рецептов пива Ботании.

## Звонок

Вы можете вызвать пакет пива, используя `mods.botania.Brew`

## Названия пива

Чтобы использовать этот пакет, вам нужно знать зарегистрированные названия пива ботаны.  
Их можно найти с помощью [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Добавление рецепта

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] input, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Удаление рецепта

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```