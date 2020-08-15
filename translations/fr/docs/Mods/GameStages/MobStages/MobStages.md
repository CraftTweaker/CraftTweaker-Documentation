# Étapes des créatures

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Mob Stages permet de configurer l'apparition des créatures dans un système de progression personnalisé. Pour plus d'informations sur le fonctionnement du mod, consultez la page du mod [ici](https://minecraft.curseforge.com/projects/mob-stages)

## Options globales

Crée une nouvelle entrée gloabl pour le mob. Une seule entrée globale peut exister par mob.

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Ajoute un remplacement pour le mob. Si le mob ne parvient pas à apparaître parce qu'il n'y a pas de joueurs valides à proximité, le mob de remplacement apparaîtra à sa place.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Définit la plage pour rechercher des joueurs valides. La plage par défaut est de 512 blocs, donc c'est optionnel.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Permet aux spawners de remplacer la vérification de phase. La valeur par défaut est faux. Si activé, les spawners fonctionneront pour ce mob, même s'il n'y a pas de joueurs valides.

```zenscript
// mods.MobStages.toggleSpawners(String entityId, boolean allow);
mods.MobStages.toggleSpawners("minecraft:zombie", true);
```

## Options spécifiques à la dimension

Les options spécifiques aux dimensions sont presque les mêmes que les options globales, Cependant, ils ont un autre argument ajouté à la fin, qui est l'id de dimension Integer. Les entrées spécifiques à la dimension remplaceront l'entrée globale dans cette dimension. Vous ne pouvez avoir qu'une seule entrée par mob, par dimension.

## Exemple de script

```zenscript
// Les creepers ont besoin de la phase 1 pour faire apparaître
mods.MobStages.addStage("une", "minecraft:creeper");

// Les squelettes nécessitent la phase 2 ou tout spawner.
mods.MobStages.addStage("two", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Les araignées nécessitent l'étape 3 dans le nether.
mods.MobStages.addStage("three", "minecraft:spider", -1);

// Zombies requièrent l'étape 4 dans le nether, et sont remplacés par des chauves-souris s'ils ne le peuvent pas.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```