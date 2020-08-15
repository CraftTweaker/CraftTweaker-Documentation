# Gestore Di Ricette Di Allevamento

## Accedi al gestore di birra

È possibile accedere al gestore di birra utilizzando la parola chiave globale `birra` [](/Vanilla/Global_Functions/).

## Metodi Di Ricetta

Una ricetta di birra è composta da 3 parti:

1. Un ingresso (Che cosa è nelle 3 "Fessure della Bottiglia")
2. Uno o più ingredienti possibili (Che cosa può andare nello slot superiore dove netherwart vai)
3. L'output (Che cosa restituisce la ricetta)

### Aggiungi Ricette Di Allevamento

```zenscript
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Optional boolean hidden);
birwing. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing. ddBrew(IIngredient input, IIngredient[] ingredienti, IItemStack output, @Optional boolean hidden);
birra. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
birwing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### Rimuovere Le Ricette Di Brewing

Funziona solo con JEI versione 4.15.0.275 o superiore.

```zenscript
//brewing.removeRecipe(IItemStack input, IItemStack ingredient);
brewing.removeRecipe(<minecraft:potion>.withTag({Pozione: "minecraft:water"}), <minecraft:gunpowder>);
```