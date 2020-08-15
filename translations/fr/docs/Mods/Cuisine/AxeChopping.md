# Hache hachée

## Disponibilité

Avant de faire quoi que ce soit, vous devriez vérifier si l'hachage est activé ou non :

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // fait des choses
} else {
    print("Axe Chopping est désactivé, sauter");
}
```

## Ajouter

```zenscript
import mods.cuisine.AxeChopping ;

AxeChopping.add(IItemStack input, IItemStack output);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// Si nécessaire, il est également possible d'utiliser le dictionnaire de minerais.
AxeChopping.add(IOreEntry entrée, sortie IItemStack);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Retirer

```zenscript
import mods.cuisine.AxeChopping;

// Supprime par entrée.
AxeChopping.remove(IItemStack input);

AxeChopping.remove(<item:minecraft:log>);

// Supprimer par sortie.
AxeChopping.removeByOutput(sortie IItemStack);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Supprimer par identifiant.
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// Supprime tout !
Enlever tout();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChopping.getDefaultStickOutput();
```