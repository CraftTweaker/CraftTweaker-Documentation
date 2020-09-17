# Vitesse de destruction de l'IIème

La fonction IItemDestroySpeed peut être ajoutée à un objet [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et déterminera la vitesse de rupture de bloc de l'objet.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemDestroySped;`

## Paramètres

La IItemDestroySpeed est une fonction avec les paramètres suivants :

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → L'élément.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → L'état du bloc qui est miné.

La fonction doit retourner une valeur à virgule flottante.