# IBlockColorSupplier

La fonction IBlockColorSupplier peut être utilisée pour fournir l'objet [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) à utiliser pour quoi que ce soit.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IBlockColorSupplier ;`

## Paramètres

La fonction IBlockColorSupplier est une fonction avec les paramètres suivants.

- [Etat ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) → le blockstate du bloc dont la couleur est demandée.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) accès → l'accès au bloc du bloc dont la couleur est demandée.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → la position du bloc dont la couleur est demandée.
- int tintIndex → l'indice de teinture, utilisez ce que vous voulez. La fonction a besoin de retourner un [Objet Couleur](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Exemples

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState;
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker. orld.IBlockAccess;

fonction getBlockColor(state as BlockState, access as IBlockAccess, pos as BlockPos, tintIndex comme int) comme Color {
  //Renvoie une couleur de chaux
    retourner la couleur. romInt(0x00FF00) ;
}
```