# IItemDétruit

La fonction IItemDestroyedBlock peut être ajoutée à un élément [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et s'exécutera chaque fois que vous essayez de casser un bloc avec l'élément assicifié.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemDestroyedBlock;`

## Paramètres

Le IItemDestroyedBlock est une fonction avec les paramètres suivants :

- [La pile IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) → L'élément.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde qui se déroule en
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → L'état du bloc qui est miné.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Où cela a-t-il lieu ?
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entité → Qui / Qu'est-ce qui mine le bloc ?

La fonction a besoin de retourner un booléen, c'est-à-dire `true` si le processus blockBreaking est réussi, et `false` s'il ne l'est pas.