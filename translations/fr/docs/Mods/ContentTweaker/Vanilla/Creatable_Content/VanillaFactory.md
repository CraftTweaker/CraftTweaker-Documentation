# Usine de vanille

La Vanilla Factory vous permet de créer des [Blocs](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Éléments](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et [Onglets Créatifs](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) que vous pouvez ensuite ajouter au jeu.

## Appel en cours

Vous pouvez trouver le package sur `mods.contenttweaker.VanillaFactory`

## Création du contenu

### Créer des blocs

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition material);
```

Paramètres:

- Chaîne unlocalizedName: Le nom non localisé du bloc.
- [Définition IMatériale](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) matériau : La base matériau dont le bloc est composé.

Retourne un objet [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/). Consultez la [Page Bloc](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) pour plus d'informations et un exemple de script !

### Créer des éléments

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Paramètres:

- String unlocalizedName: Le nom non localisé de l'élément.

Retourne un objet [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Consultez la page [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) pour plus d'informations et un exemple de script !

### Créer des onglets créatifs

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Paramètres:

- Chaîne unlocalizedName: Nom non localisé de l'onglet
- Représentation d'un élément ou d'un bloc : L'élément/bloc à afficher comme symbole de l'onglet. Vous pouvez également utiliser une fonction [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/).

Retourne un objet [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/). Consultez la [page de l'onglet Créatif](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) pour plus d'informations et un exemple de script !

### Créer des fluides

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

Paramètres:

- String unlocalizedName: Le nom non localisé de Fluid.
- int color: Couleur-code couleur du fluide.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) couleur : La couleur du fluide en tant que couleur-objet.

Retourne un objet [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/). Consultez la [page Fluid](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) pour plus d'informations et un exemple de script.

### Créer des articles alimentaires

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

Paramètres:

- Chaîne unlocalizedName: Nom non localisé de l'élément.
- int healamount: The Food Value

Retourne un objet [ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Consultez la [page Aliments](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) pour plus d'informations et un exemple de script.