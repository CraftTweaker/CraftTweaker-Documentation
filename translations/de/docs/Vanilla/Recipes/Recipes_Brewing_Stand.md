# Braurezept Handler

## Zugriff auf den Brau-Handler

You can access the Brewing Handler using the `brewing` [global keyword](/Vanilla/Global_Functions/).

## Rezept-Methoden

Ein Braurezept besteht aus 3 Teilen:

1. Eine Eingabe (Was ist in den 3 "Flaschenautomaten")
2. Eine oder mehrere mögliche Zutaten (Was kann in den oberen Slot gehen, wohin die Netherwarte geht)
3. Die Ausgabe (was das Rezept zurückgibt)

### Braurezepte hinzufügen

```zenscript
//brewing.addBrew(IIngredient Eingabe, IIngredient Zutat, IItemStack Ausgabe, @Optional boolesche versteck);
Brauen. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brauen. ddBrew(IIngredient Input, IIngredient[] Zutaten, IItemStack Output, @Optional boolean hidden);
Brauen. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, wahr);
```

### Braurezepte entfernen

Funktioniert nur mit JEI Version 4.15.0.275 oder höher.

```zenscript
//brewing.removeRecipe(IItemStack Eingabe, IItemStack Zutat);
brauen.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```