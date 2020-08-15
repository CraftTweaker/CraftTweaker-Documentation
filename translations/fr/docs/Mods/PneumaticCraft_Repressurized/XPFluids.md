# Fluides d'XP

Les fluides d'XP sont utilisés dans PneumaticCraft: Repressurisé par l'interface aérienne, un bloc puissant qui peut interfacer à distance avec un joueur lié. Les Fluides d'XP pompés dans l'interface aérienne sont convertis en niveaux d'expérience des joueurs, et les Fluides d'XP pompés sont tirés de l'expérience du joueur.

Par défaut, les fluides suivants sont reconnus par l'interface aérienne:

* Jus d'XP (EnderIO, Cyclique, Blocs ouverts)
* Essence de connaissance (extension thermique)
* Essence des créatures (Foregoing Industriel)

Ce paquet permet à d'autres fluides arbitraires d'être utilisés par l'interface aérienne en tant que fluides XP, ou pour que les fluides XP existants soient décollés.

## Appel en cours

Vous pouvez appeler le package XP Fluids en utilisant `mods.pneumaticcraft.xpfluid`.

## Enlèvement

Cette fonction déegiste la [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluide`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Exemple
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Cette fonction désendette *tous les* fluides XP connus :

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Ajout en cours

Cette fonction peut être utilisée pour enregistrer les fluides en tant que fluides XP :

```zenscript
// Enregistrez un liquide en tant que fluide XP. xpRatio définit la quantité d'XP du joueur par millibucket de fluide.
mods.pneumaticcraft.xpfluid.addXPFluid.LiquidStack fluid, double ratio);

// Exemple: enregistrer le GPL comme un fluide XP d'une valeur de 10 XP par mB
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```