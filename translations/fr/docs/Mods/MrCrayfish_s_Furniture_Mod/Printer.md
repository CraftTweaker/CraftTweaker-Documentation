# Imprimante

L'Impression vous permet de faire une copie d'un article.

Par défaut peut copier des livres écrits et des livres enchantés.

## Enlèvement

## Supprimer les éléments pouvant être copiés correspondants.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Supprime tous les éléments imprimables.
mods.cfm.Printer.remove();
```

## Ajout en cours

## Ajouter un objet copiable.

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```