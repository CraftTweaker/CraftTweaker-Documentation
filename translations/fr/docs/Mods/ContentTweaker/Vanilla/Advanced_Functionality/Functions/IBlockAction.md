# format@@0 IBlockAction

La fonction IBlockAction peut être ajoutée à un bloc [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) et, Selon l'endroit où vous l'avez ajouté, sera déclenché lorsque le bloc sera placé ou cassé.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IBlockAction ;`

## Paramètres

IBlockAction est une fonction avec les paramètres suivants :

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde dans lequel le bloc se trouve
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) position → La position du bloc
- [Etat ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) → Contient des informations sur le bloc, comme le Bloc lui-même et ses métadonnées

La fonction n'a pas de valeur de retour!

## Exemple

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("J'ai ÉTÉ PLACÉ!!!");
}
```