# Gestionnaire de supports de bloc

Le gestionnaire de supports de blocs vous donne accès aux matériaux de bloc du jeu. Actuellement, les seuls matériaux de bloc pris en charge sont :

<details>
    <summary>Cliquez pour développer la liste de matériaux</summary>
    <ul>
        <li>Aérien</li>
        <li>Herbe</li>
        <li>Sol</li>
        <li>Bois</li>
        <li>Roche</li>
        <li>Fer</li>
        <li>Enclume</li>
        <li>Eau</li>
        <li>Lava</li>
        <li>Feuilles</li>
        <li>Plantes</li>
        <li>Vine</li>
        <li>Éponge</li>
        <li>Tissu</li>
        <li>Feu</li>
        <li>sable</li>
        <li>Circuits</li>
        <li>Tapis</li>
        <li>Verre</li>
        <li>format@@0 Redstone_Light</li>
        <li>TNT</li>
        <li>Corail</li>
        <li>Glace</li>
        <li>format@@0 Packed_Ice</li>
        <li>format@@0 Crafted_Snow</li>
        <li>Cactus</li>
        <li>Argile</li>
        <li>Gourd</li>
        <li>Oeuf_Dragon</li>
        <li>Portail</li>
        <li>Gâteau</li>
        <li>Web</li>
    </ul>
</details>

Les matériaux de bloc sont référencés dans le gestionnaire de supports de cette manière:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Si le matériau de bloc est trouvé, cela retournera un objet [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/).