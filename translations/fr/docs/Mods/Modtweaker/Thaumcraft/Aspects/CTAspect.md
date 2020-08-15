# format@@0 CTAspect

Un CTAspect est l'aspect sous-jacent d'une [Pile d'Aspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), comme un [IItemDefinition](/Vanilla/Items/IItemDefinition/) sous-tend un [IItemStack](/Vanilla/Items/IItemStack/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer thaumcraft.aspect.CTAspect;`

## Récupération d'un tel objet

Vous pouvez récupérer un objet CTAspect depuis un objet [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/):

```zenscript
aspect val = <aspect:ignis>.internal;
```

## ZenGetters et ZenSetters

| Nom            | isGetter | isSetter | Type de texte        |
| -------------- | -------- | -------- | -------------------- |
| chatColo**u**r | ✔        | ✔        | chaîne de caractères |
| Nom            | ✔        |          | chaîne de caractères |