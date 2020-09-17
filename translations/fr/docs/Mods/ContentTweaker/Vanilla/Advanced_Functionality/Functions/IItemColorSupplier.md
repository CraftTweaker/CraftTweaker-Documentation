# IItemColorSupplier

La fonction IItemColorSupplier peut être utilisée pour fournir l'objet [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) à utiliser pour quoi que ce soit.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemColorSupplier ;`

## Paramètres

La fonction IItemColorSupplier est une fonction avec les paramètres suivants.

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → l'élément dont la couleur est demandée.
- int tintIndex → l'indice de teinture, utilisez ce que vous voulez. La fonction a besoin de retourner un [Objet Couleur](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).