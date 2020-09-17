# IBlockDropHandler

La fonction IBlockDropHandler est utilisée pour permettre une gestion avancée du drop de blocs pour [Blocs](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) créés avec la [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Importation de la classe

Vous voulez importer la classe? Voici:

```zenscript
Importer mods.contenttweaker.DropHandler;
```

## Structure de fonction

La fonction est une fonction vide qui prend les paramètres suivants :

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) est en baisse.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) monde -> le monde dans lequel nous sommes, possible un [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), vous pourriez vouloir instancier et downcast
- [IBlockPos](/Vanilla/World/IBlockPos/) position -> la position du bloc
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) état -> le blockstate du bloc
- int fortune -> le niveau de fortune de l'outil utilisé

Comme cette méthode ne retourne rien, tous les drops doivent être ajoutés à la liste des `drops` en utilisant les méthodes exposées.  
Lisez à leur sujet [ici](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Exemple

```zenscript
block.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```