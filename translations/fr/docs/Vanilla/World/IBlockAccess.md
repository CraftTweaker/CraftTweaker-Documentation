# Accès à l'IBlock

Les objets BlockAccess sont un groupe de blocs accessibles via les coordonnées. Ils servent principalement de superinterface à [IWorld](/Vanilla/World/IWorld/), ce qui signifie que toutes ces fonctions sont également disponibles pour tous les objets [IWorld](/Vanilla/World/IWorld/).

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.world.IBlockAccess`

## Méthodes Zen

### Obtenir ou définir un blockState à une position spécifique

Utilisez un objet [IBlockPos](/Vanilla/World/IBlockPos/) et un objet [IBlockState](/Vanilla/Blocks/IBlockState/) .  
Renvoie un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### Vérifie si un bloc est un bloc d'air.

Utilisez un objet [IBlockPos](/Vanilla/World/IBlockPos/) .  
Renvoie un bool.

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### Obtenir une puissance forte aux côtés d'un bloc

Utilisez un objet [IBlockPos](/Vanilla/World/IBlockPos/) et un objet [IFacing](/Vanilla/World/IFacing/) .  
Renvoie un int.

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```