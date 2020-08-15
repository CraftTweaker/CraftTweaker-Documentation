# Kawałek

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Głębokość
```

## Dodanie

```zenscript
Loom.addRecipe(String registryName, IIngredient Input, IItemStack output, steps, String loomTexture);
```
- kroki to liczba kroków potrzebnych do dokończenia przepisu. To ile razy gracz musi kliknąć na pętlę, każdy ruch pętli posuwa się o jeden krok. W ramach TFC jest to takie samo jak liczba elementów wymaganych do przepisu, ale nie jest to wymagane.
- loomTexture to ścieżka (`ResourceLocation`) do pliku tekstury, która ma być użyta do wyświetlania na loom na świecie. Na przykład "minecraft:textures/blocks/wool_colored_white.png" odwołuje się do tekstury waniliowej dla białej wełny). Jeśli używasz niestandardowych tekstur, potrzebujesz jakiejś formy wczytywania danych/zasobów (przeczytaj pakiet zasobów), aby móc poprawnie odnieść się do twojej tekstury.

## Usuwanie

```zenscript
Loom.removeRecipe(wyjście IItemStack);
Loom.removeRecipe(String registryName);
```

## Przykład
```zenscript
Loom.addRecipe("burlap_odzież", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```