# Gestionnaire de Bracket SoundType

Le SoundType Bracket Handler vous donne accès aux SoundTypes du jeu. Actuellement, les seuls types de sons pris en charge sont:

<details>
    <summary>Cliquez pour développer la liste de types</summary>
    <ul>
        <li>Bois</li>
        <li>Sol</li>
        <li>Plante</li>
        <li>Pierre</li>
        <li>Métal</li>
        <li>Verre</li>
        <li>Tissu</li>
        <li>Sable</li>
        <li>Neige</li>
        <li>Échelle</li>
        <li>Enclume</li>
        <li>Slime</li>
    </ul>
</details>

Les SoundTypes sont référencés dans le gestionnaire SoundType Bracket de cette façon :

```zenscript
<soundtype:name>

<soundtype:wood>
```

Si le soundType est trouvé, cela retournera un objet [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/).