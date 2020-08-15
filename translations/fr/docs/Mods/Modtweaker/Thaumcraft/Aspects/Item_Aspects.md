# Aspects de l'élément

L'intégration de Modtweaker Thaumcraft étend [IItemStacks](/Vanilla/Items/IItemStack/).  
Cela signifie que vous pouvez utiliser les méthodes ci-dessous sur n'importe quel objet IItemStack :

## Définir les aspects

Vous pouvez utiliser ceci pour outrepasser les aspects que contient normalement un élément.  
Requiert une [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] ou beaucoup d'objets [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5) ;
```

## Supprimer les aspects

Vous pouvez l'utiliser pour empêcher certains aspects d'être ajoutés à un objet.  
Requiert une [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] ou beaucoup d'objets [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```