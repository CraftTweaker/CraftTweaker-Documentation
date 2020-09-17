# Fonction de glissement IEntity

Une fonction IEntityDropFunction est appelée chaque fois que l'entité associée est tuée. Laissez à votre imagination ce que vous pouvez faire avec ceci:

## Importation du pacakge

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityDropFunction;`

## Paramètres

La fonction IEntityDropFunction est une fonction avec les paramètres suivants :

- [IEntity](/Vanilla/Entities/IEntity/) entité → L'entité qui vient de mourir.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → La source de la mort de l'entité.

La fonction doit retourner un [IItemStack](/Vanilla/Items/IItemStack/), ou `null`.