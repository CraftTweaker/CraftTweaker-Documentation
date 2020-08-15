# MCPotionEffect

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Paramètre     | Type de texte | Libellé                 |
| ------------- | ------------- | ----------------------- |
| durée         | Indice        | No description provided |
| amplificateur | Indice        | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Paramètre     | Type de texte | Libellé                 | IsOptional | Valeur par défaut |
| ------------- | ------------- | ----------------------- | ---------- | ----------------- |
| durée         | Indice        | No description provided | Faux       | null              |
| amplificateur | Indice        | No description provided | vrai       | 0                 |



## Propriétés

| Nom                | Type de texte                                                           | Has Getter | Has Setter |
| ------------------ | ----------------------------------------------------------------------- | ---------- | ---------- |
| Chaîne de commande | Chaîne de caractères                                                    | vrai       | Faux       |
| Éléments curatifs  | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | vrai       | Faux       |
| nomdeaffichage     | Chaîne de caractères                                                    | vrai       | Faux       |
| bénéficiaire       | boolean                                                                 | vrai       | Faux       |
| est instantané     | boolean                                                                 | vrai       | Faux       |
| Couleur du liquide | Indice                                                                  | vrai       | Faux       |
| Nom                | Chaîne de caractères                                                    | vrai       | Faux       |

