# Aspects de l'entité

L'intégration Thaumcraft de Modtweaker étend [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Cela signifie que vous pouvez utiliser les méthodes ci-dessous sur n'importe quel objet IEntityDefinition :

## Définir les aspects

Vous pouvez utiliser ceci pour outrepasser les aspects qu'une entité aurait normalement à avoir.  
Requiert une [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] ou beaucoup d'objets [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5) ;
```

## Supprimer les aspects

Vous pouvez l'utiliser pour éviter que certains aspects ne soient ajoutés à une entité.  
Requiert une [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] ou beaucoup d'objets [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```