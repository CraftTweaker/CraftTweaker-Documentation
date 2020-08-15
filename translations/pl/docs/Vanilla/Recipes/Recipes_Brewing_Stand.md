# Obsługa przepisów do picia

## Uzyskaj dostęp do uchwytu browarnego

Możesz uzyskać dostęp do obsługi Brewing Handler używając `warzenia` [globalnego słowa kluczowego](/Vanilla/Global_Functions/).

## Metody przepisów

Przepis na piwo składa się z 3 części:

1. Wejście (What znajduje się w 3 "Miejsca Butelki")
2. Jeden lub więcej możliwych składników (haczyk może wejść w górną część szczeliny, na której się znajduje)
3. Wyjście (What zwraca przepis)

### Dodaj przepisy dotyczące picia

```zenscript
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Opcjonalny boolean hidden);
brewing. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing. ddBrew(IIngredient input, IIngredient[] składniki, IItemStack output, @Opcjonalny boolean hidden);
browarnie. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### Usuń przepisy piwowarskie

Działa tylko z JEI w wersji 4.15.0.275 lub wyższej.

```zenscript
//brewing.removeRecipe(IItemStack, składnik IItemStack);
brewing.removeRecipe(<minecraft:potion>.withTag({Mition: "minecraft:water"}), <minecraft:gunpowder>);
```