# Nom du fournisseur de traduction

La fonction ILocalizedNameSupplier est utilisée pour déterminer par programme le nom d'affichage d'un [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/).

## importation de la classe

Si vous voulez importer la classe de la fonction, voici :

```zenscript
Importer mods.contenttweaker.LocalizedNameSupplier;
```

## La configuration de la fonction

La fonction retourne une chaîne de caractères et prend une [IItemStack](/Vanilla/Items/IItemStack/) comme paramètre d'entrée unique.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```