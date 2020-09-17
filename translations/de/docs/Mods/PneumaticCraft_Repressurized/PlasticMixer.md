# Kunststoff-Mixer

Der Kunststoff-Mixer ist eine Maschine mit zwei Funktionen:

* Zur Verfestigung der Flüssigkeit aus flüssigem Kunststoff zu festen Kunststoffplatten mit roten, grünen und blauen Farben, um die Platten einzufärben.
* Zur Schmelzung von massiven Kunststoffplatten zu flüssigem Kunststoff. Dies erfordert eine minimale Temperatur von 150°C (423K).

Die Unterstützung von CraftTweaker fügt die Möglichkeit hinzu, beliebige Gegenstände und Flüssigkeitskombinationen zum Schmelzen und/oder Verfestigen zu spezifizieren. Es ist möglich zu spezifizieren, dass Gegenstände nur geschmolzen werden sollen, Flüssigkeiten nur verfestigt werden oder einen zweiseitigen Prozess zulassen.

Während das Ziel der Erstarrung irgendein Element sein kann, ist es am sinnvollsten, hier kolossale Gegenstände zu verwenden da Farbstoffe immer verwendet werden, unabhängig davon, ob das Ausgabeelement farblich ist oder nicht.

## Anruf

Sie können das Kunststoff-Mixer-Paket mit `mods.pneumaticcraft.plasticmixer` aufrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept mit dem angegebenen [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `Input`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack Fluid);
// Beispiel
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Diese Funktion entfernt *alle* Rezepte für Kunststoffmischer:

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Hinzufügen

Die folgenden Funktionen können verwendet werden, um Rezepte zum TPP hinzuzufügen:

```zenscript
// Fügen Sie ein zweiseitiges Rezept (Temperatur in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack stack, int temperature);

// Fügen Sie ein Rezept hinzu, das nur
mods.pneumaticcraft.plasticmixer erlaubt. ddSolidifyOnlyRecipe(ILiquidStack liquidInput, IItemStack itemOutput);

// Ein Rezept hinzufügen, das nur schmelzen kann (Temperatur in Kelvin)
mods.pneumaticcraft.plasticmixer. ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Beispiel: Konvertieren 100mB Lava zu/aus Beton (Schmelze bei 573K)
Mods. neumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Beispiel: 2000 mB Öl in Kunststoff umwandeln (aber es darf nicht geschmolzen werden)
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Beispiel: bei 473K Plastik in 100mB Öl umwandeln (aber keine Festkörper)
Mods. neumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```