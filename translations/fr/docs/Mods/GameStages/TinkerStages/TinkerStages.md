# Etapes de Bricoleur

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Les étapes de Tinker permettent aux aspects du mod Construct de Tinkers d'être mis dans un système de progression personnalisé configuré par l'auteur du modpack. Pour plus d'informations, consultez la page des mods [ici](https://minecraft.curseforge.com/projects/tinkerstages)

## Restrictions générales

Restreint la fabrication des outils à une étape. Si plusieurs étapes sont ajoutées en utilisant cette méthode, le joueur aura besoin d'au moins une d'entre elles.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("un");
```

Restreint le remplacement de la pièce à une étape. Si plusieurs étapes sont ajoutées en utilisant cette méthode, le joueur aura besoin d'au moins une d'entre elles.

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("une");
```

Restreint la construction de pièces à une étape. Si plusieurs étapes sont ajoutées en utilisant cette méthode, le joueur aura besoin d'au moins une d'entre elles.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("une");
```

Restreint l'application des modificateurs à une étape. Si plusieurs étapes sont ajoutées en utilisant cette méthode, le joueur aura besoin d'au moins une d'entre elles.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("une");
```

## Restrictions spécifiques

Empêche un type d'outil spécifique d'être fabriqué à la station d'outils. Par exemple, vous pouvez restreindre l'artisanat des marteaux jusqu'à une étape spécifique.

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

Empêche un matériau d'être utilisé par le joueur. Y compris la fabrication, la construction de pièces et l'utilisation de l'outil.

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("une", "stone");
```

Empêche un modificateur spécifique d'être appliqué à un outil ou utilisé.

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## Exemple de script

```zenscript
//RESTRICTIONS GENERALES
//Empêche tous les outils sauf si l'étape est débloquée.
mods.TinkerStages.addGeneralCraftingStage("une");

//Empêche tout échange d'outils, sauf si l'étape est détachée.
mods.TinkerStages.addGeneralPartReplacingStage("une");

//Prends tout le bâtiment de pièce à moins que l'étape ne soit débloquée.
mods.TinkerStages.addGeneralPartBuildingStage("une");

//Empêche l'application de tout modificateur d'outil sauf si l'étape est déverrouillée.
mods.TinkerStages.addGeneralModifierStage("une");


//RESTRICTIONS SPECIFIQUES
//Empêche la fabrication de pioches à moins que la scène ne soit débloquée.
mods.TinkerStages.addToolTypeStage("two", "tconstruct:pickaxe");

//Empêche l'utilisation du matériel. 
mods.TinkerStages.addMaterialStage("two", "stone");

//Empêche le modificateur d'être appliqué.
mods.TinkerStages.addModifierStage("two", "mending_moss");
```