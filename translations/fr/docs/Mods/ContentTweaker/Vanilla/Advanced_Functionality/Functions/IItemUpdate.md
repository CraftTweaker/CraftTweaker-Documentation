# IItemUpdate

La fonction IItemUpdateFunction peut être ajoutée à un élément [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) pour permettre l'exécution du code à chaque mise à jour de l'élément.

## Importation du paquet

Si vous sentez un jour le besoin d'importer la classe de cette fonction, c'est parti:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Syntaxe

Nous avons une fonction vide qui prend les paramètres suivants (dans l'ordre)

- Une [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) représentant la pile d'objet elle-même.
- Un objet [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) représentant le monde dans lequel l'action a lieu.
- Un [objet IEntity](/Vanilla/Entities/IEntity/) downcast autant que possible, afin que vous puissiez instanceOf jusqu'à [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- Un entier représentant l'emplacement dans lequel se trouve l'objet actuellement
- Un booléen indiquant si l'élément est sélectionné ou non.

```zenscript
item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
    //CODE GOES ICI!!
    retourner;
}
```