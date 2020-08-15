# Machines

La GTCE stocke toutes les recettes dans une `RecipeMap`. Pour les obtenir, vous devez importer `mods.gregtech.recipe.RecipeMap` dans votre code.

Les recettes sont catégorisées dans leurs machines, appelez `RecipeMap.getByName(machineName)` pour obtenir des recettes et des constructeurs spécifiques.

## Liste des machines disponibles

- Compresseur : `compresseur`
- Extracteur : `extracteur`
- Macerator: `macerator`
- Plante de lavage de minerai : `laveuse de minerai`
- centrifuge thermique : `thermal_centrifuge`
- Four : `four`
- Micro-ondes : `micro-ondes`
- Machine d'assemblage : `assembleur`
- Pression formée : `forming_press`
- Canon de fluide : `fluid_canner`
- Four à arc plasma : `plasma_arc_furnace`
- Four arc : `arc_furnace`
- Machine de tamisage : `tamiseur`
- Precision laser engraver: `laser_engraver`
- Machine de mixage : `mélangeur`
- Autoclave: `autoclave`
- Séparateur électromagnétique : `électromagnetic_separator`
- Polarizer: `polarizer`
- Bain de produits chimiques : `chimique_bath`
- Machine à brasser : `brasseur`
- Chauffage de fluide : `fluid_heater`
- Distillerie : `distillerie`
- Fermenteur: `fermenteur`
- solidificateur de fluide : `fluid_solidifier`
- Extracteur de fluide : `fluid_extractor`
- Centrifuge : `centrifuge`
- Électrolyseur : `électrolyseur`
- Explosion du four : `blast_furnace`
- Implo compresseur : `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Réacteur chimique : `chimique_reactor`
- Tour distante : `distillation_tower`
- Unité de craquage : `craquage`
- Four à pyrolyse : `pyro`
- Wiremill : `wiremill`
- Bender: `métal_bender`
- Fonderie d'Alliage : `alloy_smelter`
- Machine à conserve : `canner`
- Lathe: `lathe`
- Machine de coupe de blocs : `coupe_saw`
- Extruder : `extrudeur`
- Marteau de Forge : `forge_hammer`
- Machine d'empaquetage : `packer`
- Désempaquetage de la machine : `déballage`
- Diesel gen: `diesel_generator`
- Éolienne à gaz : `gaz_turbine`
- Éolienne à vapeur : `steam_turbine`
- Générateur de plasma : `Générateur de plasma_`

**Pas encore implémenté :**

- Producteur Uu-mater : `uuuamplifier`
- Générateur thermique : `Générateur thermique`
- Générateur semi-fluide : `semi_fluid_generator`
- Réacteur de fusion : `fusion_reactor`

**Primitive Blast Furnace** *uses different syntax from normal recipes.* For example:

```zenscript
import mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Furnace
PBFRecipeBuilder.start()
    .input(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>.firstItem * 1)
    .duration(250)
    .fuelAmount(2)
    .buildAndRegister();

//Remove recipes from PBF
import mods.gregtech.recipe.RecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Informations sur le constructeur

Après avoir obtenu une instance de `RecipeMap`, vous pouvez définir des recettes en utilisant leur constructeur.

Méthode d'appel du constructeur:

```zenscript
recipeMap.recipeBuilder()
```

C'est un peu comme `Stream<T>` en Java, avec entièrement fonctionnellement pour contrôler le comportement de votre recette.

Exemple pour EBF :

```zenscript
// Fournaise de combustion électrique
blast_furnace val = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace. ecipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    . luidInputs([<liquid:oxygen> * 500])
    . utputs(<ore:ingotSteel>.firstItem * 1)
    . roperty("température", 1000) //c'est une température minimale à laquelle l'objet sera fondu
    . uration(40)
    .EUt(120)
    .buildAndRegister();
```

Quelques propriétés assignables à la méthode `.property()`:

| Nom         | Libellé                                                                |
| ----------- | ---------------------------------------------------------------------- |
| explosifs   | Compresseur d'implosion, quantité d'explosifs                          |
| Circuit     | Machines intégrées configurables par Circuit. Configuration du circuit |
| température | Explosion de four. Température minimale requise.                       |

Celles-ci ne sont **PAS ENCORE IMPLÉMENTÉES :**

| Nom              | Libellé                                               |
| ---------------- | ----------------------------------------------------- |
| amplificateur    | Amplificateur UU. Quantité d'amplificateur UU sortie. |
| eu_à_commencer | Réacteur de fusion, UE pour commencer la fusion       |

Vous l'utilisez comme la "température":

```zenscript
.property("circuit", X)//, où X est la configuration de circuit intégré
.property("explosives", Y)//, où Y est la quantité d'explosifs nécessaire pour faire un travail de recette
```

Méthodes plus utiles:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 is 100%) // (itemstack, intitial output chance, tier output chance boost
. uration() // en ticks
.notConsumable(X) // où X est un identifiant CT. Fonctionne en tant que .inputs, mais l'élément ne sera pas consommé
.hidden() // si la recette est cachée dans le JEI
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 est 100%) // non valide pour chaque machine. certains d'entre eux utilisent cette méthode. Le plus remarquable est le macerator
.EUt() // EU par tick
```

## Enlèvement

La suppression d'une recette se fait par l'instance de recette elle-même, donc vous devez d'abord trouver une recette.

Exemple:

```zenscript
val compressor as RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(long voltage, IItemHandlerModifiable inputs, IMultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```