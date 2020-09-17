# Artikelstufen

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Itemstufen ermöglichen den Zugriff auf Gegenstände und Blöcke, die von dem Modpack-Ersteller in ein individuelles Progressionssystem gelegt werden. Wenn ein Spieler nicht die erforderliche Bühne hat, wird der Spieler Probleme mit der Benutzung des Gegenstands haben. Um mehr darüber zu erfahren, schaue dir die Mod-Seite [hier an](https://minecraft.curseforge.com/projects/item-stages)

## Staging eines Elements

Damit ein Element mit diesem Mod eingeschränkt werden kann, muss es mit einer Bühne verbunden sein. Das kann auf verschiedene Weise geschehen.

```zenscript
// Stuft einen einzelnen Block oder ein Element. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// Stationen mit teilweisem NBT. Zum Beispiel in dieser Phase alle LV 5 Verzauberungsbücher.
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));

// Stage alle Elemente mit einem Erzwörterbuch-Tag.
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// Stagiert alle Elemente, die von einem bestimmten Mod hinzugefügt werden.
mods.ItemStages.stageModItems("stage_name", "modid");

// Entfernt eine Stufe von einem bestimmten Element, nützlich bei gepaart mit stageModItems, um die Skriptgröße zu reduzieren.
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## Staging-Flüssigkeiten

Vielleicht möchten Sie Flüssigkeiten inszenieren, dies wird in erster Linie getan, um sie in JEI zu verstecken.

```zenscript
// Stuft eine einzelne Flüssigkeit wie Wasser.
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## Staging-Verzauberungen

Du kannst Verzauberungen inszenieren, um zu verhindern, dass Spieler Gegenstände verwenden, die die Verzauberung auf ihnen haben.

```zenscript
// Stationiert eine bestimmte Verzauberung. In diesem Fall Schutz.
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// Eine bestimmte Verzauberung auf einer bestimmten Ebene. In diesem Fall Schutz II.
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## Ändern des unbekannten Item-Namens.

Möglicherweise möchten Sie Ihren beschränkten Elementen einen neuen Namen geben, solange sie versteckt sind. Dies kann verwendet werden, um Witze und subtile Geschichte zu deinem Paket hinzuzufügen.

```zenscript
// Setzt alle Wolle auf "Clump of Fur" für Spieler, die nicht die richtige Bühne haben.
mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
```

## Tooltip inszenieren

Sie können Teile von Tooltips in Szene setzen, um Informationen zu verstecken. Dies ist besonders nützlich, wenn man versucht, Mods wie Project E zu inszenieren, die einen "EMC:" Tooltip zu den meisten Elementen hinzufügen.

```zenscript
// Entfernt jede Zeile in einem Tooltip die mit "EMC:" beginnt
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## Eine Rezeptkategorie planen

Sie können mit JEI auf eine komplette Rezeptkategorie zugreifen. Wenn Sie zum Beispiel die Ofenkategorie inszenieren und ein Spieler nicht die Bühne hat, werden sie keine Ofenrezepte sehen können.

```zenscript
// Stuft eine bestimmte Rezeptkategorie auf. In diesem Beispiel stellen wir die Amboss-Kategorie vor.
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```