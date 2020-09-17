# Botanische Brauerei

Das Braupaket wird zum Hinzufügen oder Entfernen von Rezepten zum Botania Braustand verwendet.

## Anruf

Sie können das Braupaket mit `mods.botania.Brew` anrufen

## Gebräu Namen

Um dieses Paket nutzen zu können, müssen Sie Botaniens registrierte Braunamen kennen.  
Sie finden sie unter [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Rezeptzusatz

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] Eingabe, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Rezept-Entfernung

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```