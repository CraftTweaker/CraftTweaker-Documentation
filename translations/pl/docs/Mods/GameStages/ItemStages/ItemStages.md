# Etapy Produktu

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy przedmiotów umożliwiają dostęp dla przedmiotów i bloków do niestandardowego systemu progresji ustawionego przez twórcę paczki modów. Jeśli gracz nie ma wymaganego etapu, gracz będzie miał problem z użyciem przedmiotu. Aby dowiedzieć się więcej o tym, jak to robi, sprawdź stronę modów [tutaj](https://minecraft.curseforge.com/projects/item-stages)

## Ustawianie przedmiotu

Aby element był ograniczony z tym modem, musi być powiązany z sceną. Można to zrobić na kilka różnych sposobów.

```zenscript
// Etapy pojedynczego bloku lub elementu. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// Etapy przedmiotu z częściowym NBT. Na przykład na tym etapie wszystkie książki zaklęć LV 5.
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));

// Etapy wszystkich przedmiotów ze słownikiem rudy.
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// Etapy wszystkie elementy, które są dodawane przez konkretny mod.
mods.ItemStages.stageModItems("stage_name", "modid");

// Usuwa etap z określonego przedmiotu, przydatny w połączeniu ze stageModItems("stage_name", "modid"), aby zmniejszyć rozmiar skryptu.
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## Łączenie płynów

Pacjent może chcieć scedować ciecze, jest to przede wszystkim zrobione aby ukryć je w JEI.

```zenscript
// Etapuje pojedynczy płyn, jak woda.
mods.ItemStages.stageLiquid ("stage_name", <liquid:water>);
```

## Zaklęcia testowe

Możesz scenić zaklęcia, aby uniemożliwić graczom używanie przedmiotów, które mają na nich zaklęcie.

```zenscript
// Etapy określonego zaklęcia. W takim przypadku ochrona.
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// Etapy konkretnego zaklęcia, na określonym poziomie. W tym przypadku ochrona II.
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## Zmiana nazwy nieznanego przedmiotu.

Możesz nadać swoim produktom zastrzeżonym nową nazwę, gdy są ukryte. To może być użyte do dodawania żartów i podpórki do paczki.

```zenscript
// Ustawia całą wełnę jako "Chłopę Furii" dla graczy, którzy nie mają właściwego etapu.
mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
```

## Przygotowanie podpowiedzi

Możesz scedować części podpowiedzi aby ukryć informacje. Jest to szczególnie przydatne podczas próby scedowania modyfikacji takich jak Projekt E, które dodają podpowiedź "EMC:" do większości elementów.

```zenscript
// Usuwa dowolną linię w podpowiedzi, która zaczyna się od "EMC:"
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## Etapowanie kategorii Przepisów

Możesz scenić dostęp do całej kategorii przepisów z JEI. Na przykład, jeśli scedujesz kategorię pieca, a gracz nie ma sceny, nie będą mogli zobaczyć przepisów dotyczących pieca.

```zenscript
// Etapy konkretnej kategorii receptury. W tym przykładzie stajemy w kategorii kowadła.
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```