# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Juste une tentative de compatibilité de traitement de minerais) est un mod qui vise à ajouter la compatibilité du traitement du minerai à de nombreux mods.

## Importation du paquet

Si vous voulez raccourcir vos appels de méthode, vous pouvez importer le package.  
Vous pouvez le faire en utilisant

```zenscript
Importer mods.jaopca.JAOPCA;
```

## Méthodes

Ce paquet est votre point d'entrée pour JAOPCA. Il fournit un moyen de vérifier et d'obtenir des objets [OreEntry](/Mods/JAOPCA/OreEntry/). Consultez la page correspondante pour plus d'informations, mais en bref, ce sont des noms matériels (e. "Or") qui peut alors avoir des entrées, comme des chunks, des poussières et tout.

- Entrée : par exemple "nugget", "poussière", "fondu", ... (regardez [ici](/Mods/JAOPCA/RegisteredEntries/) pour une liste de toutes)
- [OreEntry](/Mods/JAOPCA/OreEntry/): par exemple "Diamant", "Charbon", "Redstone", ...
- OreType: par exemple "INGOT", "GEM", "DUST"

### Vérifier si une entrée existe

Retourne `true` si une entrée avec le nom donné existe

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### Obtenir une entrée OreEntry

Renvoie le [OreEntry donné](/Mods/JAOPCA/OreEntry/) pour le nom donné, ou `null` s'il n'existe pas. *Attention : La plupart des matériaux sont en majuscule et oui, les matières de caissage !*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Charbon");
```

### Obtenir toutes les OreIntries pour une entrée

Retourne une liste de tous les objets [OreEntry](/Mods/JAOPCA/OreEntry/) qui ont l'enregistrement de l'entrée donnée.

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Obtenir toutes les OreIntries pour une entrée

Renvoie une liste de tous les objets [OreEntry](/Mods/JAOPCA/OreEntry/) qui sont du type d'oreType donné.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Obtenir toutes les OreEntrées enregistrées

Retourne une liste de tous les objets enregistrés [OreEntry](/Mods/JAOPCA/OreEntry/).

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```